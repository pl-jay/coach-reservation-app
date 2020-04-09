import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { RouteGuard } from './_guards/route.guard'
import { PassengerComponent } from './_components/passenger/passenger/passenger.component';
import { ConductorComponent } from './_components/conductor/conductor/conductor.component';
import { TripsComponent } from './_components/trips/trips/trips.component';
import { RegisterComponent } from './_components/register/register.component';

const routes: Routes = [
  { path:'login', component: LoginComponent,pathMatch:'full' },
  { path:'register', component: RegisterComponent, pathMatch:'full'},
  { path:'home', component: HomeComponent,pathMatch:'full' }, // , canActivate: [RouteGuard]
  { path:'passenger', component: PassengerComponent, pathMatch:'full'},
  { path:'conductor', component: ConductorComponent, pathMatch:'full'},
  { path:'trips', component: TripsComponent, pathMatch:'full'},
  { path:'', component: LoginComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
