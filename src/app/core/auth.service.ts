import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {  Users } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  sessionUser: BehaviorSubject<Users> = new BehaviorSubject<Users>(new Users());
  user: Users;
  constructor(private http: HttpClient) {
    this.loadSessionUser();
  }


  loadSessionUser() {
        this.user = new Users();
        this.user.userName = "";       
      }
    nextUser(data:Users){
        this.user = data;
        this.sessionUser.next(this.user);
    }
}
