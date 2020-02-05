import { Component, OnInit, HostListener } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  isOwl: boolean;
  imgFramework: any[] = [];
  techWhatWeDo: any[] = [];
  constructor() {}

  ngOnInit() {

    console.log("Width",window.innerWidth);
  if(window.innerWidth > 566){
     this.isOwl = false;
  }
  else{
    this.isOwl = true;
  }
    $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip()
      
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 3
          }
          // 1000:{
          //     items:5
          // }
        }
      })
    });

    this.imgFramework = [
      {
        id: 1,
        imgUrl: "../../../../assets/images/technologymodule/tech_served/ios.png",
        imgName: "iOS Microsoft"
      },
      {
        id: 2,
        imgUrl: "../../../../assets/images/technologymodule/tech_served/tech-served-aspdotnet-storefront-logo.png",
        imgName: "Microsoft Azure"
      },
      {
        id: 3,
        imgUrl: "../../../../assets/images/technologymodule/tech_served/tech-served-magento-logo.png",
        imgName: "iOS"
      },
      {
        id: 4,
        imgUrl: "../../../../assets/images/technologymodule/tech_served/tech-served-nopcommerce-logo.png",
        imgName: "Amazon Web Services"
      },
      {
        id: 5,
        imgUrl: "../../../../assets/images/technologymodule/tech_served/tech-served-oscommerce-logo.png",
        imgName: "VMware"
      },
      {
        id: 6,
        imgUrl: "../../../../assets/images/technologymodule/tech_served/tech-served-woo-commerce-logo.png",
        imgName: "iOS"
      },
      {
        id: 7,
        imgUrl: "../../../../assets/images/technologymodule/tech_served/ios.png",
        imgName: "Citrix Systems"
      },
      {
        id: 8,
        imgUrl: "../../../../assets/images/technologymodule/tech_served/tech-served-woo-commerce-logo.png",
        imgName: "Google Cloud Platform"
      },
      {
        id: 9,
        imgUrl: "../../../../assets/images/technologymodule/tech_served/ios.png",
        imgName: "iOS"
      },
      {
        id: 10,
        imgUrl: "../../../../assets/images/technologymodule/tech_served/tech-served-woo-commerce-logo.png",
        imgName: "Citrix Systems"
      },
      {
        id: 11,
        imgUrl: "../../../../assets/images/technologymodule/tech_served/tech-served-woo-commerce-logo.png",
        imgName: "Google Cloud Platform "
      }
    ];
    this.techWhatWeDo =[
      {
        id:1,
        description:"Custom Application Development (Web, Mobile & Desktop)"
      },
      {
        id:2,
        description:"Application Re-engineering / Migration (Lower .NET Version to Higher .NET Version)"
      },
      {
        id:3,
        description:"Application Porting (From Different Technology Stack to .NET Technology Stack)"
      },
      {
        id:4,
        description:"Application Integration"
      },
      {
        id:5,
        description:"Legacy Applications Upgradation, Enhancement & Performance Tuning"
      },
      {
        id:6,
        description:"Rapid Application Development Using Frameworks (DevExpress, Telerik, Infragistics, ComponentOne, etc.)"
      },
      {
        id:7,
        description:"Open Source Customization & Implementations (DotNetNuke, nopCommerce, AspDotNetStorefront, Sitefinity, Kentico, Umbraco, Sitecore, etc.)"
      },
      {
        id:8,
        description:"E-Commerce Solutions"
      },
      {
        id:9,
        description:"B2B, B2C & C2C Portals"
      },
      {
        id:10,
        description:"Enterprise Business Solutions(Part 1): Customer Relationship Management System (CRM), Human Resource Management System (HRMS), Business Process Management (BPM), Customer Portal, Partner Portal"
      },
      {
        id:11,
        description:"Enterprise Business Solutions(Part 2): Purchase / Vendor Portal, Sales & Marketing Automation Systems, Finance & Accounting, Inventory Management, Document Management System (DMS), Business Intelligence & Analytics, Management Information System (MIS), etc."
      },
      {
        id:12,
        description:"Middleware Development - Web Services / API"
      }
    ]

  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    if (event.target.innerWidth > 566) {
      this.isOwl = false;
    } else {
      this.isOwl = true;
    };
  }

}
