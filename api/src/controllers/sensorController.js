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
    async list(req, res) {
        await Sensor.find({}).sort({'createdDate': -1}).limit(100).exec(function(err, sensor) {
            return res.send(sensor);
        });
    }
}
