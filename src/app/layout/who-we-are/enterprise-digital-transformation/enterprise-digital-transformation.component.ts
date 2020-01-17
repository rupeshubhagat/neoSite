import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprise-digital-transformation',
  templateUrl: './enterprise-digital-transformation.component.html',
  styleUrls: ['./enterprise-digital-transformation.component.scss']
})
export class EnterpriseDigitalTransformationComponent implements OnInit {

  constructor() { }
  product:any[] =[
    {
      title:"ENTERPRISE SYSTEM INTEGRATION",
      isCompetencies:false,
      description:null,
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/enterpriseDigitalTransformation/enterprise-system.png",
      paraDescriptionFirst:"Our vast experience of different technologies, platforms and methodologies enables us to serve the most complex integration needs. We can fetch / consolidate / exchange business data from different heterogeneous enterprise systems – on premise, on-cloud or third-party apps",
      paraDescriptionSecond:"Our capabilities:",
      listTitleFirst:null,
      listTitleSecond:null,
      listTitleThird:null,
      listHeadingFirst:null,
      listHeadingSecond:null,
      posts:null,
      postsSecond:[
        {
          name:"Single Identity Management and Enforcement (SSO - Single Sign-On)"
        },
        {
          name:"Data Aggregation from various systems"
        },
        {
          name:"Developing Custom Connectors / APIs for integration"
        },
        {
          name:"Consolidated Dashboards"
        },
        {
          name:"Device / App Management Strategy"
        },
        {
          name:"Reports etc."
        }
      ]
    },
    {
      title:"ENTERPRISE CONTENT MANAGEMENT",
      isCompetencies:false,
      description:null,
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/enterpriseDigitalTransformation/enterprise-content.png",
      paraDescriptionFirst:"Enterprise Content needs to be generated, stored, accessed, managed & distributed digitally to users - when and where they need it.",
      paraDescriptionSecond:"Our capabilities:",
      listTitleFirst:null,
      listTitleSecond:null,
      listTitleThird:null,
      listHeadingFirst:null,
      listHeadingSecond:null,
      posts:null,
      postsSecond:[
        {
          name:"Enterprise Information Portal"
        },
        {
          name:"Knowledge Management System"
        },
        {
          name:"Web Content Management System"
        },
        {
          name:"Document Management System"
        },
        {
          name:"Workflow Management & Automation"
        }
      ]
    },
    {
      title:"ENTERPRISE MOBILITY SERVICES",
      isCompetencies:false,
      description:null,
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/enterpriseDigitalTransformation/enterprise-mobility.png",
      paraDescriptionFirst:"Our enterprise mobility solutions are customized / extended to serve customers in any industry, and address both enterprise and customer-related challenges and opportunities. We extend enterprise applications to mobile platforms which improve productivity, enhance overall customer experience, optimize different business processes as information is available to your employees, customers, partners, vendors - anywhere, anytime.",
      paraDescriptionSecond:"Our capabilities:",
      listTitleFirst:null,
      listTitleSecond:null,
      listTitleThird:null,
      listHeadingFirst:null,
      listHeadingSecond:null,
      // posts:null,
      posts:[
        {
          name:"Mobile Sales App"
        },
        {
          name:"Customer Feedback & Loyalty Program Apps"
        },
        {
          name:"POS / Payment Apps"
        },
        {
          name:"Document Management on Mobile"
        },
        {
          name:"Field Service App"
        },
        {
          name:"Business Intelligence & Analytics Apps"
        },
        {
          name:"Logistic & Fleet Management App"
        },
        {
          name:"Collaboration & Communication Apps"
        },
        {
          name:"Asset Tracking (RFID / Barcode) App"
        },
        {
          name:"M-Commerce Apps"
        },
        {
          name:"Mobile CRM App"
        }
      ]
    },
    {
      title:"CUSTOMER RELATION MANAGEMENT",
      isCompetencies:false,
      description:null,
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/enterpriseDigitalTransformation/customer-relation.png",
      paraDescriptionFirst:"We help enterprises to accelerate their CRM transformation initiative to increase sales, boost productivity of sales team and improve overall customer experience / service – while reducing operational cost and increasing time-to-market.",
      paraDescriptionSecond:"Our capabilities:",
      listTitleFirst:null,
      listTitleSecond:null,
      listTitleThird:null,
      listHeadingFirst:null,
      listHeadingSecond:null,
      posts:null,
      postsSecond:[
        {
          name:"CRM Customizations / Implementation"
        },
        {
          name:"Customer Portals"
        },
        {
          name:"Mobile Enablement"
        }
      ]
    },
    {
      title:"ENTERPRISE COLLABORATION",
      isCompetencies:false,
      description:null,
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/enterpriseDigitalTransformation/enterprise-collaboration.png",
      paraDescriptionFirst:"Implementing different solutions on Mobile, Web OR Cloud across enterprise to increase productivity, collaboration & effective communication.",
      paraDescriptionSecond:"Our capabilities:",
      listTitleFirst:null,
      listTitleSecond:null,
      listTitleThird:null,
      listHeadingFirst:null,
      listHeadingSecond:null,
      posts:null,
      postsSecond:[
        {
          name:"Employee Portal"
        },
        {
          name:"Team Sites"
        },
        {
          name:"Document Management System"
        },
        {
          name:"Calendar"
        },
        {
          name:"Groups"
        },
        {
          name:"Forums / Blogs"
        },
        {
          name:"Chat"
        }
      ]
    },
    {
      title:"BUSINESS INTELLIGENCE",
      isCompetencies:false,
      description:null,
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/enterpriseDigitalTransformation/enterprise-intelligence.png",
      paraDescriptionFirst:"Business Intelligence is about how we can make any business / organization more intelligent with the use of Advanced Analytics, Artificial Intelligence (AI), Machine Learning, etc. - enabling them to make more informed decisions & operate more efficiently.",
      paraDescriptionSecond:"Our capabilities:",
      listTitleFirst:null,
      listTitleSecond:null,
      listTitleThird:null,
      listHeadingFirst:null,
      listHeadingSecond:null,
      posts:null,
      postsSecond:[
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
        },
        {
          name:"Chatbots"
        }
       
      ]
    },
    {
      title:"CLOUD INTEGRATION SERVICES",
      isCompetencies:false,
      description:null,
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/enterpriseDigitalTransformation/cloud-integration.png",
      paraDescriptionFirst:"We can help you to move your enterprise applications and data to the cloud infrastructure of your choice and provide managed services, support for the same.",
      paraDescriptionSecond:"Our capabilities:",
      listTitleFirst:null,
      listTitleSecond:null,
      listTitleThird:null,
      listHeadingFirst:null,
      listHeadingSecond:null,
      posts:null,
      postsSecond:[
        {
          name:"Cloud Integration"
        },
        {
          name:"Cloud Migration"
        },
        {
          name:"Cloud Application Management"
        },
        {
          name:"Cloud Infrastructure Management"
        }
       
      ]
    },
    {
      title:"DIGITAL PAYMENTS / E-TRANSACTIONS",
      isCompetencies:false,
      description:null,
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/enterpriseDigitalTransformation/digital-payment.png",
      paraDescriptionFirst:"We have developed several solutions to meet different customer needs in E-Commerce, M-Commerce, in-store POS for making digital payments.",
      paraDescriptionSecond:null,
      listTitleFirst:null,
      listTitleSecond:null,
      listTitleThird:null,
      listHeadingFirst:null,
      listHeadingSecond:null,
      posts:null
      
    },
    {
      title:"DIGITAL CUSTOMER EXPERIENCE",
      isCompetencies:false,
      description:null,
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/enterpriseDigitalTransformation/customer-exp.png",
      paraDescriptionFirst:"Every customer expects seamless Omni-channel journey.",
      paraDescriptionSecond:"We enable enterprise to deliver personalized, responsive, and unified customer experiences across digital and physical channels.",
      listTitleFirst:null,
      listTitleSecond:"Our capabilities:",
      listTitleThird:null,
      listHeadingFirst:null,
      listHeadingSecond:null,
      posts:null,
      postsSecond:[
        {
          name:"User Experience (UX) Design"
        },
        {
          name:"User Interface (UI) Design"
        },
        {
          name:"Brand Design"
        }
      ]
    },
    {
      title:"SOA (SERVICE ORIENTED ARCHITECTURE) SERVICES",
      isCompetencies:false,
      description:null,
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/enterpriseDigitalTransformation/soa-service.png",
      paraDescriptionFirst:"We manage the end-to-end SOA design, implementation and maintenance - tailored to the unique requirements of your organization.",
      paraDescriptionSecond:"SOA provides a strategic capability for integrating different business processes & data across organization. As interfaces are platform-independent, a client from any device using any operating system in any language can use the service.",
      listTitleFirst:null,
      listTitleSecond:"Our capabilities:",
      listTitleThird:null,
      listHeadingFirst:null,
      listHeadingSecond:null,
      posts:null,
      postsSecond:[
        {
          name:"SOA Design"
        },
        {
          name:"SOA Implementation"
        },
        {
          name:"SOA Maintenance & Support"
        }
      ]
    },
    {
      title:"ARCHITECTURE TRANSFORMATION SERVICES",
      isCompetencies:false,
      description:null,
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/enterpriseDigitalTransformation/architecture.png",
      paraDescriptionFirst:"In this digital era, many enterprises are undergoing through massive transformation in their IT architectures to drive agility, competitive differentiation and overall cost optimization.",
      paraDescriptionSecond:null,
      listTitleFirst:null,
      listTitleSecond:"Our capabilities:",
      listTitleThird:null,
      listHeadingFirst:null,
      listHeadingSecond:null,
      posts:null,
      postsSecond:[
        {
          name:"Perform `AS-IS` Analysis"
        },
        {
          name:"Perform 'TO-DO' Analysis"
        },
        {
          name:"Execute / Introduce New IT Architecture"
        },
        {
          name:"Define & Implement IT Architecture Governance model"
        }
      ]
    }  
  ];

  ngOnInit() {
  }

}
