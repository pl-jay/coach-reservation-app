import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

const BASE_URL = environment.API+'/utility-service/utilities'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getRoutes() {
    return this.http.get(BASE_URL+'/utilityRoutes')
  }

  getCoachList() {
    return this.http.get(BASE_URL + '/getAllUtilities')
  }

  getSeatList(id) {
    return this.http.get(BASE_URL+'/utilitySeats/'+id)
  }
}
