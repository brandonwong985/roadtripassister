import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripComponent } from './trip/trip.component';
import { StopsComponent } from './trip/stops/stops.component';
import { TripsComponent } from './trips/trips.component';

@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    StopsComponent,
    TripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
