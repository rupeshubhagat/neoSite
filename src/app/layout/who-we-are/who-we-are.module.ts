import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoWeAreRoutingModule } from './who-we-are-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [OverviewComponent, BannerComponent],
  imports: [
    CommonModule,
    WhoWeAreRoutingModule
  ]
})
export class WhoWeAreModule { }
