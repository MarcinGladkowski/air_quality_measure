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
  p2 = [];
  temp = [];
  date = [];
  humi = [];
  pmChart = [];
  tempChart = [];
  humiChart = [];
  i = 0;

  constructor(private sensorService: SensorService) { }

  ngOnInit() {
    this.sensorService.getSensorData().subscribe((data: Sensor[]) => {

        data.reverse();

        for (const sensor of data) {
          const sensorDate: string = sensor.createdDate;
          this.p1.push(sensor.p1);
          this.p2.push(sensor.p2);
          this.humi.push(sensor.humi);
          this.temp.push(sensor.temp);
          this.date.push(new Date(sensorDate));
        }

      this.pmChart = new Chart('pmCanvas', {
        type: 'line',
        data: {
          labels: this.date,
          datasets: [
            {
              data: this.p1,
              borderColor: '#8e5ea2',
              fill: false,
              label: 'PM 2.5'
            },
            {
              data: this.p2,
              borderColor: '#3e95cd',
              fill: false,
              label: 'PM 10'
            },
          ]
        },
        options: {
          legend: {
            display: true,
            position: 'right'
          },
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                displayFormats: {
                  'millisecond': 'h:mm',
                  'second': 'h:mm',
                  'minute': 'h:mm',
                  'hour': 'h:mm',
                  'day': 'h:mm',
                  'week': 'h:mm',
                  'month': 'h:mm',
                  'quarter': 'h:mm',
                  'year': 'h:mm',
                }
              }
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });

      this.tempChart = new Chart('tempCanvas', {
        type: 'line',
        data: {
          labels: this.date,
          datasets: [
            {
              data: this.temp,
              borderColor: '#297159',
              fill: false,
              label: 'temp'
            }
          ]
        },
        options: {
          legend: {
            display: true,
            position: 'right'
          },
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                displayFormats: {
                  'millisecond': 'h:mm',
                  'second': 'h:mm',
                  'minute': 'h:mm',
                  'hour': 'h:mm',
                  'day': 'h:mm',
                  'week': 'h:mm',
                  'month': 'h:mm',
                  'quarter': 'h:mm',
                  'year': 'h:mm',
                }
              }
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });


      this.humiChart = new Chart('humiCanvas', {
        type: 'line',
        data: {
          labels: this.date,
          datasets: [
            {
              data: this.humi,
              borderColor: '#E2E062',
              fill: false,
              label: 'humi'
            }
          ]
        },
        options: {
          legend: {
            display: true,
            position: 'right'
          },
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                displayFormats: {
                  'millisecond': 'h:mm',
                  'second': 'h:mm',
                  'minute': 'h:mm',
                  'hour': 'h:mm',
                  'day': 'h:mm',
                  'week': 'h:mm',
                  'month': 'h:mm',
                  'quarter': 'h:mm',
                  'year': 'h:mm',
                }
              }
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
