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
  }

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
