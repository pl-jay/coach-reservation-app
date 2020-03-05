import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  authenticationState = new BehaviorSubject(false);

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

  get isLoggedIn() {
    return this.authenticationState.asObservable();
  }

  loginMethod(value) {
    const user = {
      username: value.username,
      password: value.password
    }

    this.http.post(URL + 'login', user).subscribe((data) => {
      if (data[`success`] === 1) {
        localStorage.setItem('token', data[`access_token`]);
        localStorage.setItem('user_id', data[`user_id`]);
        this.authenticationState.next(true);
        this.openSnackBar('Login Success !');
      } else {
        this.authenticationState.next(false);
        this.openSnackBar(data[`message`] + '!');
      }
    });
    this.checkToken();

  }

  registerMethod(value) {
    const newUser = {
    username: value.username,
    password: value.password,
    email: value.email,
    user_role: 'owner'
    };

    this.http.post(URL + 'registration', newUser).subscribe((data) =>{
      if (data[`success`] === 1) {
        this.openSnackBar('Registration Success !');
      } else {
        this.openSnackBar('Something Went Wrong !');
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
