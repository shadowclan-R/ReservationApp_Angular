import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteFacilityDialogComponent } from './add-edit-delete-facility-dialog.component';

describe('AddEditDeleteFacilityDialogComponent', () => {
  let component: AddEditDeleteFacilityDialogComponent;
  let fixture: ComponentFixture<AddEditDeleteFacilityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeleteFacilityDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDeleteFacilityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
