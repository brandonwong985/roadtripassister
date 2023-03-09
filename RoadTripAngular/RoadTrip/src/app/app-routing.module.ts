import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Trip } from './share/trip';
import { StopsComponent } from './trip/stops/stops.component';
import { TripComponent } from './trip/trip.component';
import { TripsComponent } from './trips/trips.component';
import { StopComponent } from './stop/stop.component';

const routes: Routes = [
  {path: '', component: TripsComponent},
  {path: 'trip', component: TripsComponent},
  {path: 'trip/:id', component: TripComponent},
  {path: 'trip/:id/stop/:stopId', component: StopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
