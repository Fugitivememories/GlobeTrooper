import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Users } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {

  }
  register(data: any): Observable<Users> {
    return <Observable<Users>>this.http.post<Users>(environment.registerUser, data);
      
  }
}