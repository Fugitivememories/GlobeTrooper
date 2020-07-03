import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './service/login-guard.service';
import { RegisterComponent } from './register/register.component';
import { SearchContinentComponent } from './search-continent/search-continent.component';
import { ViewDestinationComponent } from './view-destination/view-destination.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'home/:userId',component:HomeComponent},
  { path:'view-destination',component:ViewDestinationComponent},


  //for login
  { path: 'login', component: LoginComponent },
  //for registeration
  {path:'register',component:RegisterComponent},
  {path:'search-continent/:continent',component:SearchContinentComponent},
  //for viewBooking
  {path:'view-Bookings',component:ViewBookingsComponent},

  {path:'book/:destinationId', component:BookingComponent},
  //handlers for empty path and catch all
  { path: '',component:HomeComponent },
  { path: "**",redirectTo:"",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
