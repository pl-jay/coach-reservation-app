import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { RouteGuard } from './_guards/route.guard'

const routes: Routes = [
  { path:'login', component: LoginComponent,pathMatch:'full' },
  { path:'home', component: HomeComponent,pathMatch:'full' }, // , canActivate: [RouteGuard]
  { path:'', component: LoginComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
