import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Config from './config/config';
import sensor from './routes/sensor';

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect(Config.dbUrl);

app.use('/api', sensor);  

app.listen(port);
console.log('server starts at 127.0.0.1::' + port);
