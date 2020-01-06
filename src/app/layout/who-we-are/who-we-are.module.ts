import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoWeAreRoutingModule } from './who-we-are-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { BannerComponent } from './banner/banner.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { IndustryserveComponent } from './industryserve/industryserve.component';
import { MoreaboutneosoftComponent } from './moreaboutneosoft/moreaboutneosoft.component';
import { IndexModule } from '../index/index.module';
import { CompetenciesServicesComponent } from './competencies-services/competencies-services.component';
import { MobileAppDevelopmentComponent } from './mobile-app-development/mobile-app-development.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { CloudComputingComponent } from './cloud-computing/cloud-computing.component';
import { AiandmlComponent } from './aiandml/aiandml.component';
import { AnalyticsBigdataComponent } from './analytics-bigdata/analytics-bigdata.component';
import { InternetOfThingsComponent } from './internet-of-things/internet-of-things.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { DevOpsComponent } from './dev-ops/dev-ops.component';
import { QaTestingComponent } from './qa-testing/qa-testing.component';
import { SapComponent } from './sap/sap.component';
import { UxUiComponent } from './ux-ui/ux-ui.component';
import { SoftwareConsultingComponent } from './software-consulting/software-consulting.component';
import { InternetMarketingComponent } from './internet-marketing/internet-marketing.component';


@NgModule({
  declarations: [OverviewComponent, BannerComponent, CompetenciesComponent, IndustryserveComponent, MoreaboutneosoftComponent, CompetenciesServicesComponent, MobileAppDevelopmentComponent, WebDevelopmentComponent, CloudComputingComponent, AiandmlComponent, AnalyticsBigdataComponent, InternetOfThingsComponent, BlockchainComponent, DevOpsComponent, QaTestingComponent, SapComponent, UxUiComponent, SoftwareConsultingComponent, InternetMarketingComponent],
  imports: [
    CommonModule,
    IndexModule,
    WhoWeAreRoutingModule
  ],
  exports: [OverviewComponent, BannerComponent, CompetenciesComponent,IndustryserveComponent,MoreaboutneosoftComponent,CompetenciesServicesComponent,MobileAppDevelopmentComponent,WebDevelopmentComponent,CloudComputingComponent, AiandmlComponent,AnalyticsBigdataComponent, InternetOfThingsComponent,BlockchainComponent, DevOpsComponent,QaTestingComponent,SapComponent, UxUiComponent, SoftwareConsultingComponent, InternetMarketingComponent]
})
export class WhoWeAreModule { }
