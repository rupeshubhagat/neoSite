import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { BannerComponent } from './banner/banner.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { IndustryserveComponent } from './industryserve/industryserve.component';
import { MoreaboutneosoftComponent } from './moreaboutneosoft/moreaboutneosoft.component';
import { CompetenciesServicesComponent } from './competencies-services/competencies-services.component';
import { MobileAppDevelopmentComponent } from './mobile-app-development/mobile-app-development.component';


const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'banner',
    component: BannerComponent
  },
  {
    path: 'competencies',
    component: CompetenciesComponent
  },
  {
    path: 'competenciesservices',
    component: CompetenciesServicesComponent
  },
  {
    path: 'industryserve',
    component: IndustryserveComponent
  },
  {
    path: 'moreaboutneosoft',
    component: MoreaboutneosoftComponent
  },
  {
    path: 'mobileappdevelopment',
    component: MobileAppDevelopmentComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhoWeAreRoutingModule { }
