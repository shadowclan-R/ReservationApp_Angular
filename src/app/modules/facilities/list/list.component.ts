import { Component, OnInit } from '@angular/core';
import { Facility } from '../models/facilities';
import { Instrument } from '../../instruments/models/instruments';
import { FacilitiesService } from '../services/facilities.service';
import { InstrumentsService } from '../../instruments/services/instruments.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditDeleteFacilityDialogComponent } from '../add-edit-delete-facility-dialog/add-edit-delete-facility-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-facilities-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [FacilitiesService]
})
export class ListComponent implements OnInit {

  facilityList: Facility[] = [];
  instrumentList: Instrument[] = [];
  
  pickedFacility : Facility = {} as any ;
  pickedFacilityName: string = "";
  selectedFacilities : Facility[] = [];
  selectedFacility : Facility = {} as Facility;

  

  constructor(private facilityService:FacilitiesService, 
    private instrumentService: InstrumentsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    ){}

  ngOnInit(): void {
    this.showFacilities();
  }


  showFacilities() {
    this.facilityService.getFacilityList().subscribe((list) => {
      this.facilityList = list;


      this.instrumentService.getInstrumentList().subscribe((list) => {
        this.instrumentList = list;

        for (let i = 0; i < this.facilityList.length; i++) {
          this.facilityList[i].instrumentList = this.instrumentList.filter(
            (s: { facilityId: number }) => s.facilityId === this.facilityList[i].id
          );
        }
      });  
    });

  }

  addFacilityDialog(){
    this.dialog.open(AddEditDeleteFacilityDialogComponent, {width: '50%'}).afterClosed().subscribe(_ =>{
      this.showFacilities();
    });
  }
  editFacilityDialog(item: Facility) {
    this.dialog.open(AddEditDeleteFacilityDialogComponent, { data: item, width: '50%' }).afterClosed().subscribe(_ => {
      this.showFacilities();
    });
  }

  deleteFacility(id : number){
    if(id == -1)
    {
      this.facilityList.pop();
    }
    this.facilityService.deleteFacility(id).subscribe(_ => {
      this.snackBar.open('Facility Deleted', undefined, { duration: 3000, horizontalPosition: 'end' });
      this.showFacilities();
    });
  }

  pickFacility(facility : Facility){
      this.facilityService.getFacilityById(facility.id).subscribe(item=>{
        this.pickedFacilityName = item.name;
    });  
  }

  addToSelected(facility : Facility){
    this.selectedFacilities.push(facility);
  }
  Selected(facility : Facility){
    this.selectedFacility = facility;
  }

  addDummyFacility(){
    this.facilityList.push({id:-1,name:"Some dummy facility", description: "Any description..", instrumentList: []});
  }

  addFacility(facility : Facility){
    this.facilityService.create(facility);
  }

  

}
