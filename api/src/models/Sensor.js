import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var SensorSchema   = new Schema({
    p1: Number,
    p2: Number,
    temp: Number,
    humi: Number,
    createdDate: {
        type: Date, 
        default: Date.now 
    }
});

const Sensor =  mongoose.model('Sensor', SensorSchema);
module.exports = Sensor;
