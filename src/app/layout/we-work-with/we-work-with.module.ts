import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeWorkWithRoutingModule } from './we-work-with-routing.module';
import { IndustriesComponent } from './industries/industries.component';
import { IndexModule } from '../index/index.module';
import { TechnologyModule } from '../technology/technology.module';
import { WhatWeDoModule } from '../what-we-do/what-we-do.module';
import { WhoWeAreModule } from '../who-we-are/who-we-are.module';


@NgModule({
  declarations: [IndustriesComponent],
  imports: [
    CommonModule,
    IndexModule,
    TechnologyModule,
    WhatWeDoModule,
    WhoWeAreModule,
    WeWorkWithRoutingModule
  ],
  exports: [IndustriesComponent]
})
export class WeWorkWithModule { }
