import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripComponent } from './trip/trip.component';
import { StopsComponent } from './trip/stops/stops.component';
import { TripsComponent } from './trips/trips.component';
import { TripTableComponent } from './trips/trip-table/trip-table.component';
import { TripserviceService } from './tripservice.service';
import { HttpClientModule } from '@angular/common/http';
import { StopComponent } from './stop/stop.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    StopsComponent,
    TripsComponent,
    TripTableComponent,
    StopComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TripserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
