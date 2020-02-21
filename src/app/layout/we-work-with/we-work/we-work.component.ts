import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-we-work',
  templateUrl: './we-work.component.html',
  styleUrls: ['./we-work.component.scss']
})
export class WeWorkComponent implements OnInit {
  config: any;
  fullpage_api: any;

  constructor() { 

    this.config = {
      autoScrolling: true,
      navigation: true,
      navigationPosition: 'right',
      anchors: ['Enterprise', 'Agencies', 'Startups','Footer'],
      navigationTooltips: ['Enterprise', 'Agencies', 'Startups','Footer'],
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
 
  ngOnInit() {
  }
  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
  goToUrl(url:string){
   window.open(url,"_blank");
  }

}
