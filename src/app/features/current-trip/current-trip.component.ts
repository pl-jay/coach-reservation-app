import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-trip',
  templateUrl: './current-trip.component.html',
  styleUrls: ['./current-trip.component.css']
})
export class CurrentTripComponent implements OnInit {

  from = "Kandy"
  to = "Galle"
  date = "Jun 15, 2015, 9:03:01 AM"
  coachName = " LP Tours "
  seatNumber  = 34


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('a')
  }

}
