import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { Users } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:Users=new Users();
  registerForm:FormGroup;
  errorMessage : string;
  successMessage : string;

  constructor(private fb:FormBuilder,private router: Router,private service :RegisterService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      userName:['',[Validators.required,Validators.pattern('^([A-Za-z]+)( [A-Za-z])*$')]],
      emailId:['',[Validators.required,Validators.pattern('^[A-Za-z0-9]{1,}@[A-Za-z0-9]{1,}[.](com)$')]],
      contactNumber: ['', [ Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      password: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$%^&*-]).{7,20}$')]]
      })


  }

  register(){
    this.service.register(this.registerForm.value).subscribe(
      response=>{
        this.user=response;
        this.successMessage="Congrats "+this.user.userName
        +"! Your registration with Wanderlust is successful. Please login to utilise most of our functionalities.";
        
      },
      error=>{this.errorMessage=error.error.message;}
    );

  }

}
