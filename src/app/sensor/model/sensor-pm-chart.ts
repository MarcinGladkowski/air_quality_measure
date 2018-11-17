import { Chart } from 'chart.js';

export class SensorPmChart {

    private chart: Chart;

    constructor(selector: string, data: {}) {

        this.chart = new Chart('pmCanvas', {
            type: 'line',
            data: {
              labels: data['date'],
              datasets: [
                {
                  data: data['p1'],
                  borderColor: '#8e5ea2',
                  fill: false,
                  label: 'PM 10'
                },
                {
                  data: data['p2'],
                  borderColor: '#3e95cd',
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
