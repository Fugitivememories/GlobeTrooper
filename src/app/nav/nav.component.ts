import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Users} from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userName: string;
  loggedIn: Boolean = false;
  user:Users=new Users();
  constructor(private router: Router,public auth: AuthService) { }

  ngOnInit() {
    this.auth.sessionUser.subscribe(data => {
    this.userName = data.userName; 
    if (this.userName != null) {
      this.loggedIn = true;
    }
    });

  }
  logout(){
    this.user.userId=null;
    this.user.userName=null;
    this.user.emailId=null;
    this.user.contactNumber=null;
    this.user.password=null;
    this.user.message=null;
    this.loggedIn=false;
    this.auth.nextUser(this.user);
    sessionStorage.clear();
    this.router.navigate(['/home']);

  }
}
