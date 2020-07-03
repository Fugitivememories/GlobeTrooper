import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../service/booking.service';
import { Booking } from '../models/Booking';
import { Validate } from 'src/app/validate';
import { ActivatedRoute, Router } from '@angular/router';
import { Destination } from '../models/Destination';
import { SearchByIdService } from '../service/searchById.service';
import { Users } from '../models/User';
import { AuthService } from '../core/auth.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  endDate:Date;
  first:String;
  last:String;
  restDays:Array<String>=[];
  packageInclusion:Array<string>=[];
  isOverview: boolean = false;
  isPackageInclusion: boolean = false;
  isItinerary: boolean = false;
  symO: String = "+";
  symP: String = "+";
  symI: String = "+";

  
  destinationId: string;
  booking: Booking = null;
  bookingForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  fare: number;
  destination: Destination=null;
  user: Users = null;
  constructor(private fb: FormBuilder, private service: BookingService, private ar: ActivatedRoute, private serviceById: SearchByIdService,
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      noOfPeople: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      checkIn: ['', [Validators.required, Validate.validateDate]],
      customSwitches: ['']
    })
    this.ar.params.subscribe(param => this.destinationId = param['destinationId'])
    this.serviceById.searchById(this.destinationId).subscribe(
      (response) => {
        this.destination = response

      }
    )
    this.authService.sessionUser.subscribe(data => this.user = data)
    if (this.user.userName == null) {
      this.router.navigate(['/login'])
    }
  }

  book(){
   
    this.booking=new Booking();
    this.booking.user=this.user;
    this.booking.destination=this.destination;
    this.booking.timeOfBooking=new Date();
    this.booking.checkOut=null;
    this.booking.noOfPeople=this.bookingForm.value.noOfPeople;
    this.booking.checkIn=this.bookingForm.value.checkIn;
    if(!this.bookingForm.value.customSwitches){
      this.booking.totalCost=this.bookingForm.value.noOfPeople*this.destination.chargePerPerson;
    }
    else{this.booking.totalCost=this.bookingForm.value.noOfPeople*
      (this.destination.chargePerPerson+this.destination.flightCharge);}

    this.service.book(this.booking).subscribe((response)=>{
      this.successMessage="Booking Confirmed!!";
      this.errorMessage=null;
    },
    (error)=>{this.errorMessage=error.error.message})
    
  }
  calculateFare(book: Booking) {
    this.fare = book.noOfPeople * book.destination.chargePerPerson;
  }

  displayOverView(){
    this.symO=this.isOverview?"+":"-";
    this.isOverview=this.isOverview?false:true;
  }

  displayPackageInclusion(){
    this.symP=this.isPackageInclusion?"+":"-";
    this.isPackageInclusion=this.isPackageInclusion?false:true;
    this.packageInclusion=this.destination.details.packageInclusion.split(",");
  }

  displayItinerary(){
    this.symI=this.isItinerary?"+":"-";
    this.isItinerary=this.isItinerary?false:true;
    this.first=this.destination.details.itinerary.firstDay;
    this.restDays=this.destination.details.itinerary.restOfDays.split(",");
    this.last=this.destination.details.itinerary.lastDay;
  }
  checkOutDate(date:Date){
    this.endDate=new Date(date);
    this.endDate.setDate(this.endDate.getDate()+this.destination.noOfnights)
  }
}