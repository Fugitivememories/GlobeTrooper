import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/components/common/messageservice';
import { SearchContinentComponent } from '../search-continent/search-continent.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  homePage=false;
  packagePage=false;
  successMessage:string = null;
  email:string;
  searchComponent:SearchContinentComponent;
  constructor(private router: Router,private messageService:MessageService) {
   }
  

  showInfo() {
    console.log(this.email)
    this.successMessage = "Thank you for subscribing. Updates will be sent to "+this.email;
    this.messageService.add({severity:'success', summary: this.successMessage, detail:''});
  }
  searchByContinent(continent:String){
    //this.searchComponent.searchByContinent(continent);
    this.router.navigate(['/search-continent',continent]);
  }


}
