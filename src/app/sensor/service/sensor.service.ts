import { environment } from './../../../environments/environment';
import { SensorData } from './../interface/sensor-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sensor } from '../model/sensor';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http: HttpClient) { }

  getSensorData(): Observable<Sensor[]> {
    return this.http.get<SensorData[]>(`${environment.apiUrl}/api/sensor`).pipe(
      map((data) => data.map((sensorData) => new Sensor(sensorData)))
    );
  }
}
