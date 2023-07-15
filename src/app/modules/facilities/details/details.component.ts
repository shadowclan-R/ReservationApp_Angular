import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstrumentsService } from '../../instruments/services/instruments.service';
import { Facility } from '../models/facilities';
import { FacilitiesService } from '../services/facilities.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  currentId: number = 0;
  facilityList: Facility[] =[];
  facility: Facility = {} as Facility;

  constructor(private route: ActivatedRoute, private facilityService : FacilitiesService) {
    this.currentId = this.route.snapshot.params['facilityId'];

    //this.facility = facilities.filter(f => f.id == this.currentId)[0];
    this.facilityService.getFacilityList().subscribe((list) => {
      this.facilityList = list;
    
    
    this.facility = this.facilityList.filter(f => f.id == this.currentId)[0];
  });
      
  }

  ngOnInit(): void {
    // const mapper = this.route.snapshot.paramMap;
    // this.currentId = Number(mapper.get("id"));
    // this.currentId = this.route.snapshot.params['facilityId'];
    // this.facilities = facilities.filter(f => f.id == this.currentId)[0];
  }
  
}
