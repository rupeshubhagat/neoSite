import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-app-development',
  templateUrl: './mobile-app-development.component.html',
  styleUrls: ['./mobile-app-development.component.scss']
})
export class MobileAppDevelopmentComponent implements OnInit {

  constructor() { }

  product:any[] =[
    {
      title:"Enterprise Mobility strategy",
      isCompetencies:false,
      description:"Assess Enterprise Mobile Maturity & help in finding (then achieving) strategic Mobility needs of the organization at all levels",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/mobile-app-dev/enterprise-mobile-strategy.png",
      paraDescriptionFirst:"We partner with enterprises to assess their mobile-readiness and help them prepare themselves, before they set out on their journey to being a ‘Mobile First’ organization.",
      paraDescriptionSecond:"First, we categorize the enterprise into Void, Exploratory, Intermediate OR Expert Areas depending upon the current state of mobility in the enterprise. Thereafter, we help in their transformation toward creating Mobile First organization - with following step-by-step approach",
      posts:[
        {
          name: "Design Architecture, Select Right Technology Stack & Infrastructure Design Architecture, Select Right Technology Stack & Infrastructure"
        },
        {
          name: "UX / UI Design Strategy"
        },
        {
          name: "Middleware Development Strategy"
        },
        {
          name: "Data Security Management Strategy"
        },
        {
          name: "Device / App Management Strategy"
        },
        {
          name: "Device / App Management Strategy"
        }
      ]
    },
    {
      title:"USER EXPERIENCE",
      isCompetencies:false,
      description:"Research, UX Design, UI Design, Usability Testing, etc.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/mobile-app-dev/user-experience.png",
      paraDescriptionFirst:"Building a mobile app is more than just creating the tool; Here, maximum emphasis is on user experience.",
      paraDescriptionSecond:"Nearly 40% of users will abandon an app if the experience is slow or cumbersome and 66% would rather read something beautifully designed. Companies simply can’t afford to miss on user experience, expectations are very high in this digital era and competitors are pushing to get it right.",
    },
    {
      title:"APPLICATION DEVELOPMENT",
      isCompetencies:false,
      description:"For Phones, Tablets, Wearables, etc. (on iOS, Android & Windows Platform) - Native, Hybrid, Mobile Web Application Development & Cross-Platform Application Development",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/mobile-app-dev/application-development.png",
      paraDescriptionFirst:"We are one of the first in the market to lead the mobile application development evolution from the early days of Palm handheld to today’s sophisticated Smartphones, Tablets & Wearables. We understand mobility like we know the back of our hands, that is why from Large Enterprises, SMEs to Startups - all have entrusted us with their mobile initiatives in the past and continue to do so. Our services include: Native Application Development, Hybrid Application Development & Mobile Web Application Development for Phones, Tablets, Wearables on all platforms - iOS, Android & Windows.",
      paraDescriptionSecond:"Not every application needs native approach. We follow Native, Hybrid OR Cross-Platform application development approach based on factors like cost, time to market, user experience, type of application - each approach has their advantages & drawbacks.",
    },
    {
      title:"TESTING SERVICES",
      isCompetencies:false,
      description:"Functionality, Usability, Compatibility, Performance, Security & Localization",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/mobile-app-dev/testing-services.png",
      paraDescriptionFirst:"Mobile Application Testing is one of the most critical aspects in the development process, which ensures applications perform consistently, across the plethora of mobile devices, platforms, and networks. We thoroughly test mobile applications in more than 100+ devices across various platforms using best processes / practices & various automation tools to ensure seamless and error free performance.",
      paraDescriptionSecond:null,
    },
    {
      title:"INTEGRATION SERVICES",
      isCompetencies:false,
      description:"With Backend Systems, Data Sources, Middleware Applications, MEAP / MADP, ERP, CRM, E-Commerce, CMS, Payment Gateways, Social Media, etc.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/mobile-app-dev/integration-services.png",
      paraDescriptionFirst:"Mobile Application often requires integration to:",
      paraDescriptionSecond:null,
      posts:[
        {
          name: "Multiple Backend Systems"
        },
        {
          name: "Messaging Services"
        },
        {
          name: "Reporting Services"
        },
        {
          name: "Middleware Applications"
        },
        {
          name: "Analytics"
        },
        {
          name: "MEAP / MADP"
        },
        {
          name: "Content Management Systems (Drupal, Sharepoint, Joomla, Wordpress, Kentico, Liferay, Alfresco, Umbraco, DotNetNuke, Typo3, Sitefinity, etc.)"
        },
        {
          name: "ERP (SAP, Microsoft ERP, Odoo, Oracle ERP, Liferay, Sage ERP, etc.)"
        },
        {
          name: "CRM (Salesforce, Microsoft Dynamics, Oracle Sales Cloud, SugarCRM, VTiger, Sage CRM, NetSuite, etc.)"
        },
        {
          name: "E-commerce Platforms (Magento, Shopify, Opencart, nopCommerce, osCommerce, WooCommerce, AspDotNetStorefront, etc.)"
        },
        {
          name: "Social Media (Facebook, Twitter, LinkedIn, WhatsApp, Pinterest, Flickr, Instagram, Google Plus, etc.) and more."
        },
        {
          name: "Email Services"
        },
        {
          name: "We can implement all such integration requirements very efficiently."
        }

      ]
    },
    {
      title:"DEPLOYMENT & SUPPORT",
      isCompetencies:false,
      description:"App Deployment, Analytics, Performance & Monitoring, Support & Maintenance, Updates, etc.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/mobile-app-dev/deployment-and-support.png",
      paraDescriptionFirst:"App Deployment depends upon target audience & type of application - either it can be done via regular channels like Apple App Store, Google Play Store & Windows Phone Store if its open for all, OR it can be managed via MDM (Mobile Device Management Software) OR MAM (Mobile Application Management Software) OR EAS (Enterprise Application Stores).",
      paraDescriptionSecond:"It’s very important to measure different critical metrics like:",
      posts:[
        {
          name: "DAU - Daily Active User"
        },
        {
          name: "In-App Referrals"
        },
        {
          name: "MAU - Monthly Active User"
        },
        {
          name: "In App Feedback"
        },
        {
          name: "User Lifetime Value (LTV)"
        },
        {
          name: "App Ratings and Review Analytics"
        },
        {
          name: "Average Session Length - Foreground & Background"
        },
        {
          name: "App Performance Analytics"
        },
        {
          name: "Retention Rates, Engagement Rates"
        },
        {
          name: "App Ratings and Review Analytics etc."
        }
      ]
    },
    {
      title:"MOBILE APP MARKETING",
      isCompetencies:false,
      description:"App Branding, App Store Optimization, App Submission, App Advertising, App Promotion, etc.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/mobile-app-dev/mobile-app-marketing.png",
      paraDescriptionFirst:null,
      paraDescriptionSecond:null,
      posts:null,
      postsSecond:[
        {
          name: "App Branding - Marketing Material, App Website, etc."
        },
        {
          name: "App Store Optimization - Research done verifies that around 63% of iOS users as well as 58% of Android users come across apps via app store search."
        },
        {
          name: "App Submission - to different review sites, PR sites, blogs, etc."
        },
        {
          name: "App Advertising - Paid advertising on search engines as well as on social media like Facebook, Twitter, etc."
        }  
      ]
    }
  ];
  

  ngOnInit() {
  }

}
