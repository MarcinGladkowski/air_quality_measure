import { Chart } from 'chart.js';
import { AbstractChart } from './abstract-chart';

export class SensorTempChart extends AbstractChart {

    constructor(selector: string, data: {}) {

        super();

        this.chart = new Chart(selector, {
            type: 'line',
            data: {
              labels: data['date'],
              datasets: [
                {
                  data: data['temp'],
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
              title: {
                display: true,
                text: 'Temperatura (wewnątrz obudowy czujnika)'
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
