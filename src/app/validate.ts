import { AbstractControl } from '@angular/forms';

export class Validate{
    static validateDate(date:AbstractControl):{'validateDate':true}|null{
       let checkInDate=new Date(date.value);
       let today=new Date();
       if(today>checkInDate){
           return {'validateDate':true};

       }
       return null;
    }
}