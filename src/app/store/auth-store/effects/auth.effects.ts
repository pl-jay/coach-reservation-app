import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap, mergeMap, map, switchMap, catchError, exhaustMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth.service';
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
    exhaustMap(action =>
      this.authService.logIn(action.username, action.password).pipe(
        map(user => authActions.LOGIN_SUCCESS({ user })),
        catchError(error => of(authActions.LOGIN_FAILED({ error })))
      ))
  ))

  loginSuccess$ = createEffect(() => this.action$.pipe(
    ofType(authActions.LOGIN_SUCCESS),
    tap((result) => {
      localStorage.setItem('token', result.user.token)
    })
  ))

  // @Effect({ dispatch: false })
  // LoginSuccess: Observable<any> = this.action$.pipe(
  //   ofType(AuthActionTypes.LOGIN_SUCCESS),
  //   tap((user) => {
  //     localStorage.setItem('token', user.payload.token)
  //   })
  // )

  // @Effect({ dispatch: false })
  // LoginFailed: Observable<any> = this.action$.pipe(
  //   ofType(AuthActionTypes.LOGIN_FAILED)
  // )

  // @Effect()
  // Signup: Observable<any> = this.action$.pipe(
  //   ofType(AuthActionTypes.SIGNUP),
  //   map((action: Signup) => action.payload),
  //   switchMap( payload => {
  //     return this.authService.signUp(payload.email, payload.password).pipe(
  //       map((user) => {
  //         return new SignupSuccess({token: user.token, email: payload.email})
  //       }),
  //       catchError((error) => {
  //         return of(new SignupFailed({ error: error }))
  //       })
  //     )
  //   })
  // )

  // @Effect({ dispatch: false})
  // SignupSuccess: Observable<any> = this.action$.pipe(
  //   ofType(AuthActionTypes.SIGNUP_SUCCESS),
  //   tap((user) => {
  //     localStorage.setItem('token', user.payload.token)
  //   })
  // )

  // @Effect({ dispatch: false })
  // SignupFailed: Observable<any> = this.action$.pipe(
  //   ofType(AuthActionTypes.SIGNUP_FAILED)
  // )

  // @Effect({ dispatch: false })
  // public Logout: Observable<any> = this.action$.pipe(
  //   ofType(AuthActionTypes.LOGOUT),
  //   tap((user) => {
  //     localStorage.removeItem('token')
  //   })
  // )

  // @Effect({ dispatch: false })
  // GetStatus: Observable<any> = this.action$.pipe(
  //   ofType(AuthActionTypes.GET_STATUS),
  //   switchMap(payload => {
  //     return this.authService.
  //   })
  // )


}
