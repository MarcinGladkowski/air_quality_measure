import { Chart } from 'chart.js';
import { AbstractChart } from './abstract-chart';

export class SensorPmChart extends AbstractChart {

    constructor(selector: string, data: {}) {

        super();

        this.chart = new Chart(selector, {
            type: 'line',
            data: {
              labels: data['date'],
              datasets: [
                {
                  data: data['p1'],
                  borderColor: '#b591c4',
                  fill: false,
                  label: 'PM 10'
                },
                {
                  data: data['p2'],
                  borderColor: '#7cb1d3',
                  fill: false,
                  label: 'PM 2.5'
                },
              ]
            },
            options: {
              legend: {
                display: true,
                position: 'right'
              },
              title: {
                display: true,
                text: 'Stężenie PM10 i PM2.5'
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
    }
}
