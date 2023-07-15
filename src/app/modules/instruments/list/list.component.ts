import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Instrument, instruments } from '../models/instruments';
import { InstrumentsService } from '../services/instruments.service';

@Component({
  selector: 'app-list table-expandable-rows-example',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  
})
export class ListComponent {

  public instrumentList : Instrument[] = [];
  
  constructor(private service : InstrumentsService){}

  ngOnInit(): void{
    this.ShowInstrumentList();
  }
  columnsToDisplay = ['id', 'name', 'facilityId'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  public expandedElement: Instrument | null | undefined;

  ShowInstrumentList(){
    this.service.getInstrumentList().subscribe(list => {
     this.instrumentList= list;});
  }
}
