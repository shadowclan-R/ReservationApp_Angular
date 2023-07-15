import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentsComponent } from './instruments.component';
import { InstrumentsRoutingModule } from './instruments-routing.module';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    InstrumentsComponent,
    ListComponent,
    
  ],
  imports: [
    CommonModule,
    InstrumentsRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule
  ]
})
export class InstrumentsModule { }
