import { Input, Component } from '@angular/core';
import Stop from "../share/stop";
import { Observable, ObservedValueOf } from 'rxjs';
import IStopModelAngular from '../share/IStopModelAngular';
import { ActivatedRoute, Params } from '@angular/router';
import { TripserviceService } from '../tripservice.service';
import { StopsComponent } from './stops/stops.component';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent {
  Stops!: Stop;
  stopTripId!: number;
  tripId: string;

  constructor(private trips: TripserviceService, private route: ActivatedRoute){
    this.tripId = route.snapshot.params['id'];
    trips.getStopsDetails(this.tripId).subscribe((res: any) => {
      this.stopTripId = res.tripId;
      this.Stops = res;
    });
  }
}
