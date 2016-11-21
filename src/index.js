import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import config from './config.json';
import session from 'express-session';
var MySQLStore = require('express-mysql-session')(session)

let app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

app.use(express.static('uploads'));
app.use(express.static('dist/'));


/*======SESSIONS========*/
var sessionStoreConfig = {
    user: 'root',
    password: 'root',
    host: 'localhost',
    database: 'team',
    port: 3306,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'session_data'
        }
    }
}

app.use(session({
        store: new MySQLStore(sessionStoreConfig),
        secret: 'test',
        resave: true,
        saveUninitialized: true
}))



/*========END SESSION=====*/

app.get('/', (req, res) => {
    res.sendFile('/dist/index.html')
})

// connect to db
initializeDb( db => {

	// internal middleware
	app.use(middleware({ config, db }));

	// api router
	app.use('/api', api({ config, db }));
    
    app.post('/login', (req, res) => {
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


	app.server.listen(8000);

	console.log(`Started on port ${app.server.address().port}`);
});

export default app;
