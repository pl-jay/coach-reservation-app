import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.API

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getAvailableSeats(u_id) {
    this.http.get(BASE_URL +'/utilities/utilitySeats/'+u_id)
  }

  setReservation(utility_id,seat_no,date,user_id) {
    const reservation = {
      user:user_id,
      date: date,
      seatNo: seat_no,
      utility_id: utility_id
    }
    this.http.post(BASE_URL + '/reservationController/reserve', reservation)
  }
}
