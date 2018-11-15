import { SensorData } from '../interface/sensor-data';

export class Sensor implements SensorData {

    _id: String;
    temp: Number;
    date: Date;
    p2: Number;
    p1: Number;
    humi: Number;

    constructor(paramData: SensorData) {

        this._id = paramData._id;
        this.temp = paramData.temp;
        this.date = paramData.date;
        this.p2 = paramData.p2;
        this.p1 = paramData.p1;
        this.humi = paramData.humi;
    }


}
