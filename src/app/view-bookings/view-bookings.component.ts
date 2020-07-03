import { Component, OnInit } from '@angular/core';
import { ViewBookingService } from '../service/viewBooking.service';
import { AuthService } from '../core/auth.service';
import { Users } from '../models/User';
import { Booking } from '../models/Booking';
import { Router } from '@angular/router';
import { CancelBookingService } from '../service/cancelBooking.service';
import { MessageService } from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {
  user:Users=new Users();
  bookingsList: Array<Booking>= [];
  selectedBooking:Booking=new Booking();
  errorMessage:string;
  successMessage:string='';
  display: boolean = false;
  bId: number;

  constructor(private router: Router,private messageService:MessageService, private viewService: ViewBookingService,private auth:AuthService,private cancelService:CancelBookingService) { }

  ngOnInit() {
    this.auth.sessionUser.subscribe(
      data=>{this.user=data;}
    );
    if(this.user.userId!=null){
      this.viewBookings();
    } 
    else{
      this.router.navigate(['/','/home']);
    }  

  }

  viewBookings(){
    this.viewService.viewBookings(this.user).subscribe(
      (response)=>{
        this.bookingsList=response;
      },
      (error)=>{this.errorMessage=error.error.message;}
    )
  }

  selectBooking(booking:Booking){
    this.selectedBooking=booking;
  }
  
  cancelBooking(booking:Booking){
    this.cancelService.cancelBooking(booking).subscribe(
      (response)=>{
        
        this.bookingsList.splice(this.bookingsList.indexOf(this.selectedBooking),1);
        this.successMessage= "Your booking with Booking Id: " + response.bookingId+ " has been cancelled. Your refund amount of $"+ response.totalCost+ " will be refunded to your account soon!!";
        this.messageService.add({severity:'success', summary: this.successMessage, detail:''});

      },
      (error)=>{this.errorMessage=error.error.message}
    );
  
}
}
