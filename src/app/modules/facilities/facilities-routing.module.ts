import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FacilitiesComponent } from './facilities.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { FacilitiesService } from './services/facilities.service';


const routes: Routes = [
{ path: '', component: FacilitiesComponent, 
  children: [
  { path: 'list', component: ListComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'details/:facilityId', component: DetailsComponent },
  { path: 'list/:id', component: FacilitiesService },
  { path: '', redirectTo: 'list', pathMatch: 'full'} //WHY??????
]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilitiesRoutingModule { }
