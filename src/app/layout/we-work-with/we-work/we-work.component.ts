import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-we-work',
  templateUrl: './we-work.component.html',
  styleUrls: ['./we-work.component.scss']
})
export class WeWorkComponent implements OnInit {
  config: any;
  fullpage_api: any;
  private fragment: string;

  constructor(private route: ActivatedRoute) { 

    this.config = {
      autoScrolling: true,
      navigation: true,
      navigationPosition: 'right',
      anchors: ['Enterprises', 'Agencies', 'Startups','Footer'],
      navigationTooltips: ['Enterprises', 'Agencies', 'Startups','Footer'],
      // fitToSection:true,
      // responsiveHeight:766,
      // responsiveSlides:false,
      // scrollBar:true,
      // showActiveTooltip: true,
      responsiveWidth: 900,

      // events callback
      afterLoad: (origin, destination, direction) => {
        // console.log(destination);
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (width, height) => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section, origin, destination, direction) => {
        // console.log(destination);
      },
      afterResponsive: (isResponsive) => {
        // alert("Is responsive: " + isResponsive);
      }
    };
  }//Constructor

  weWorkClient:any[]=[
    {
     id:1,
     imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/enterprise/sbi-logo.png",
     imgAlt:"sbi-logo",
     categeory:"enterprises"
    },
    {
      id:2,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/enterprise/ddecor.png",
      imgAlt:"ddecor.png",
      categeory:"enterprises"
     },
     {
      id:3,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/enterprise/australian-olympic.png",
      imgAlt:"australian-olympic",
      categeory:"enterprises"
     },
     {
      id:4,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/enterprise/bajaj.png",
      imgAlt:"bajaj.png",
      categeory:"enterprises"
     },
     {
      id:5,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/enterprise/etisalat.png",
      imgAlt:"etisalat.png",
      categeory:"enterprises"
     },
     {
      id:6,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/enterprise/mahindra.png",
      imgAlt:"mahindra.png",
      categeory:"enterprises"
     },
     {
      id:7,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/enterprise/raymond.png",
      imgAlt:"raymond.png",
      categeory:"enterprises"
     },
     {
      id:8,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/enterprise/sharekhan-logo.png",
      imgAlt:"sharekhan-logo.png",
      categeory:"enterprises"
     },
     {
      id:9,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/agencies/BCG-LOGO.png",
      imgAlt:"BCG-LOGO",
      categeory:"agencies"
     },
     {
      id:10,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/agencies/GEP-LOGO.png",
      imgAlt:"GEP-LOGO",
      categeory:"agencies"
     },
     {
      id:11,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/agencies/KPMG-LOGO.png",
      imgAlt:"KPMG-LOGO.png",
      categeory:"agencies"
     },
     {
      id:12,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/agencies/TCS-LOGO.png",
      imgAlt:"TCS-LOGO.png",
      categeory:"agencies"
     },
     {
      id:13,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/agencies/ey.png",
      imgAlt:"ey.png",
      categeory:"agencies"
     },
     {
      id:14,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/agencies/B2X-LOGO.png",
      imgAlt:"B2X-LOGO.png",
      categeory:"agencies"
     },
     {
      id:15,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/agencies/MINDTREE-LOGO.png",
      imgAlt:"MINDTREE-LOGO.png",
      categeory:"agencies"
     },
     {
      id:16,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/agencies/TRIGYN-LOGO.png",
      imgAlt:"TRIGYN-LOGO.png",
      categeory:"agencies"
     },
     {
      id:17,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/startups/Zimmber.png",
      imgAlt:"Zimmber.png",
      categeory:"startups"
     },
     {
      id:18,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/startups/Eb-logo.png",
      imgAlt:"Eb-logo.png",
      categeory:"startups"
     },
     {
      id:19,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/startups/Quickr.png",
      imgAlt:"Quickr.png",
      categeory:"startups"
     },
     {
      id:20,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/startups/Pepperfry.png",
      imgAlt:"Pepperfry.png",
      categeory:"startups"
     },
     {
      id:21,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/startups/Zimmber.png",
      imgAlt:"Zimmber.png",
      categeory:"startups"
     },
     {
      id:22,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/startups/Holachef.png",
      imgAlt:"Holachef.png",
      categeory:"startups"
     },
     {
      id:23,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/startups/Hdfcred.png",
      imgAlt:"Hdfcred.png",
      categeory:"startups"
     },
     {
      id:24,
      imgclient:"../../../../assets/images/weworkwith/we-work-slider/enterpriseClient/startups/Embibe.png",
      imgAlt:"Embibe.png",
      categeory:"startups"
     },
  ];

  enterprise = this.weWorkClient.filter( (arrayElement)=>{ return  arrayElement.categeory == "enterprises" });
  agencies = this.weWorkClient.filter((arrayElement)=> { return arrayElement.categeory == "agencies"});
  startups = this.weWorkClient.filter((arrayElement)=>{ return arrayElement.categeory == "startups"});

 
  ngOnInit() { 
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    console.log(this.fragment);
  }

  
  




  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
  goToUrl(url:string){
   window.open(url,"_blank");
  }

}
