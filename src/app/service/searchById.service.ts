import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Destination } from '../models/Destination';


@Injectable({
  providedIn: 'root'
})
export class SearchByIdService{
    constructor(private http: HttpClient) {

    }
    searchById(data: String): Observable<Destination> {
    return <Observable<Destination>>this.http.post<Destination>(environment.destinationById, data);
          
      }
}