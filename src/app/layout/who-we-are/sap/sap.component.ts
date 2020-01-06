import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sap',
  templateUrl: './sap.component.html',
  styleUrls: ['./sap.component.scss']
})
export class SapComponent implements OnInit {

  constructor() { }
  product:any[] =[
    {
      title:"ENTERPRISE TRANSFORMATION",
      isCompetencies:false,
      description:"Deploying SAP to achieve large-scale business transformation.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/sap/enterprise-mobile-strategy.png",
      paraDescriptionFirst:"Maximizing enterprise value on a large scale with functionally rich SAP solutions using proven tools, templates, methodologies and accelerators. Our Services include:",
      paraDescriptionSecond:null,
      postsSecond:[
        {
          name: "SAP System Implementation"
        },
        {
          name: "CFO Solutions (IFRS, EPM, CFM, Analytics)"
        },
        {
          name: "CIO Solutions (SAP New Dimensional Solutions, Portals, and SAP MDG)"
        },
        {
          name: "SAP-enabled enterprise business process re-engineering (BPR)"
        },
        {
          name: "SAP Project System (PS) for Project Management including full project lifecycle, from forecasting and planning to tracking and accounting."
        }
      ]
    },
    {
      title:"EVALUATION & DESIGN",
      isCompetencies:false,
      description:"Analysis, Design and Configuration",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/sap/Evaluation-&-Design.png",
      paraDescriptionFirst:"Customized SAP implementation after thorough evaluation, strategy planning, and design principles to leverage business performances.",
      paraDescriptionSecond:null,
      postsSecond:[
        {
          name: "SAP system selection advisory and fitment evaluation process."
        },
        {
          name: "Constructive analysis to create SAP roadmap plan which encompasses Performance Management and KPI frameworks."
        },
        {
          name: "Configuring SAP designs based on scenarios (Sales-Force Mobility, Tax Technology, Master Data, etc.)"
        }       
      ]
    },
    {
      title:"INTEGRATIONS, UPGRADES & MIGRATIONS",
      isCompetencies:false,
      description:"Modernize business process modules with EHP, SAP HANA, and compatible upgrades",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/sap/Integrations,-Upgrades-&-Migrations.png",
      paraDescriptionFirst:"We provide comprehensive solution upgrades to achieve the best business outcome and enable businesses to embrace versatility in their operations.",
      paraDescriptionSecond:null,
      postsSecond:[
        {
          name: "Technical Upgrade & Functional Upgrade in SAP to meet market demands thus providing richer functionalities"
        },
        {
          name: "SAP’s Enhancement Package (EHP) for system enhancement along with integration with third-party systems."
        },
        {
          name: "Migration to SAP HANA for advanced analytics processing and flexibility."
        }       
      ]
    },
    {
      title:"SUPPORT AND MAINTENANCE",
      isCompetencies:false,
      description:"SAP Enterprise Support and SAP Application Management Services (AMS)",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/sap/Support-and-Maintenance.png",
      paraDescriptionFirst:"Strategize activities with SAP Application Management Services (AMS) which is an extensive approach to facilitate business profitability in the market.",
      paraDescriptionSecond:null,
      postsSecond:[
        {
          name: "SAP AMS includes Onsite AMS Support, Offshore AMS Support, and Hybrid AMS support."
        },
        {
          name: "Gain proactive support across all deployment scenarios with SAP Enterprise Support.."
        }
      ]
    },
    {
      title:"REVIEW AND OPTIMIZATION",
      isCompetencies:false,
      description:"SAP System Recommendations, SAP Innovation and Optimization Pathfinder",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/sap/review-and-optimization.png",
      paraDescriptionFirst:"We review business operations to ensure it gets the utmost value from the SAP system.",
      paraDescriptionSecond:null,
      postsSecond:[
        {
          name: "SAP Innovation and Optimization Pathfinder to identify relevant business and IT improvements."
        },
        {
          name: "SAP Innovation and Optimization Pathfinder to identify relevant business and IT improvements."
        }
      ]
    }
   
  ];

  ngOnInit() {
  }

}
