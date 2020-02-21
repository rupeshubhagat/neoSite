import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndustriesComponent } from './industries/industries.component';
import { WeWorkComponent } from './we-work/we-work.component';


const routes: Routes = [
  {
    path:'industries',
    component: IndustriesComponent
  },
  {
    path:'we-work',
    component: WeWorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeWorkWithRoutingModule { }
