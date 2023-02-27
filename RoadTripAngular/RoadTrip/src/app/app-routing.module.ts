import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Trip } from './share/trip';
import { StopsComponent } from './trip/stops/stops.component';
import { TripComponent } from './trip/trip.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [
  {path: '', component: TripsComponent},
  {path: 'trip', component: StopsComponent},
  {path: 'trip/:id', component: TripComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }