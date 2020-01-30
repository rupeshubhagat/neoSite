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
import { OverviewNumbersetComponent } from './overview-numberset/overview-numberset.component';
import { NeosoftServicesComponent } from './neosoft-services/neosoft-services.component';
import { EnterpriseDigitalTransformationComponent } from './enterprise-digital-transformation/enterprise-digital-transformation.component';
import { DedicatedTeamComponent } from './dedicated-team/dedicated-team.component';
import { CompetenciesEngagementComponent } from './competencies-engagement/competencies-engagement.component';
import { TeamAugmentationComponent } from './team-augmentation/team-augmentation.component';
import { HireComponent } from './hire/hire.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DemoOwlComponent } from './demo-owl/demo-owl.component';
import { EndToEndProEnggComponent } from './end-to-end-pro-engg/end-to-end-pro-engg.component';
import { ClienteleListComponent } from './clientele-list/clientele-list.component';
import { CertificationComponent } from './certification/certification.component';
import { PartnersComponent } from './partners/partners.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { CorporateFactComponent } from './corporate-fact/corporate-fact.component';
import { GlobalPresenceComponent } from './global-presence/global-presence.component';
import { OurCsrInitiativesComponent } from './our-csr-initiatives/our-csr-initiatives.component';
import { OurVisionMissionComponent } from './our-vision-mission/our-vision-mission.component';
import { OurCultureComponent } from './our-culture/our-culture.component';
import { OurDnaComponent } from './our-dna/our-dna.component';


@NgModule({
  declarations: [OverviewComponent, BannerComponent, CompetenciesComponent, IndustryserveComponent, MoreaboutneosoftComponent, CompetenciesServicesComponent, MobileAppDevelopmentComponent, WebDevelopmentComponent, CloudComputingComponent, AiandmlComponent, AnalyticsBigdataComponent, InternetOfThingsComponent, BlockchainComponent, DevOpsComponent, QaTestingComponent, SapComponent, UxUiComponent, SoftwareConsultingComponent, InternetMarketingComponent, OverviewNumbersetComponent, NeosoftServicesComponent, EnterpriseDigitalTransformationComponent, DedicatedTeamComponent, CompetenciesEngagementComponent, TeamAugmentationComponent, HireComponent, DemoOwlComponent, EndToEndProEnggComponent, ClienteleListComponent, CertificationComponent, PartnersComponent, InfrastructureComponent, CorporateFactComponent, GlobalPresenceComponent, OurCsrInitiativesComponent, OurVisionMissionComponent, OurCultureComponent, OurDnaComponent],
  imports: [
    CommonModule,
    IndexModule,
    CarouselModule,
    WhoWeAreRoutingModule
  ],
  exports: [OverviewComponent, BannerComponent, CompetenciesComponent,IndustryserveComponent,MoreaboutneosoftComponent,CompetenciesServicesComponent,MobileAppDevelopmentComponent,WebDevelopmentComponent,CloudComputingComponent, AiandmlComponent,AnalyticsBigdataComponent, InternetOfThingsComponent,BlockchainComponent, DevOpsComponent,QaTestingComponent,SapComponent, UxUiComponent, SoftwareConsultingComponent, InternetMarketingComponent,OverviewNumbersetComponent,NeosoftServicesComponent,EnterpriseDigitalTransformationComponent,DedicatedTeamComponent,CompetenciesEngagementComponent,TeamAugmentationComponent,HireComponent,DemoOwlComponent,EndToEndProEnggComponent,ClienteleListComponent,CertificationComponent, PartnersComponent, InfrastructureComponent,CorporateFactComponent,GlobalPresenceComponent,OurCsrInitiativesComponent,OurVisionMissionComponent,OurCultureComponent, OurDnaComponent],
})
export class WhoWeAreModule { }
