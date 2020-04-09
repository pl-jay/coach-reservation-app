import { Component, OnInit } from '@angular/core';
import { AuthenticatioinService } from 'src/app/_services/authenticatioin.service';
import { Observable, Observer } from 'rxjs';
import { AuthService } from 'src/app/_helpers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  greeting: Promise<string>|null = null;
  arrived: boolean = false;

  usersRole$: Observable<string>

  private resolve: Function|null = null;

  constructor(private login: AuthenticatioinService, private _authService: AuthService) { this.reset(); }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.usersRole$ = this._authService.loggedUsersRole
    console.log(this.usersRole$)
  }

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 5000);
  });


  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }

  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve !('hi there!');
      this.arrived = true;
    }
  }

  butn() {
    this.login.getToken().subscribe((res) => {
      console.log(res)
    })
  }
}
