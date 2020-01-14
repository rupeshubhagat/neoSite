import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild('fullpageRef', { static: false }) fp_directive: ElementRef;
  config;
  fullpage_api;

  constructor(private renderer: Renderer2) {

    this.config = {
      autoScrolling: true,
      navigation: true,
      navigationPosition: 'right',
      anchors: ['Home', 'Who-We-Are', 'What-We-Do', 'We-Work-With', 'Who-We-Have-Helped', 'Why-Choose-Us', 'Blog', 'Footer'],
      navigationTooltips: ['Home', 'Who We Are', 'What We Do', 'We Work With', 'Who We Have Helped', 'Why Choose Us', 'Blog', 'Footer'],
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
  }
  //Coding For full page js
  //Coding For full page js ends

  //Coding For OWL-Carosuls 001 For banner section
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<span class="icon-left-open-big">', '<span class="icon-right-open-big">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      1024: {
        items: 5
      }
    },
    nav: true
  }
  //Coding For OWL-Carosuls

  // owl carousel for blogs Sections starts:
  customOptions1: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<span class="icon-left-open-big">', '<span class="icon-right-open-big">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  // owl carousel for blogs Sections ends:

  ngOnInit() {
  }

  // full js
  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
    // this.fullpage_api.fitToSection();
    // this.fullpage_api.setFitToSection(true);
    // this.fullpage_api.setResponsive(false);
    // this.fullpage_api.responsiveSlides.toSections();
    // this.fullpage_api.responsiveSlides.toSlides();
  }
  //full js

}
