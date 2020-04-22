import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../shared/models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'localhost:9191/oauth/token';
  // 'http://localhost:9090/user-service/users';

  /**
   *
   */
  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(username: string, password: string): Observable<any> {
    return this.http.post<User>('http://localhost:9191/oauth/token', {username, password});
  }

  signUp(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/register`, {username, password});
  }


  getStatus(): Observable<User> {
    const url = `${this.BASE_URL}/status`;
    return this.http.get<User>(url);
  }

  // public authenticationState = new BehaviorSubject<boolean>(false)

  // public userRole = new BehaviorSubject<string>('')

  // public currentUserToken = new BehaviorSubject<any>('')

  // constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  //   console.log(this.authenticationState.getValue)
  //   this.currentUserToken = new BehaviorSubject<any>(localStorage.getItem('token'))

  // }

  // openSnackBar(message: string) {
  //   this.snackBar.open(message, 'Close', {
  //     duration: 2000,
  //   });
  // }

  // get isLoggedIn() {
  //   return this.authenticationState.asObservable()
  // }

  // get loggedUsersRole() {
  //   return this.userRole.asObservable()
  // }

  // get userToken() {
  //   return this.currentUserToken.value
  // }

  // loginMethod(value) {
  //   const user = {
  //     username: value.username,
  //     password: value.password
  //   }

  //   this.http.post(URL + 'login', user).subscribe((data) => {
  //     if (data[`success`] === 1) {

  //       localStorage.setItem('token', data[`access_token`])
  //       localStorage.setItem('user_id', data[`user_id`])

  //       this.authenticationState.next(true)

  //       this.currentUserToken.next(data[`access_token`])

  //       this.openSnackBar('Login Success !')

  //     } else {
  //       this.authenticationState.next(false)
  //       this.openSnackBar(data[`message`] + '!')
  //     }
  //   });
  //   this.checkToken();
  //   this.checkUserRole()

  // }

  // registerMethod(value) {
  //   const newUser = {
  //   username: value.username,
  //   password: value.password,
  //   email: value.email,
  //   user_role: 'owner'
  //   };

  //   this.http.post(URL + 'registration', newUser).subscribe((data) =>{
  //     if (data[`success`] === 1) {
  //       this.openSnackBar('Registration Success !');
  //     } else {
  //       this.openSnackBar('Something Went Wrong !');
  //     }
  //   });
  //   this.checkToken();
  // }

  // logoutMethod() {
  //   localStorage.clear();
  //   this.checkToken();
  // }

  // checkToken() {
  //   if (localStorage.getItem('token') != null) {
  //     this.authenticationState.next(true);
  //   } else {
  //     this.authenticationState.next(false);
  //   }
  // }

  // checkUserRole() {
  //   const role = parseInt(localStorage.getItem('user_role'))
  //   if (role == 1) {
  //     this.userRole.next('passenger')
  //   } else if( role == 2 ){
  //     this.userRole.next("coach")
  //   }
  // }

}
