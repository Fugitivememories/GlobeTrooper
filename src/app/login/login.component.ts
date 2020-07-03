import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { LoginService } from '../service/login.service';
import { Users } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerPage:Boolean = false;
  loginForm:FormGroup;
  errorMessage : string;
  user:Users=new Users();
  constructor(private fb: FormBuilder, private router: Router,private auth:AuthService,private loginservice:LoginService) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      contactNumber: ['', [ Validators.required,Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required,Validators.minLength(7),Validators.maxLength(20)]]
      })
  }
  login() {
    this.loginservice.login(this.loginForm.value).subscribe(
      (response) => {
          this.errorMessage = null;
          this.user = response;
          this.auth.nextUser(this.user);
          this.router.navigate(['/home'])

      },
      (errorResponse) => {
        //error message if invalid contact number or password
          this.errorMessage = errorResponse.error.message;
          sessionStorage.clear();
      }
    );
}
  getRegisterPage(){
    this.registerPage=true;
    //open register page if the user is not registered already
    this.router.navigate(['/', 'register']);
  }

}
