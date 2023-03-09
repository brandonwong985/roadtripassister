import { Input, Component } from '@angular/core';
import IStopModelAngular from 'src/app/share/IStopModelAngular';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})
export class StopsComponent {
  @Input() stops!: IStopModelAngular;
  @Input() tripId!: string;
  constructor() {}
}
