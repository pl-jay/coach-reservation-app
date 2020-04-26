import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AppState, selectAuthState } from 'src/app/store/auth-store/auth.states';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models/user';
import { LOGIN } from 'src/app/store/auth-store/actions/auth.actions';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User()
  errorMessage: string | null;
  getState: Observable<any>;

  constructor(private store: Store<AppState>,private _snackBar: MatSnackBar,private auth: AuthService) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSubmit(): void {
    const payload = {
      username: this.user.email,
      password: this.user.password
    }
    this.store.dispatch(LOGIN(payload));
    this.openSnackBar('Success','Ok')
  }



}
