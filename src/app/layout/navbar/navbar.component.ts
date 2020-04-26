import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/auth-store/auth.states';
import { LOGOUT } from 'src/app/store/auth-store/actions/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>
  loading: boolean = true;

  constructor(private _authService: AuthService, public _store: Store<AppState>) { }

  ngOnInit() {
    this.isLoggedIn$ = this._authService.isLoggedIn
  }

  logout() {
    this._store.dispatch(LOGOUT())
  }

}
