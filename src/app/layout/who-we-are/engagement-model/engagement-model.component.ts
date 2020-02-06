import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engagement-model',
  templateUrl: './engagement-model.component.html',
  styleUrls: ['./engagement-model.component.scss']
})
export class EngagementModelComponent implements OnInit {

  constructor() { }

  product:any[] =[
    { 
      title:"Projects",
      isCompetencies:false,
      description:"Fixed Price, Time & Material Model",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/engagement-model/Projects.png",
      listHeadingFirst:"Fixed Price",
      listTitleFirst:"When your project specifications, scopes, deliverables and acceptance criteria are clearly defined then we can offer you a not-to-exceed fixed time & fixed price engagement model.",
      listHeadingSecond:"Time & Material Model",
      listTitleSecond:"Most suitable for projects which have dynamic business requirements & complicated business operations. Scope is likely to change during development/scope is not well defined and may evolve during development - due to which accurate cost estimation is not possible, so we suggest this model.",
    },
    {
      title:"TEAM AUGMENTATION",
      isCompetencies:false,
      description:"Resource as a Service (Offshore, Onsite & Hybrid), ODC / BOT",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/engagement-model/Team-Augmentation.png",
      listHeadingFirst:"Resource as a Service (Offshore, Onsite & Hybrid)",
      listTitleFirst:"Suitable for everyone - Small, Medium & Large businesses., if you have an IT need and requirement to hire offshore/onsite dedicated developer, you can acquire specialized talent on a term basis & leverage our Professional Services ON DEMAND.",
      listHeadingSecond:"ODC / BOT",
      listTitleSecond:"Which organization would not like to have a dedicated IT delivery team? A team that understands their business and technology, which can be quickly changed in size without the administrative overhead of resourcing, managing and enabling the team with the infrastructure required. And, of course, delivers high-quality cost-effective solutions. The lab/center is staffed with long-term dedicated staff; equipped with required infrastructure and connectivity; tailored processes and practices are implemented; and collaboration & communication tools deployed. Key service levels for the lab/center are defined and monitored jointly with the client.",
    },
    {
      title:"PRODUCT ENGINEERING",
      isCompetencies:false,
      description:"Consulting & Planning, Complete Product Engineering",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/engagement-model/Projects.png",
      listHeadingFirst:"Consulting & Planning",
      listTitleFirst:"If you don't have domain expertise then we can help you in building complete project plan (SRS, Wireframes & Designs) & recommend the right Technology / Platform / Infrastructure to bring your idea to life. Now, you can get your project executed from anywhere with this plan.",
      listHeadingSecond:"Product Engineering",
      listTitleSecond:"If you have an idea and want to develop it then NeoSOFT can take complete responsibility of your product from design-develop-to-market. Suitable for existing as well as new products.",
    }
    
  ];
  ngOnInit() {
  }

}
