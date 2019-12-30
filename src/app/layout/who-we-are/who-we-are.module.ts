import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoWeAreRoutingModule } from './who-we-are-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { BannerComponent } from './banner/banner.component';
import { CompetenciesComponent } from './competencies/competencies.component';


@NgModule({
  declarations: [OverviewComponent, BannerComponent, CompetenciesComponent],
  imports: [
    CommonModule,
    WhoWeAreRoutingModule
  ],
  exports: [OverviewComponent, BannerComponent, CompetenciesComponent]
})
export class WhoWeAreModule { }
