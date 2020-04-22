import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

}
