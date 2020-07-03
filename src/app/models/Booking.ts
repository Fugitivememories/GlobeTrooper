import { Destination } from './Destination';
import { Users } from './User';

export class Booking{
    bookingId:number;
    checkIn:Date;
    checkOut:Date;
    noOfPeople:number;
    totalCost:number;
    timeOfBooking:Date;
    destination:Destination;
    user:Users
}