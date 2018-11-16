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

  p1 = [];
  date = [];
  chart = [];
  i = 0;

  constructor(private sensorService: SensorService) { }

  ngOnInit() {
    this.sensorService.getSensorData().subscribe((data: Sensor[]) => {

      if (this.i <= 10) {
        for (const sensor of data) {
          const sensorDate: string = sensor.createdDate;
          this.p1.push(sensor.p1);
          this.date.push(new Date(sensorDate));
          this.i++;
        }
      }

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.date,
          datasets: [
            {
              data: this.p1,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });


    });
  }

}
