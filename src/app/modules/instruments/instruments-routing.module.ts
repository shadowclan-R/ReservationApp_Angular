import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentsComponent } from './instruments.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: InstrumentsComponent, 
    children: [
      { path: 'list', component: ListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full'} //why??
  ]}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentsRoutingModule { }
 2  