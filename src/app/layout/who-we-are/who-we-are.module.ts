import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoWeAreRoutingModule } from './who-we-are-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { BannerComponent } from './banner/banner.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { IndustryserveComponent } from './industryserve/industryserve.component';
import { MoreaboutneosoftComponent } from './moreaboutneosoft/moreaboutneosoft.component';
import { IndexModule } from '../index/index.module';


@NgModule({
  declarations: [OverviewComponent, BannerComponent, CompetenciesComponent, IndustryserveComponent, MoreaboutneosoftComponent],
  imports: [
    CommonModule,
    IndexModule,
    WhoWeAreRoutingModule
  ],
  exports: [OverviewComponent, BannerComponent, CompetenciesComponent,IndustryserveComponent,MoreaboutneosoftComponent]
})
export class WhoWeAreModule { }
