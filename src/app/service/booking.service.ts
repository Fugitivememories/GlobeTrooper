import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Booking } from '../models/Booking';

@Injectable({
    providedIn: 'root'
  })
  export class BookingService {

    constructor(private http: HttpClient) {}

    book(data:any):Observable<Booking>{
        return <Observable<Booking>>this.http.post<Booking>(environment.book,data);
    }
  
  }