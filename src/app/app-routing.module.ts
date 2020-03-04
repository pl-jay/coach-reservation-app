import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent },
  { path:'', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
