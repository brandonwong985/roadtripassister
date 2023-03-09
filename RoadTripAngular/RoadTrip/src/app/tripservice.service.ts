import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ITripModelAngular from './share/ITripModelAngular';
import IStopModelAngular from './share/IStopModelAngular';
import { Observable, of } from 'rxjs';
import Stop from './share/stop';

@Injectable({
  providedIn: 'root'
})
export class TripserviceService {

  hostUrl:string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getTripIndex() {
    return this.httpClient.get(this.hostUrl + "/app/trip");
  }

  getStopsDetails(id: string) {
    return this.httpClient.get(this.hostUrl + "/app/trip/" + id);
  }

  getStopDetail(id: string, stopId: string) {
    return this.httpClient.get(this.hostUrl + "/app/trip/" + id + "/stop/" + stopId);
  }
}
