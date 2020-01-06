import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-consulting',
  templateUrl: './software-consulting.component.html',
  styleUrls: ['./software-consulting.component.scss']
})
export class SoftwareConsultingComponent implements OnInit {

  constructor() { }

  product:any[] =[
    {
      title:"DIGITAL STRATEGY",
      isCompetencies:false,
      description:"Digital Readiness Assessment, Digital Transformation Roadmap & Execution Plan",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/software-consulting/DIGITAL-STRATEGY.png",
      paraDescriptionFirst:"First, we will assess your organization's level of digital readiness to ensure right direction & steps, avoid potential pitfalls when leveraging your digital strategy. We then begin with Business Requirements Document (BRD), Software Requirements Specification (SRS) & Plan which will have definite effort estimation & timeline with clear expected results / milestones.",
      paraDescriptionSecond:null,
      postsSecond:null,
    },
    
    {
      title:"USER EXPERIENCE STRATEGY",
      isCompetencies:false,
      description:"Creative, User Experience & User Research",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/software-consulting/USER-EXPERIENCE-STRATEGY.png",
      paraDescriptionFirst:"Regardless of screen, device or channel - our UI / UX specialists create visually stunning, functional and user friendly UI / UX designs as per your brand identity. This activity compromises of 3 phases -   1)   Analysis   2)   Design 3)   Delivery.",
      paraDescriptionSecond:null,
      postsSecond:[
        {
          name:"In Analysis - We do Requirement Analysis, Scope Definition, User Profiling, Brainstorming & Pre-design Usability Testing"
        },
        {
          name:"In Design - We create Workflow Design, Information Architecture, Graphic User Interface, Visual Design & Typography"
        },
        {
          name:"In Delivery - We do Prototyping, Design Usability Testing, Responsive Design, Standardization & SEO"
        }
      ]
    },
    {
      title:"TECHNOLOGIES / PLATFORMS / INFRASTRUCTURE SELECTION",
      isCompetencies:false,
      description:"Define Technology Stack & Deployment Environment",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/software-consulting/TECHNOLOGIES-PLATFORMS-INFRASTRUCTURE-SELECTION.png",
      paraDescriptionFirst:"We decide technology stack by analyzing,",
      paraDescriptionSecond:null,
      postsSecond:[
        {
          name: "Type of application (Web, Cloud, Mobile OR Desktop), Volume of end users & how they are going to access & with what kind of infrastructure"
        },
        {
          name: "Your existing Infrastructure, Current Technology Stack in Company, Current IT Staffs expertise, etc."
        },
        {
          name: "Budget, Maintainability, Migration of Existing Data, Security Concerns, etc."
        },
        {
          name:"Most cutting edge available technology stacks"
        }
      ]
    }
   
    
   
  ];

  ngOnInit() {
  }

}
