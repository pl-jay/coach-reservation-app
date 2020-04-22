import { createAction, props } from '@ngrx/store'
import { User } from 'src/app/shared/models/user'

export const LOGIN = createAction('[Auth] Login', props<{ username: string, password: string }>())
export const LOGIN_SUCCESS = createAction('[Auth] LoginSuccess', props<{ user: User }>())
export const LOGIN_FAILED = createAction('[Auth] LoginFailed', props<{ error: string }>())
export const SIGNUP = createAction('[Auth] Signup', props<{ user: User }>())
export const SIGNUP_SUCCESS = createAction('[Auth] SignupSuccess', props<{ user: User }>())
export const SIGNUP_FAILED = createAction('[Auth] SignupFailed', props<{ error: string }>())
export const LOGOUT = createAction('[Auth] Logout')
export const GET_STATUS = createAction('[Auth] GetStatus')

