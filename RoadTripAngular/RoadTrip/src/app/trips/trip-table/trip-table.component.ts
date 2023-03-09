import { Input, Component } from '@angular/core';


@Component({
  selector: 'app-trip-table',
  templateUrl: './trip-table.component.html',
  styleUrls: ['./trip-table.component.css']
})
export class TripTableComponent{
  @Input() trip:any;
  @Input() index!: number;

  constructor() {}
}
