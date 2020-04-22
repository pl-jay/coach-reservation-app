import * as AuthActionTypes from '../actions/auth.actions';
import { State } from '../types/state';
import { Action, on, createReducer } from '@ngrx/store';
import { state } from '@angular/animations';

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

const loginReducer = createReducer(
  initialState,
  on(AuthActionTypes.LOGIN_SUCCESS, (state, { user }) => ({ ...state, isAuthenticated: true, user: { email: user.email, password: user.password }, errorMessage: null })),
  on(AuthActionTypes.LOGIN_FAILED, (state) => ({ ...state, errorMessage: 'Incorrect email/or password' })),
  on(AuthActionTypes.SIGNUP_SUCCESS, (state, { user }) => ({ ...state, isAuthenticated: true, user: { email: user.email, password: user.password }, errorMessage: null })),
  on(AuthActionTypes.SIGNUP_FAILED, (state) => ({ ...state, errorMessage: 'Email is already in use' })),
  on(AuthActionTypes.LOGOUT, (state) => initialState)
)


export function reducer(state: State | undefined, action: Action) {
  return loginReducer(state, action)
}
