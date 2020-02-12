import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor() { }
  isOwl: boolean;
  empPerkImages:any[];
 

  ngOnInit() {
    //Screen width When We Directly open into mobile
    console.log("Width",window.innerWidth);
    if(window.innerWidth > 566){
      this.isOwl = false;
    }
    else{
      this.isOwl = true;
    }
    

    //screen Width
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false, 
        dots: true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive: { 
          0: {
            items: 1
          },
          600: {
            items: 1
          }
          // 1000:{
          //     items:5
          // }
        }
      })
    });

   this.empPerkImages=[
    {
      id:1,
      empPerImg:"../../../../assets/images/whowearemodule/career/employeePerk/health-care.png",
      empPerImgAlt:"health-care",
      title:"Wellness Program"
    },
    {
      id:2,
      empPerImg:"../../../../assets/images/whowearemodule/career/employeePerk/healthinsurance.png",
      empPerImgAlt:"healthinsurance",
      title:"Health Insurance"
    },
    {
      id:3,
      empPerImg:"../../../../assets/images/whowearemodule/career/employeePerk/life-insurance.png",
      empPerImgAlt:"Life Insurance",
      title:"Life Insurance"

    },
    {
      id:4,
      empPerImg:"../../../../assets/images/whowearemodule/career/employeePerk/lunch.png",
      empPerImgAlt:"Meal Allowance",
      title:"Meal Allowance"
    },
    {
      id:5,
      empPerImg:"../../../../assets/images/whowearemodule/career/employeePerk/travel.png",
      empPerImgAlt:"Travel Allowance",
      title:"Travel Allowance"
    },
    {
      id:6,
      empPerImg:"../../../../assets/images/whowearemodule/career/employeePerk/achievement.png",
      empPerImgAlt:"Individual Achivement Perk",
      title:"Individual Achivement Perk"
    },
    {
      id:7,
      empPerImg:"../../../../assets/images/whowearemodule/career/employeePerk/performance.png",
      empPerImgAlt:"Team Performance Perk",
      title:"Team Performance Perk"
    },
    {
      id:8,
      empPerImg:"../../../../assets/images/whowearemodule/career/employeePerk/jobtenure.png",
      empPerImgAlt:"Job Tenure Perks",
      title:"Job Tenure Perks"
    },
    {
      id:9,
      empPerImg:"../../../../assets/images/whowearemodule/career/employeePerk/paid-vaction.png",
      empPerImgAlt:"Paid Vacations & Holidays",
      title:"Paid Vacations & Holidays"
    },
    {
      id:10,
      empPerImg:"../../../../assets/images/whowearemodule/career/employeePerk/flexiblework.png",
      empPerImgAlt:"Flexible Work Option",
      title:"Flexible Work Option"
    },
    {
      id:11,
      empPerImg:"../../../../assets/images/whowearemodule/career/employeePerk/Late-Night-Meals.png",
      empPerImgAlt:"Late Night Meals & Rides",
      title:"Late Night Meals & Rides"
    },
    {
      id:12,
      empPerImg:"../../../../assets/images/whowearemodule/career/employeePerk/Referral-Bonus.png",
      empPerImgAlt:"Refferal Bonus",
      title:"Refferal Bonus"
    },
    {
      id:13,
      empPerImg:"../../../../assets/images/whowearemodule/career/employeePerk/relocation.png",
      empPerImgAlt:"Relocation Allowance",
      title:"Relocation Allowance"
    }
   ];

    
  } //ngOnint

  // By using Inspect changes
  @HostListener('window:resize', ['$event']) onResize(event) {

    if (event.target.innerWidth > 566) {
      this.isOwl = false;
      // window.location.reload();
      // console.log("owl resize false")
    } else {
      // window.location.reload();
      this.isOwl = true;
      // console.log("owl resize true")
    };
  }
  //
  goToLink(url: string){
    window.open(url, "_blank");
  }

}
