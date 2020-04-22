import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Roles: any = [{id: 0, value: 'Passenger'}, {id: 1, value:'Conductor'}];


  constructor(private store: Store<{ count: number }>) {

    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  increment() {
    console.log('a')

  }

  decrement() {

  }

  reset() {

  }
}
