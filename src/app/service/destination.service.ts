import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Destination } from '../models/Destination';


@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private http: HttpClient) {

  }

  viewAllDestinations():Observable<Array<Destination>>{
      return <Observable<Array<Destination>>>this.http.get<Array<Destination>>(environment.getPackages);
  }
}