import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { RouteGuard } from './core/_guards/route.guard';


const routes: Routes = [

  { path:'home', component: HomeComponent,pathMatch:'full', canActivate: [RouteGuard] },

  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },

  { path:'**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
