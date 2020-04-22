import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AuthenticatioinService } from 'src/app/core/auth/authenticatioin.service';
import { AuthService } from 'src/app/core/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AppState, selectAuthState } from 'src/app/store/auth-store/auth.states';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models/user';
import { LOGIN } from 'src/app/store/auth-store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User()
  errorMessage: string | null;
  getState: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  onSubmit(): void {
    const payload = {
      username: this.user.email,
      password: this.user.password
    }
    this.store.dispatch(LOGIN(payload))
  }



  // greeting: Promise<string>|null = null;
  // arrived: boolean = false;

  // usersRole$: Observable<string>

  // private resolve: Function|null = null;

  // constructor(private login: AuthenticatioinService, private _authService: AuthService) {  }

  // login_form = new FormGroup({
  //   user_name: new FormControl(''),
  //   password: new FormControl('')
  // });

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.usersRole$ = this._authService.loggedUsersRole
  //   console.log(this.usersRole$)
  // }

  // /**
  //  * Testing
  //  * Functions
  //  */
  // time = new Observable<string>((observer: Observer<string>) => {
  //   setInterval(() => observer.next(new Date().toString()), 5000);
  // });


  // reset() {
  //   this.arrived = false;
  //   this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  // }

  // clicked() {
  //   if (this.arrived) {
  //     this.reset();
  //   } else {
  //     this.resolve !('hi there!');
  //     this.arrived = true;
  //   }
  // }

  // butn() {
  //   this.login.getToken().subscribe((res) => {
  //     console.log(res)
  //   })
  // }

  // /**
  //  * Functional
  //  * Functions
  //  */
  // onSubmit() {
  //   console.log(this.login_form.value)
  // }
}
