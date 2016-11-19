import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import multer from "multer";
import fs from "fs";


export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	api.post('/new_user', (req, res) => {
		const {first_name, last_name, username, hash, phone_number, email} = req.body;
        
        db.query('INSERT INTO users SET ?', req.body, function(err, result){
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        });
	});
    
    api.post('/login', (req, res) => {
        const {username, hash} = req.body;
        req.session.username = username;
        console.log(req.session)
        db.query('SELECT * FROM users WHERE username = \'' + username + '\' and hash = \'' + hash + '\'', (err, rows, fields) => {
            if(rows.length != 1){
                res.send("failure");
            }else{
                res.send(rows[0]);
            }
        });
        
    });
    
    api.get('/users', (req, res) => {
        console.log(req.session)
        db.query('SELECT * FROM users', (err, rows, fields) => {
            res.send(rows)
        })
    })
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    });
    var upload = multer({ storage: storage });
    api.post('/image/add/:userId/:deviceid', upload.single('file'), (req, res) => {
        const userId = req.params.userId;
        const originalName = req.file.originalname;
        const re = /(?:\.([^.]+))?$/;
        const fileType = re.exec(originalName)[0];
       const insertImagesQuery = 'INSERT INTO images(user_id, image) VALUES (' + userId + ', \'' + fileType + '\')';
       
       db.query(insertImagesQuery, (err, result) => {
            if(err){
                console.log(err);
            }else{
                console.log(result);
                const oldPath = 'uploads/' + originalName;
                const newPath = 'uploads/' + result.insertId  + fileType;
                fs.rename(oldPath, newPath, (err) => {
                    if(err) console.log(err);
                });
            }
           res.send("upload successful");
       });
    });
    
    api.get('/image/:userId', (req, res) => {
        var getImagesQuery = 'SELECT * FROM images WHERE user_id = ' + req.params.userId + '';
        db.query(getImagesQuery, (err, rows, fields) => {
            if(err){
                res.send(err);
            }else{
                res.send(rows);
            }
        })
    })
    
    api.get('/notification_settings/:userId', (req, res) => {
        const userId = req.params.userId;
        const getNotificationSettingsQuery = 'SELECT * FROM user_settings WHERE user_id=' + userId;
        console.log(getNotificationSettingsQuery)
        db.query(getNotificationSettingsQuery, (err, rows, fields) => {
            if(err){
                console.log(err)
                res.send(err)
            }else{
                res.send(rows)
            }
        })
    })
    
    api.post('/notification_settings', (req, res) => {
        if(req.body.length < 1){
            res.end("nothing to save")
        }
        const userId = req.body[0].user_id
        const settings = req.body.filter(setting => {
            if(setting.new){
                delete setting.new
                delete setting.setting_id
                return setting
            }
        })
        if(settings.length < 1){
            res.end("nothing to add");
            return;
        } 
        const postNotificationSettingsQuery = 'INSERT INTO user_settings SET ?';
        db.query(postNotificationSettingsQuery, settings, (err, result) => {
            if(err){
                console.log(err)
                res.send(err)
            }else{
                res.send("success")
            }
        })
    })


	return api;
}
