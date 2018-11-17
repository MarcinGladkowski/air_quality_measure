import { Chart } from 'chart.js';

export class SensorTempChart {

    private chart: Chart;

    constructor(selector: string, data: {}) {

        this.chart = new Chart('tempCanvas', {
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

    makeChart() {
        return this.chart;
    }

}
