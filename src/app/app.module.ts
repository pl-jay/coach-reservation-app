import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { PassengerComponent } from './_components/passenger/passenger/passenger.component';
import { ConductorComponent } from './_components/conductor/conductor/conductor.component';
import { TripsComponent } from './_components/trips/trips/trips.component';

// import material modules
import { MaterialModule } from './material.module'
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './_components/register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    PassengerComponent,
    ConductorComponent,
    TripsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
