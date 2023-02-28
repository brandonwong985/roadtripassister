import { Component } from '@angular/core';
import SingleStop from '../share/SingleStop';
import { Observable } from 'rxjs';
import { TripserviceService } from '../tripservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent {
  SingleStop!: SingleStop;
  stopsObservable!: Observable<SingleStop>;
  stopId: string
  tripId: string;

  constructor(private trips: TripserviceService, private route: ActivatedRoute){
    this.tripId = route.snapshot.params['id'];
    this.stopId = route.snapshot.params['stopId'];
    trips.getStopDetail(this.tripId, this.stopId).subscribe((res: any) => {
      this.SingleStop = res;
    });
  }
}
