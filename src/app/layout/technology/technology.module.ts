import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologiesComponent } from './technologies/technologies.component';
import { IndexModule } from '../index/index.module';


@NgModule({
  declarations: [TechnologiesComponent],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    IndexModule
  ]
})
export class TechnologyModule { 

}
