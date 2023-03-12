import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Trip } from './share/trip';
import { StopsComponent } from './trip/stops/stops.component';
import { TripComponent } from './trip/trip.component';
import { TripsComponent } from './trips/trips.component';
import { StopComponent } from './stop/stop.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'trip', component: TripsComponent},
  {path: 'trip/:id', component: TripComponent},
  {path: 'trip/:id/stop/:stopId', component: StopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
