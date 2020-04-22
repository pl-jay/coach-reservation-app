import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>
  loading: boolean = true;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    //this.isLoggedIn$ = this._authService.isLoggedIn
  }

  logout(){

  }

}
