import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aiandml',
  templateUrl: './aiandml.component.html',
  styleUrls: ['./aiandml.component.scss']
})
export class AiandmlComponent implements OnInit {

  constructor() { }
  product:any[] =[
    {
      title:"STRATEGY AND BUILD-UP",
      isCompetencies:false,
      description:"Consulting, AI Priorities, Algorithms and building a robust AI & ML infrastructure",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/ai-ml/ai-strategy.png",
      paraDescriptionFirst:" Adhering to the protocols and norms, our AI team constructs business strategies to add value to your business.",
      paraDescriptionSecond:null,
      posts:null,
      postsSecond:[
        {
          name: "Discuss the AI priorities"
        },
        {
          name: "Discuss the AI priorities"
        },
        {
          name: "Cover the core aspects of AI Strategy."
        },
        {
          name: "AI experts gain an insight to pre-derive outcome using Key Performance Indicators (KPIs) and Objectives and Key Results (OKRs)"
        }
      ]
    },
    
    {
      title:"BUSINESS CASE PLANNING",
      isCompetencies:false,
      description:"Mapping out the pitfalls, challenges, and outcomes to build a solid business case.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/ai-ml/ai-planning.png",
      paraDescriptionFirst:"A constructive roadmap is built with pre-defined goals, with a business case explaining the in-depth plan of the project.",
      paraDescriptionSecond:null,
      listTitleFirst:null,
      listTitleSecond:null,
      postsSecond:[
        {
          name: "Detailed approach for AI roadmap development"
        },
        {
          name: "Adherence to corporate standards and profitability"
        },
        {
          name: "Business case with focus on project stages, alternatives, opportunities, Financial Proforma etc. which are crucial aspects of implementation."
        },
        {
          name:"Need analysis of AI application integration with the existing business model."
        }
      ],
      posts:null
    },
    {
      title:"BUSINESS PROCESS ASSESSMENT (BPA) AND BUSINESS PROCESS RE-DESIGN",
      isCompetencies:false,
      description:"Process assessment to determine performance, assess ROI and work on opportunities",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/ai-ml/ai-process.png",
      paraDescriptionFirst: null,
      paraDescriptionSecond:null,
      postsSecond:[
        {
          name:"BPA tools to reveal bottlenecks and challenges in the project. "
        },
        {
          name:"Focus on core improvements, cost reduction, need for redesign."
        },
        {
          name:"Include metrics such as cost, flexibility, time quality, customer satisfaction, value, project scope and schedule goals."
        }
      ]
     
    },
    {
      title:"DATA MANAGEMENT",
      isCompetencies:false,
      description:"Data mining, Data strategies, Data quality, Data governance, and Data integration",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/ai-ml/ai-data-management.png",
      paraDescriptionFirst: "Our team of Data Experts provide data strategies along with advanced, and secured architectural space. A vast quantity of data empowers accuracy and valued performance in AI solution. Below are the measures undertaken when handling database systems in AI. ",
      paraDescriptionSecond:null,
      postsSecond:[
        {
          name:"Data Locality"
        },
        {
          name:"Data Durability"
        },
        {
          name:"Data Scalability"
        }
      ]
     
    },
    {
      title:"CUSTOMIZATION, DEVELOPMENT, AND INTEGRATION",
      isCompetencies:false,
      description:"Customized model deployment, Secured integration with cloud computing ",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/ai-ml/ai-customization.png",
      paraDescriptionFirst: "Empowering enterprises to retransform with progressive functions and customizable features.",
      paraDescriptionSecond:null,
      postsSecond:[
        {
          name:"Discovery & Analysis"
        },
        {
          name:"Proof-of-Concept"
        },
        {
          name:"Proof-of-Concept"
        },
        {
          name:"Deployment and Support"
        },
        {
          name:"Performance engineering and enhancement "
        }
      ]
     
    },
    {
      title:"RISK AND COMPLIANCE",
      isCompetencies:false,
      description:"Increase compliance control, policy management effectiveness, and risk mitigation programs.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/ai-ml/ai-compliance.png",
      paraDescriptionFirst: "Increase compliance control, policy management effectiveness, and risk mitigation programs.",
      paraDescriptionSecond:null,
      postsSecond:[
        {
          name:"Adopt a unique compliance strategy"
        },
        {
          name:"Right combination of Technology and tools"
        },
        {
          name:"Framework to manage compliance risk"
        },
        {
          name:"Increased collaboration"
        },
        {
          name:"Enterprise-wide risk management process"
        }
      ]
     
    }
  ];

  ngOnInit() {
  }

}
