import { Chart } from 'chart.js';

export abstract class AbstractChart {

    protected chart: Chart;

    get getChart() {
        return this.chart;
    }
}
