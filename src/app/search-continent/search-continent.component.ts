import { Component, OnInit} from '@angular/core';
import { SearchContinentService } from '../service/searchContinent.service';
import { Destination } from '../models/Destination';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { Users } from '../models/User';
@Component({
  selector: 'app-search-continent',
  templateUrl: './search-continent.component.html',
  styleUrls: ['./search-continent.component.css']
})
export class SearchContinentComponent implements OnInit {
  maxPrice:Number=3000;
  minDays:Number=1;
  listOfPackages:Array<Destination>=null;
  packageInclusion:Array<String>=[];
  tourHighlights:Array<String>=[];
  errorMessage :String=null;
  user:Users=new Users();
  login:Boolean;
  destinationSelected:Destination;
  constructor(private router: Router,private service:SearchContinentService,private ar:ActivatedRoute,private auth:AuthService) { }

  ngOnInit() {
     this.ar.params.subscribe(lcl=>
      {this.service.searchByContinent(lcl['continent']).subscribe(
      (response) => {
        this.listOfPackages = response;
      },
      (error) => { this.errorMessage = error.error.message }
    )});
  }
  showDetails(destination:Destination){
    this.destinationSelected=destination;
    this.tourHighlights=this.destinationSelected.details.highlights.split(",");
    this.packageInclusion=this.destinationSelected.details.packageInclusion.split(",");
  }
}
