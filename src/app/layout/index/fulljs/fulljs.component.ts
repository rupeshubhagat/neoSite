import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-fulljs',
  templateUrl: './fulljs.component.html',
  styleUrls: ['./fulljs.component.scss']
})
export class FulljsComponent implements OnInit {

  @ViewChild('fullpageRef',{static:false}) fp_directive: ElementRef;
  config;
  fullpage_api;

  constructor(private renderer: Renderer2) {
    this.config = {
      // licenseKey: 'YOUR LICENSE KEY HERE',
      //anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
     // menu: '#menu',
      //lockAnchors: false,
      autoScrolling: true,
      navigation: true,
      navigationPosition: 'right',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
      // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      navigationTooltips: ['Home', 'Who We Are','What We Do', 'Who We Have Helped'],
      // showActiveTooltip: true,

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
      }
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }


}
