import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatioinService {

  constructor(private _http: HttpClient) { }

  getToken() {
    
    let usr = {username:'krish',password:'kpass',grant_type:'password'}
    let user = new FormData()
    user.append('data',JSON.stringify(usr))
    return this._http.post('localhost:9191/oauth/token', user)
  }
}
