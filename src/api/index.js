import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import multer from "multer";
import fs from "fs";
import twilio from "twilio";


export default ({ config, db }) => {
	let api = Router();
    

	// mount the facets resource
	api.use('/facets', facets({ config, db }));
        
    /*Creates new user*/
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
    
    /*Returns all users*/    
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
    /*Post image to user account ( TODO: can probably remove the deviceid param) */
    api.post('/image/add/:userId/:deviceid', upload.single('file'), (req, res) => {
        const userId = req.params.userId;
        const originalName = req.file.originalname;
        const re = /(?:\.([^.]+))?$/;
        const fileType = re.exec(originalName)[0];
        const insertImagesQuery = 'INSERT INTO images(user_id, image) VALUES (' + userId + ', \'' + fileType + '\')';
        const currentTime = new Date();
        console.log('hello...from post image')
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
                notification_sender(currentTime, userId, result.insertId + fileType);
                res.send("upload successful");
            }
           
       });
    });
    
    /* Returns all images for a user */
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
    
    /*Returns all user notification settings*/
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
    
    /*Creates new notification setting for a user*/
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
            }else if(setting.updated){
                delete setting.new
                delete setting.updated
                return setting
            }
        })
        if(settings.length < 1){
            res.end("nothing to add");
            return;
        } 
        console.log(settings)
        const postNotificationSettingsQuery = 'INSERT INTO user_settings SET ? ON DUPLICATE KEY UPDATE user_id=VALUES(user_id), start_time=VALUES(start_time), end_time=VALUES(end_time), notification_option_id=VALUES(notification_option_id)';
        db.query(postNotificationSettingsQuery, settings, (err, result) => {
            if(err){
                console.log(err)
                res.send(err)
            }else{
                res.send("success")
            }
        })
    })
    
    api.post('/delete_notification', (req, res) => {
        console.log(req.body)
        const setting_id = req.body.id;
        db.query('DELETE FROM user_settings WHERE setting_id = ' + setting_id, (err, result) => {
            if(err){
                console.log(err)
                res.send("error deleting setting")
            }else{
                res.send("setting deleted")
            }
        })
    })
    
    api.post('/get_devices', (req, res) => {
        const userId = req.body.user
        const getDevicesQuery = "SELECT * FROM devices WHERE user_id=" + userId;
        
        db.query(getDevicesQuery, (err, rows, fields) => {
            if(err){
                console.log(err);
                res.send("error");
            }else{
                res.send(rows);
            }
        })
    })

    function notification_sender(currentTime, userId, image){
        console.log('hello')
        var phoneNumber = "";
        var email = "";
        db.query('SELECT phone_number FROM users WHERE user_id = ' + userId, (err, rows, fields) => {
            if(err){
                console.log(err)
            }else{
                phoneNumber = rows[0].phone_number
                email = rows[0].email
            }
        })
        
        db.query('SELECT * FROM user_settings WHERE user_id = ' + userId, (err, rows, fields) => {
            for(var i = 0; i < rows.length; i++){
                var start = rows[i].start_time;
                var end = rows[i].end_time;
                
                start = start.substring(0, start.length - 3)
                end = end.substring(0, end.length - 3)
                var startHour = start.substring(0, start.length - 3)
                var startMin = start.substring(3, start.length)
                var endHour = end.substring(0, end.length - 3)
                var endMin = end.substring(3, end.length)
                var currentHour = (currentTime.getHours() + 18) % 24
                var currentMin = currentTime.getMinutes()
                var notificationOption = rows[i].notification_option_id
                console.log(startHour, startMin, endHour, endMin, currentHour, currentMin, notificationOption)
                
                if(currentHour >= startHour){
                    if(currentHour <= endHour){
                        var client = twilio('AC829a39279ac90acd316da00059e17063', '9a00afc719a07f1a3e84f350f5817027')
                        if(notificationOption == 1){
                            console.log("Sending email...")
                            client.sendMessage({
                                to: 'jrfay08@gmail.com',
                                from: '+16363361341',
                                body: 'Alert! Motion detected by your Raspberry Pi!',
                                mediaUrl: "http://ec2-35-160-234-54.us-west-2.compute.amazonaws.com/" + image
                            })
                        }else if (notificationOption == 2){
                            console.log("Sending text...")
                            client.sendMessage({
                                to: '+15734246735',
                                from: '+16363361341',
                                body: 'Alert! Motion detected by your Raspberry Pi!',
                                mediaUrl: "http://ec2-35-160-234-54.us-west-2.compute.amazonaws.com/" + image
                            })
                        }else if(notificationOption == 3){
                            console.log("Sending both...")
                            client.sendMessage({
                                to: '+15734246735',
                                from: '+16363361341',
                                body: 'Alert! Motion detected by your Raspberry Pi!',
                                mediaUrl: "http://ec2-35-160-234-54.us-west-2.compute.amazonaws.com/" + image
                            })
                            client.sendMessage({
                                to: '+15734246735',
                                from: '+16363361341',
                                body: 'Alert! Motion detected by your Raspberry Pi!',
                                mediaUrl: "http://ec2-35-160-234-54.us-west-2.compute.amazonaws.com/" + image
                            })
                        }
                        return;
                    }
                }                
            }
            
            return false;
        })
    }
    

	return api;
}
