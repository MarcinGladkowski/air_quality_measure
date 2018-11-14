import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorRoutingModule } from './sensor-routing.module';
import { ChartComponent } from './chart/chart.component';
import { SensorComponent } from './sensor/sensor.component';

@NgModule({
  declarations: [ChartComponent, SensorComponent],
  imports: [
    CommonModule,
    SensorRoutingModule
  ]
})
export class SensorModule { }
