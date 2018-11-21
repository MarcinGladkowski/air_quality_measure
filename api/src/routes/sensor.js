import express from 'express';
import multer from 'multer';
import fs from 'fs';
import dateformat from 'dateformat';
import ip from 'ip';

import Sensor from '../models/Sensor';
import Config from '../config/config';

const upload = multer();
const router = express.Router();

router.post('/sensor',  upload.fields([]), function (req, res) {  

  const remoteAddress = req.headers['x-real-ip'] || req.connection.remoteAddress;

  if (ip.isEqual(Config.allow_ip, remoteAddress)) {
    const SensorData = new Sensor();

    SensorData.p1 = req.body.sensordatavalues[0].value;
    SensorData.p2 = req.body.sensordatavalues[1].value;
    SensorData.temp = req.body.sensordatavalues[2].value;
    SensorData.humi = req.body.sensordatavalues[3].value;

    SensorData.save(function (err) {
      if (err) { 
        res.send(err);
      }

     res.status(200).send({'status': 'ok'});  
    });

  } else {
    res.status(401).send({'status': 'Ip address not allowed'});
  }
  
});


router.get('/sensor', function (req, res) {
  Sensor.find({}).sort({'createdDate': -1}).limit(100).exec(function(err, sensor) {
     res.send(sensor);
  });
});

module.exports = router
