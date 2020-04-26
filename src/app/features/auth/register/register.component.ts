import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { SIGNUP } from 'src/app/store/auth-store/actions/auth.actions';
import { AuthService } from 'src/app/core/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('')
  })

  Roles: any = [{id: 0, value: 'Passenger'}, {id: 1, value:'Conductor'}];
  constructor(private store: Store<{ count: number}>,private _snackBar: MatSnackBar,private _authService: AuthService) {
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }
  onSubmit(){
    this._authService.registerMethod(this.registerForm.value)
  }
}
