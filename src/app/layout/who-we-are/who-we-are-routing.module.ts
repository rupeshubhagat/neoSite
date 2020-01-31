import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { BannerComponent } from './banner/banner.component';
import { CompetenciesComponent } from './competencies/competencies.component';
import { IndustryserveComponent } from './industryserve/industryserve.component';
import { MoreaboutneosoftComponent } from './moreaboutneosoft/moreaboutneosoft.component';
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
import { DemoOwlComponent } from './demo-owl/demo-owl.component';
import { EndToEndProEnggComponent } from './end-to-end-pro-engg/end-to-end-pro-engg.component';
import { ClienteleListComponent } from './clientele-list/clientele-list.component';
import { CertificationComponent } from './certification/certification.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { PartnersComponent } from './partners/partners.component';
import { CorporateFactComponent } from './corporate-fact/corporate-fact.component';
import { GlobalPresenceComponent } from './global-presence/global-presence.component';
import { OurCsrInitiativesComponent } from './our-csr-initiatives/our-csr-initiatives.component';
import { OurVisionMissionComponent } from './our-vision-mission/our-vision-mission.component';
import { OurCultureComponent } from './our-culture/our-culture.component';
import { OurDnaComponent } from './our-dna/our-dna.component';
import { DevelopmentModelComponent } from './development-model/development-model.component';


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
  },
  {
    path: 'webdevelopment',
    component: WebDevelopmentComponent
  },
  {
    path: 'cloudcomputing',
    component: CloudComputingComponent
  },
  {
    path: 'aiandml',
    component: AiandmlComponent
  },
  {
    path: 'analyticsbigdata',
    component: AnalyticsBigdataComponent
  },
  {
    path: 'iot',
    component: InternetOfThingsComponent
  },
  {
    path: 'blockchain',
    component: BlockchainComponent
  },
  {
    path: 'devops',
    component: DevOpsComponent
  },
  {
    path: 'qa-and-testing',
    component: QaTestingComponent
  },
  {
    path: 'sap',
    component: SapComponent
  },
  {
    path: 'ux-ui',
    component: UxUiComponent
  },
  {
    path: 'softwareconsulting',
    component: SoftwareConsultingComponent
  },
  {
    path: 'internetmarketing',
    component: InternetMarketingComponent
  },
  {
    path: 'overviewnumberset',
    component: OverviewNumbersetComponent
  },
  {
    path: 'neosoftservices',
    component: NeosoftServicesComponent
  },
  {
    path: 'enterprise-digital-transformation',
    component: EnterpriseDigitalTransformationComponent
  },
  {
    path: 'dedicated-team',
    component: DedicatedTeamComponent
  },
  {
    path: 'competencies-engagement',
    component: CompetenciesEngagementComponent
  },
  {
    path: 'team-augmentaion',
    component: TeamAugmentationComponent
  },
  {
    path: 'hire',
    component: HireComponent
  },
  {
    path: 'demo',
    component: DemoOwlComponent
  },
  {
    path: 'end-to-end-product-engineering',
    component: EndToEndProEnggComponent
  },
  {
    path: 'clientele-list',
    component: ClienteleListComponent
  },
  {
    path: 'certification',
    component: CertificationComponent
  },
  {
    path: 'infrastructure',
    component: InfrastructureComponent
  },
  {
    path: 'partners',
    component: PartnersComponent
  },
  {
    path: 'corporate-fact',
    component: CorporateFactComponent
  },
  {
    path: 'global-presence',
    component: GlobalPresenceComponent
  },
  {
    path: 'our-csr-initiatives',
    component: OurCsrInitiativesComponent
  },
  {
    path: 'our-vision-mission',
    component: OurVisionMissionComponent
  },
  {
    path: 'our-culture',
    component: OurCultureComponent
  },
  {
    path: 'our-dna',
    component: OurDnaComponent
  },
  {
    path: 'development-model',
    component: DevelopmentModelComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhoWeAreRoutingModule { }
  