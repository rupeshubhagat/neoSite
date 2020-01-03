import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-bigdata',
  templateUrl: './analytics-bigdata.component.html',
  styleUrls: ['./analytics-bigdata.component.scss']
})
export class AnalyticsBigdataComponent implements OnInit {

  constructor() { }
  product:any[] =[
    {
      title:"ANALYTICS",
      isCompetencies:false,
      description:"Data Science, Data Visualization & Insights",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/analytics-big-data/ANALYTICS.png",
      paraDescriptionFirst:"Large raw data, particularly Big Data, doesn't offer real insights in its unprocessed state, by using the right set of tools & processes, blocks of data can be deconstructed, analyzed & converted into powerful insights. In any Analytics setup, the first step is to capture relevant data. Then, the enterprise has to decide which analytics model suits their business needs the best.",
      paraDescriptionSecond:"Our Analytics offerings include:",
      posts:null,
      postsSecond:[
        {
          name: "Big Data Analytics / Aggregations"
        },
        {
          name: "Operational Analytics / Aggregations"
        },
        {
          name: "ETL Services"
        },
        {
          name: "Data Science"
        }
      ]
    },
    
    {
      title:"BiG DATA",
      isCompetencies:false,
      description:"Consulting, Implementation & Sustenance Services",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/analytics-big-data/BIG-DATA.png",
      paraDescriptionFirst:"Mobile, Internet of Things & Clouds are generating huge amounts of unstructured & untapped data. Harnessing this data requires updating your information architecture, building robust platform - which allow you to collect, analyze, transform, visualize & most importantly, use this data for your different business, customers & market needs.",
      paraDescriptionSecond:"Our Big Data offerings include:",
      listTitleFirst:null,
      listTitleSecond:null,
      postsSecond:[
        {
          name: "Design - Big Data Infrastructure"
        },
        {
          name: "Develop & Operationalize - Big Data Infrastructure"
        },
        {
          name: "Maintain & Support - Big Data Infrastructure"
        }
        
      ],
      posts:null
    },
    {
      title:"BUSINESS INTELLIGENCE",
      isCompetencies:false,
      description:"Take control of your data and accelerate your business growth",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/ai-ml/ai-process.png",
      paraDescriptionFirst: "The success of enterprise is measured by its revenue, profitability and the number of satisfied customers. To achieve these, enterprises need to optimize their internal (i.e. Sales, Purchase, Finance, Operations, HR, etc.) as well as external (i.e. Customers, Vendors, Partners, etc.) business transactions. Our BI solutions help you to extract real insights into your business for improving your internal & external business outcomes.",
      paraDescriptionSecond:"Our BI offerings include:",
      postsSecond:[
        {
          name:"BI Consulting & Planning "
        },
        {
          name:"Data Management (Quality, Integration, Standardization, Consolidation)"
        },
        {
          name:"Information Visualization (Unified view, KPIs, Dashboards, Scorecards, Reports, etc.)"
        },
        {
          name:"Information Delivery (Portals, Data Access Controls)"
        },
        {
          name:"Analytics"
        }
      ]
     
    }
  ];

  ngOnInit() {
  }

}
