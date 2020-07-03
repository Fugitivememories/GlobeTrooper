import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Users } from '../models/User';
import { Booking } from '../models/Booking';


@Injectable({
  providedIn: 'root'
})
export class ViewBookingService {

  constructor(private http: HttpClient) {

  }
  viewBookings(data: any): Observable<Array<Booking>> {
    return <Observable<Array<Booking>>>this.http.post<Array<Booking>>(environment.getBookings, data);
      
  }

  cancelBooking(data: any): Observable<Booking> {
    return <Observable<Booking>>this.http.post<Booking>(environment.cancelBooking, data);
      
  }
}