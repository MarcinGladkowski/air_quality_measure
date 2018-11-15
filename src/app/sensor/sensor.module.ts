import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorRoutingModule } from './sensor-routing.module';
import { ChartComponent } from './chart/chart.component';
import { SensorComponent } from './sensor/sensor.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ChartComponent, SensorComponent],
  imports: [
    CommonModule,
    SensorRoutingModule,
    HttpClientModule
  ]
})
export class SensorModule { }
