import { SensorData } from '../interface/sensor-data';
import * as moment from 'moment';

export class Sensor implements SensorData {

    _id: String;
    temp: Number;
    createdDate: string;
    p2: Number;
    p1: Number;
    humi: Number;

    constructor(paramData: SensorData) {

        this._id = paramData._id;
        this.temp = paramData.temp;
        this.createdDate = paramData.createdDate;
        this.p2 = paramData.p2;
        this.p1 = paramData.p1;
        this.humi = paramData.humi;
    }


}
