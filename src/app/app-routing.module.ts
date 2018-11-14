import { SensorModule } from './sensor/sensor.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'sensor', loadChildren: () => SensorModule },
  {path: '', redirectTo: 'sensor', pathMatch: 'full'},
  {path: '**', redirectTo: 'sensor', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
