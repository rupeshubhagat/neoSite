import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatWeDoRoutingModule } from './what-we-do-routing.module';
import { HireATeamComponent } from './hire-a-team/hire-a-team.component';
import { IndexModule } from '../index/index.module';
import { TechnologyModule } from '../technology/technology.module';
import { WhoWeAreModule } from '../who-we-are/who-we-are.module';


@NgModule({
  declarations: [HireATeamComponent],
  imports: [
    CommonModule,
    IndexModule,
    WhoWeAreModule,
    TechnologyModule,
    WhatWeDoRoutingModule
  ],
  exports:[HireATeamComponent]
})
export class WhatWeDoModule { }
