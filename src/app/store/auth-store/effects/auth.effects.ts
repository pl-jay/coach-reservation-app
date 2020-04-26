import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap, mergeMap, map, switchMap, catchError, exhaustMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/auth.service';
import * as authActions from '../actions/auth.actions';
import { of } from 'rxjs';



@Injectable()
export class AuthEffects {

  constructor(private action$: Actions,
    private authService: AuthService,
    private router: Router,
  ) { }

  login$ = createEffect(() => this.action$.pipe(
    ofType(authActions.LOGIN),
    switchMap(action =>
       this.authService.logIn(action.username, action.password).pipe(
        map(user => authActions.LOGIN_SUCCESS({ user })),

        catchError(error => of(authActions.LOGIN_FAILED({ error })))
      )
      )
  ))

  loginSuccess$ = createEffect(() => this.action$.pipe(

    ofType(authActions.LOGIN_SUCCESS),
    tap((result) => {
      localStorage.setItem('token', result.user.access_token)
      localStorage.setItem('role', result.user.user_role[0]['authority'])
      localStorage.setItem('expiresAt', result.user.expires_in)
      this.router.navigate(['/home'])
      this.authService.checkToken()
    })
  )).subscribe()

  logout$ = createEffect(() =>  this.action$.pipe(
      ofType(authActions.LOGOUT),
      tap((user) => {
        localStorage.clear()
        this.router.navigate(['/auth/login'])
        this.authService.checkToken();
      }))).subscribe()

}
