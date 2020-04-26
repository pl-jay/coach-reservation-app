import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _authService: AuthService, private _router: Router){}

  /**
   * app component is root component
   * whenever it loads first it get the latest emitted authenticationState value by invoking this._authService.checkToken()
   * then subscribe to authenticationState and get authenticationState value based on value,
   * it redirects the route to main nad login
   */
  ngOnInit(): void {
    this._authService.checkToken()

    this._authService.authenticationState.subscribe(state => {
      if (state) {
        this._router.navigate(['/home']);
      }
    });
  }
  title = 'coach-reservation-app';
}
