import { State } from './types/state'
import { reducer } from './reducers/auth.reducers';
import { createFeatureSelector } from '@ngrx/store';


export interface AppState {
  authState: State;
}

export const reducers = {
  auth: reducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
