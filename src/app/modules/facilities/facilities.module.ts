import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './facilities.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { AddEditDeleteFacilityDialogComponent } from './add-edit-delete-facility-dialog/add-edit-delete-facility-dialog.component';


@NgModule({
  declarations: [
    FacilitiesComponent,
    ListComponent,
    DetailsComponent,
    AddEditDeleteFacilityDialogComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule   
  ]
})
export class FacilitiesModule { }
