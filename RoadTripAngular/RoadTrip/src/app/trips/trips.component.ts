import { Input, Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import ITripModelAngular from '../share/ITripModelAngular';
import { TripserviceService } from '../tripservice.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {
  tripObservable: Observable<ITripModelAngular[]>;

  @Input() tripNumber: number[] = [1,2];

  constructor(trips: TripserviceService){
    this.tripObservable = trips.getTripIndex();
  }
}
