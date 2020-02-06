import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HireATeamComponent } from './hire-a-team/hire-a-team.component';


const routes: Routes = [
  {
    path:"hire-a-team",
    component:HireATeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatWeDoRoutingModule { }
