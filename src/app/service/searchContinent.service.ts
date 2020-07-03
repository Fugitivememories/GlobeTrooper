import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Destination } from '../models/Destination';


@Injectable({
  providedIn: 'root'
})
export class SearchContinentService{
    constructor(private http: HttpClient) {

    }
    searchByContinent(data: String): Observable<Array<Destination>> {
    return <Observable<Array<Destination>>>this.http.post<Array<Destination>>(environment.getDestinationById, data);
          
      }
}