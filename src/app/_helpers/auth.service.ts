import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authenticationState = new BehaviorSubject(false)
  
  public userRole: BehaviorSubject<string>

  public currentUserToken: BehaviorSubject<any>
  
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { 
    //this.currentUserToken = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('token')))
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

  get isLoggedIn() {
    return this.authenticationState.asObservable()
  }

  get loggedUsersRole() {
    return this.userRole.asObservable()
  }

  get userToken() {
    return this.currentUserToken.value
  }

  loginMethod(value) {
    const user = {
      username: value.username,
      password: value.password
    }

    this.http.post(URL + 'login', user).subscribe((data) => {
      if (data[`success`] === 1) {
      
        localStorage.setItem('token', data[`access_token`])
        localStorage.setItem('user_id', data[`user_id`])
      
        this.authenticationState.next(true)
      
        this.currentUserToken.next(data[`access_token`])

        this.openSnackBar('Login Success !')
      
      } else {
        this.authenticationState.next(false)
        this.openSnackBar(data[`message`] + '!')
      }
    });
    this.checkToken();
    this.checkUserRole()

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
    if (localStorage.getItem('token') != null) {
      this.authenticationState.next(true);
    } else {
      this.authenticationState.next(false);
    }
  }

  checkUserRole() {
    const role = parseInt(localStorage.getItem('user_role'))
    if (role == 1) {
      this.userRole.next('passenger')
    } else if( role == 2 ){
      this.userRole.next("coach")
    }
  }
  
}
