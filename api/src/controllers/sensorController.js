import Sensor from '../models/Sensor';

export default {
    /** create new party */
    async create(req, res) {

        await new Sensor({
            p1: req.body.sensordatavalues[0].value,
            p2: req.body.sensordatavalues[1].value,
            temp: req.body.sensordatavalues[2].value,
            humi: req.body.sensordatavalues[3].value,            
        }).save();

        return res.status(200).send({'status': 'ok'}); 
    },
    /** get all parties */
    async findAll(req, res) {
        
        const offset = parseInt(req.query.offset) || 0;
        const perPage = parseInt(req.query.per_page) || 100; 

        const sensorPromise = Sensor.find({}).skip(offset).limit(perPage).sort({'createdDate': -1}); // Promise
        const sensorCountPromise = Sensor.count(); // Promise

        const [sensor, sensorCount] =  await Promise.all([ sensorPromise, sensorCountPromise]);

        return res.status(200).send(sensor);
    }
}
