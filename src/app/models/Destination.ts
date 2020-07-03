import { Details } from './Details';

export class Destination{
    destinationId:String;
    continent:String;
    destinationName:String;
    imageUrl:String;
    noOfnights:number;
    flightCharge:number;
    chargePerPerson:number;
    discount:number;
    availability:number;
    details:Details;
}