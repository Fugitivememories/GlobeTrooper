import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../service/destination.service';
import { Destination } from '../models/Destination';

@Component({
  selector: 'app-view-destination',
  templateUrl: './view-destination.component.html',
  styleUrls: ['./view-destination.component.css']
})
export class ViewDestinationComponent implements OnInit {

  errorMessage: String;
  successMessage: String;
  listOfAllPackages: Array<Destination> = [];
  packageInclusion:Array<String>=[];
  tourHighlights:Array<String>=[];
  destinationSelected:Destination=null;
  tourPace:String


  constructor(private service: DestinationService) {

  }

  ngOnInit() {
    this.service.viewAllDestinations().subscribe(
      (response) => {

        this.listOfAllPackages = response.filter((dest)=>{if(dest.discount>=5){return true;}});
      },

      (error) => { this.errorMessage = error.error.message }
    )
  }
  showDetails(destination:Destination){
    this.destinationSelected=destination;
    this.tourHighlights=this.destinationSelected.details.highlights.split(",");
    this.packageInclusion=this.destinationSelected.details.packageInclusion.split(",");
    this.tourPace=this.destinationSelected.details.pace;
  }
}
