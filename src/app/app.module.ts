import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { FootComponent } from './foot/foot.component';
import { AccordionModule } from 'primeng/accordion';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FieldsetModule } from 'primeng/fieldset';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/login.service';
import { AuthService } from './core/auth.service';
import { LoginGuard } from './service/login-guard.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { RegisterComponent } from './register/register.component';
import { ViewDestinationComponent } from './view-destination/view-destination.component';
import { BookingComponent } from './booking/booking.component';
import { SearchContinentComponent } from './search-continent/search-continent.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    FootComponent,
    RegisterComponent,
    ViewDestinationComponent,
    BookingComponent,
    SearchContinentComponent,
    ViewBookingsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    DialogModule,
    SidebarModule,
    TabViewModule,
    InputSwitchModule,
    FieldsetModule,
    ToastModule,
    ProgressSpinnerModule
  ],
  providers: [LoginService, LoginGuard, AuthService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
