import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ux-ui',
  templateUrl: './ux-ui.component.html',
  styleUrls: ['./ux-ui.component.scss']
})
export class UxUiComponent implements OnInit {

  constructor() { }
  product:any[] =[
    {
      title:"RESEARCH",
      isCompetencies:false,
      description:"Goal Analysis, Personas, Workflows & Competitor Benchmarking",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/ux-ui/RESEARCH.png",
      paraDescriptionFirst:"It includes Requirement Gathering & Analysis, Mapping - User Needs & Expectations, Business Goals, Target Platforms, Competitors, etc. then create scope definition.",
      paraDescriptionSecond:null,
      postsSecond:null,
    },
    {
      title:"USER EXPERIENCE (UX) DESIGN",
      isCompetencies:false,
      description:"Information Architecture, Interaction Design, Wireframing / Prototyping, Navigation Design",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/ux-ui/USER-EXPERIENCE-DESIGN.png",
      paraDescriptionFirst:"User experience is about more than just how easy the application is to use and how nice it looks. UX spans the range of visual design, content, interaction design, navigation, features and context to deliver a satisfying interaction and transaction experience for the user.",
      paraDescriptionSecond:null,
      postsSecond:null
    },
    {
      title:"USER INTERFACE (UI) DESIGN",
      isCompetencies:false,
      description:"User-Centred, Intuitive Graphical User Interface Design",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/ux-ui/USER-INTERFACE-DESIGN.png",
      paraDescriptionFirst:"First Impression is everything. We create visual magic by blending colors, illustrations and typography - adhering to Brand / Style Guidelines of company.",
      paraDescriptionSecond:null,
      postsSecond:null
    },
    {
      title:"BRAND DESIGN",
      isCompetencies:false,
      description:"Branding & Identity",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/ux-ui/BRAND-DESIGN.png",
      paraDescriptionFirst:"Your brand is your business. We design visual systems that expresses your business & its values. It includes:",
      paraDescriptionSecond:null,
      postsSecond:[
        {
          name: "Brand Strategy - Brand Positioning, Brand Name, Brand Architecture, Tone of Voice"
        },
        {
          name: "Core Identity - Brand Identity Design, Logo Design, Brand Visual Language, Brand / Style Guidelines"
        },
        {
          name: "Marketing Collateral - Packaging Design, Brand Campaigns, Print & Publication Design, Space and Retail Design, etc."
        }
      ]
    },
    {
      title:"USABILITY TESTING",
      isCompetencies:false,
      description:"User Research, Usability & Accessibility Compliance, Heuristics Evaluation, Eye Tracking",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/ux-ui/USABILITY-TESTING.png",
      paraDescriptionFirst:"Our approach for Usability Testing is experiential. We design scenarios and experiment with actual users from the target industry. We use a variety of tools to test usability of products. Feedback is then provided to the design teams to refine and finalize product designs.",
      paraDescriptionSecond:null,
      postsSecond:null
    },
    {
      title:"PRODUCT REDESIGN SERVICES",
      isCompetencies:false,
      description:"Enhancing Existing UI / UX, Fill Current Gaps, Overcome Current Challenges",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/ux-ui/PRODUCT-REDESIGN-SERVICES.png",
      paraDescriptionFirst:"Here first, we analyze your existing product, identify usability / accessibility compliance issues, find out challenges & gaps in current UI / UX. Then create new UI / UX design as per assessment report created & current trends, do usability testing & refine it further based on feedback from testing team.",
      paraDescriptionSecond:null,
      postsSecond:null
    },
    {
      title:"FRONT END DEVELOPMENT",
      isCompetencies:false,
      description:"Pixel Perfect, Responsive (Multi-Channel & Cross-Platform) Front End",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/ux-ui/FRONT-END-DEVELOPMENT.png",
      paraDescriptionFirst:"The front-end is the first thing that a user will see and interact with. Using the latest technologies, we make sure the design is translated into a functioning code at the pixel level. We code strictly in accordance with current standards and support you during an integration with the back-end system.",
      paraDescriptionSecond:null,
      postsSecond:null
    }
    
    
   
  ];

  ngOnInit() {
  }

}
