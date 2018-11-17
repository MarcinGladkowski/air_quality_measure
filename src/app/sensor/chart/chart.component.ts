import { ChartData } from './../interface/chart-data';
import { SensorHumiChart } from './../model/sensor-humi-chart';
import { SensorTempChart } from './../model/sensor-temp-chart';
import { SensorPmChart } from './../model/sensor-pm-chart';
import { Component, OnInit } from '@angular/core';
import { SensorService } from '../service/sensor.service';
import { Sensor } from '../model/sensor';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  pmChart = [];
  tempChart = [];
  humiChart = [];

  parsedData: ChartData = {
    p1: [],
    p2: [],
    date: [],
    temp: [],
    humi: []
  };

  constructor(private sensorService: SensorService) { }

  ngOnInit() {
    this.sensorService.getSensorData().subscribe((data: Sensor[]) => {

        this.prepareDataForChart(data);

        this.pmChart = new SensorPmChart('pmCanvas', this.parsedData).makeChart();
        this.tempChart = new SensorTempChart('tempCanvas', this.parsedData).makeChart();
        this.humiChart = new SensorHumiChart('humiCanvas', this.parsedData).makeChart();
    });
  }

  private prepareDataForChart(data) {
    data.reverse();

    for (const sensor of data) {
      const sensorDate: string = sensor.createdDate;
      this.parsedData.p1.push(sensor.p1);
      this.parsedData.p2.push(sensor.p2);
      this.parsedData.temp.push(sensor.temp);
      this.parsedData.humi.push(sensor.humi);
      this.parsedData.date.push(new Date(sensorDate));
    }
  }
}
