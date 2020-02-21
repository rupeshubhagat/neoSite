import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeWorkWithRoutingModule } from './we-work-with-routing.module';
import { IndustriesComponent } from './industries/industries.component';
import { IndexModule } from '../index/index.module';
import { TechnologyModule } from '../technology/technology.module';
import { WhatWeDoModule } from '../what-we-do/what-we-do.module';
import { WhoWeAreModule } from '../who-we-are/who-we-are.module';
import { WeWorkComponent } from './we-work/we-work.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';


@NgModule({
  declarations: [IndustriesComponent, WeWorkComponent],
  imports: [
    CommonModule,
    IndexModule,
    TechnologyModule,
    WhatWeDoModule,
    WhoWeAreModule,
    WeWorkWithRoutingModule,
    AngularFullpageModule
  ],
  exports: [IndustriesComponent,WeWorkComponent]
})
export class WeWorkWithModule { }
