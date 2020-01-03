import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss']
})
export class WebDevelopmentComponent implements OnInit {

  product:any[] =[
    {
      title:"CORE SERVICES",
      isCompetencies:false,
      description:"Custom Application Development, Re-Engineering / Migration, Porting, Upgradation / Enhancement, Integration",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/web-dev/Core-Services.png",
      paraDescriptionFirst:"NeoSOFT provides Application Development & Maintenance (ADM) services to its clients across the globe to effectively develop, maintain and run their mission critical applications. It includes:",
      paraDescriptionSecond:null,
      posts:[
        {
          name: "Custom Application Development"
        },
        {
          name: "Application Re-engineering / Migration (Lower Version to Higher Version)"
        },
        {
          name: "Application Porting (From one technology stack to other technology stack)"
        },
        {
          name: "Application Integration"
        },
        {
          name: "Legacy Application Upgradation, Enhancement & Performance Tuning"
        },
        {
          name: "Application Sustenance & Support"
        },
        {
          name: "Cloud Migration"
        }
      ]
    },
    
    {
      title:"ENTERPRISE BUSINESS SOLUTIONS",
      isCompetencies:false,
      description:"Internet as well as Intranet Solutions (Custom as well as readymade Business Solutions Customization / Implementation)",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/web-dev/ENTERPRISE-BUSINESS-SOLUTIONS.png",
      paraDescriptionFirst:"We transform the way Small, Medium & Large Enterprises conduct their business with Customers / Clients, Vendors / Suppliers, Partners and Employees in this digital age. Our offerings include:",
      paraDescriptionSecond:null,
      listTitleFirst:null,
      listTitleSecond:null,
      posts:[
        {
          name: "Customer Relationship Management System (CRM)"
        },
        {
          name: "Sales & Marketing Automation Systems"
        },
        {
          name: "Human Resource Management System (HRMS)"
        },
        {
          name: "Finance & Accounting"
        },
        {
          name: "Business Process Management (BPM)"
        },
        {
          name: "Inventory Management"
        },
        {
          name: "Customer Portal"
        },
        {
          name: "Customer Portal"
        },
        {
          name: "Customer Portal"
        },
        {
          name: "Business Intelligence & Analytics"
        },
        {
          name: "Purchase / Vendor Portal"
        },
        {
          name: "Management Information System (MIS)"
        }
      ],
      postsSecond:null
    },
    {
      title:"E-COMMERCE SOLUTIONS",
      isCompetencies:false,
      description:"B2C, B2B, C2C & C2B Solutions (Custom as well as readmade E-Commerce Platform Customization / Implementation)",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/web-dev/Ecommerce-Solutions.png",
      paraDescriptionFirst: "We build and manage engaging E-Commerce experiences and operations globally. Our E-Commerce Solutions includes:",
      paraDescriptionSecond:null,
      posts:[
        {
          name:"Custom E-Commerce Application Development - B2B, B2C, C2C & C2B"
        },
        {
          name:"Point-of-Sales (POS) Systems Integration"
        },
        {
          name:"Customization, Enhancement, Implementation & Deployment - of ready E-Commerce Solutions like Magento, osCommerce, WooCommerce, nopCommerce, OpenCart, Shopify, AspDotNetStorefront, etc."
        },
        {
          name:"Inventory Management"
        },
        {
          name:"Merchandising Solutions"
        },
        {
          name:"Multisite, Multicurrency & Multilingual Solutions"
        },
        {
          name:"System Integration - with ERP, CRM, Social Media, Shipping / Payment Gateways"
        },
        {
          name:"Mobile Commerce Solutions"
        },
        {
          name:"Social Commerce Solutions"
        },
        {
          name:"Market Place & Vendor Management etc."
        }
      ],
      postsSecond:null
    },
    {
      title:"CONTENT MANAGEMENT SYSTEMS",
      isCompetencies:false,
      description:"Enterprise Portals & Digital Customer Experience Platforms (Custom as well as readymade CMS Customization / Implementation)",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/web-dev/Content-Management-System.png ",
      paraDescriptionFirst: "Our CMS Solutions includes:",
      paraDescriptionSecond:null,
      posts:[
        {
          name:"Mobile First UX / UI"
        },
        {
          name:"Rich Media Management"
        },
        {
          name:"Multilingual"
        },
        {
          name:"Files / Documents Management"
        },
        {
          name:"Content Management"
        },
        {
          name:"Access Control"
        },
        {
          name:"Workflow Management"
        },
        {
          name:"Visitor Engagement"
        },
        {
          name:"Multisite"
        },
        {
          name:"Community Management"
        },
        {
          name:"Social Media Integration"
        }
      ],
      postsSecond:null
    },
    {
      title:"E-GOVERNANCE SOLUTIONS",
      isCompetencies:false,
      description:"Implementation of government services in India & Abroad",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/web-dev/E-GOVERNANCE-SOLUTIONS.png",
      paraDescriptionFirst: "We serve state as well as central governments in India & in other countries, public sector units, different government / semi-government bodies – offer them technologies based governance solutions & services. It helps to improve transparency, efficiency and effectiveness of different policies & procedures, enabling Smart Governance in different areas that are specifically connected to citizens. It mainly comprises of Pushing Information over the Internet, 2-way communication between Government & Citizen / Stakeholders, Conducting Different Transactions, Transparency in Different Workflows, etc.",
      paraDescriptionSecond:null,
      posts:null,
      postsSecond:null
    },
    {
      title:"MIDDLEWARE DEVELOPMENT",
      isCompetencies:false,
      description:"API, Web Services, Micro Services - Development",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/web-dev/MIDDLEWARE-DEVELOPMENT.png",
      paraDescriptionFirst: "Today, different applications need to connect with external systems using Micro Services / Web Services / APIs. We build Micro Services / Web Services / APIs for connecting your custom, PaaS or SaaS software to external applications, devices and IoT systems. Our middleware solutions include logging, error handling and transaction monitoring, and ensure your SOA and ESB implementations start off on solid footing.",
      paraDescriptionSecond:null,
      posts:null,
      postsSecond:null
    },
    {
      title:"WEB 2.0 / 3.0 SITES",
      isCompetencies:false,
      description:"Social Networks Development, Wikis, Podcasts, 2D/3D Portals, Co-creative web, Interoperable profiles, Integrated Games",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/web-dev/Web-2,0-3,0.png",
      paraDescriptionFirst: "Web 2.0/3.0 Sites are primary responsible to shift web from informational medium to service oriented, community based medium and share the same technology pillars of Semantic tagging and microformats. Forcing e-businesses to restructure their business process, web 3.0 applications help to retain customers and gain competitive advantages.",
      paraDescriptionSecond:null,
      posts:null,
      postsSecond:null
    },
    {
      title:"PORTALS",
      isCompetencies:false,
      description:"The gateway to Information across the Enterprise",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/web-dev/Portal.png",
      paraDescriptionFirst: "NeoSOFT offers full cycle Portal development services for information delivery, communication, collaboration and automation of business processes through one or more interconnected applications. We build portal solutions with the goal of putting power into the hands of your users - Employees, Customers / Clients, Partners, Vendors / Suppliers, etc. and providing them a gateway to information / content, transactions, and business processes. No matter where your content / information / data reside, we can make it available to your users. It includes:",
      paraDescriptionSecond:null,
      posts:null,
      postsSecond:[
        {
          name:"Customer Portal"
        },
        {
          name:"Vendor / Supplier Portal"
        },
        {
          name:"Sales / Marketing Automation Portal"
        },
        {
          name:"Employee Portal"
        }
       
      ]
     
    }
  ];

  constructor() { }

  

  ngOnInit() {
  }

}
