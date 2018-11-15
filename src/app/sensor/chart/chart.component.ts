import { Component, OnInit } from '@angular/core';
import { SensorService } from '../service/sensor.service';
import { Sensor } from '../model/sensor';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  p1 = [];
  date = [];

  constructor(private sensorService: SensorService) { }

  ngOnInit() {
    this.sensorService.getSensorData().subscribe((data: Sensor[]) => {
      for (const sensor of data) {
        this.p1.push(sensor.p1);
      }
    });
  }

}
