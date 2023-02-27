import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ITripModelAngular from './share/ITripModelAngular';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripserviceService {

  hostUrl:string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getTripIndex() {
    return this.httpClient.get<ITripModelAngular[]>(this.hostUrl + "/app/trip");
  }  
}
