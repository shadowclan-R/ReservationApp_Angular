import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FacilitiesService } from '../services/facilities.service';
import { Facility } from '../models/facilities';

@Component({
  selector: 'app-add-edit-delete-facility-dialog',
  templateUrl: './add-edit-delete-facility-dialog.component.html',
  styleUrls: ['./add-edit-delete-facility-dialog.component.css']
})
export class AddEditDeleteFacilityDialogComponent {

  isNew = true;
  facilityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private facilityService: FacilitiesService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Facility,
  ) {
    this.isNew = (data?.id ?? 0) == 0;
    this.facilityForm = this.fb.group({
      id: [this.isNew ? 0 : data.id],
      name: [this.isNew ? '' : data.name, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: [this.isNew ? '' : data.description],
      instrument : [this.isNew? {} : data.instrumentList]
    });
  }
  saveFacility() {
    let form = this.facilityForm;
    if (!form.valid) {
      return;
   }
    let action = this.isNew ? this.facilityService.create(form.value as Facility) : this.facilityService.edit(form.value as Facility);

    action.subscribe(() => {
      let message = this.isNew ? 'Facility Added' : 'Facility Edited';
      this.snackBar.open(message, undefined, { duration: 3000, horizontalPosition: 'end' });
      this.dialog.closeAll();
    });
  }

  

}
