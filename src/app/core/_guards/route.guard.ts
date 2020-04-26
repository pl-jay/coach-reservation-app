import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service'

@Injectable({
  providedIn: 'root'
})

export class RouteGuard implements CanActivate {
  constructor(private _auth: AuthService , private _router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    this._router.navigate(['/auth/login']).then(() => {
      window.location.reload();
    });
    return false;
  }


}
