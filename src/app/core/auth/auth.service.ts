import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../shared/models/user';
import { environment } from 'src/environments/environment';
import { isNull } from 'util';
import { Router } from '@angular/router';

const REG_URL = environment.API + '/user-service/users/save'
const LOGIN_URL = 'http://localhost:9191/oauth/token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationState = new BehaviorSubject(false);
  userToken: any;
  constructor(private http: HttpClient, private route: Router,private snackBar: MatSnackBar) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

  get isLoggedIn() {
    return this.authenticationState.asObservable();
  }


  logIn(u_name: string, password: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa('mobile:pin'),
        'Content-type': 'application/x-www-form-urlencoded'
      })
    };

      const requestBody = new HttpParams()
        .append('username', u_name)
        .append('password', password)
        .append('grant_type', 'password');

    return this.http.post(LOGIN_URL, requestBody, httpOptions );
  }

  registerMethod(value) {
    const newUser = {
    name: value.username,
    password: value.password,
    email: value.email,
    role: value.role
    };

    this.http.post(REG_URL , newUser).subscribe((data) =>{
      console.log(data)

      if (data[`id`] != null) {
        this.openSnackBar('Registration Success !');
        this.route.navigate(['/auth/login'])
      }
    });
    this.checkToken();
  }

  logoutMethod() {
    localStorage.clear();
    this.checkToken();
  }

  checkToken() {
    const token = localStorage.getItem('token');
    if (token != null) {
      this.authenticationState.next(true);
      console.log(this.authenticationState.value)
    } else {
      this.authenticationState.next(false);
      console.log(this.authenticationState.value)
    }
  }

}
