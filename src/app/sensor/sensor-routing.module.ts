import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {path: 'chart', component: ChartComponent},
  {path: '', redirectTo: 'chart', pathMatch: 'full'},
  {path: '**', redirectTo: 'sensor', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorRoutingModule { }
