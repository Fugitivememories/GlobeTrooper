import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';



import { environment } from '../../environments/environment';



import { Users } from '../models/User';
import { AuthService } from '../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }
  login(data: any): Observable<Users> {
    return <Observable<Users>>this.http.post<Users>(environment.loginUri, data);
      
  }
}
