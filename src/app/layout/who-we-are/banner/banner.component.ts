import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() title: string;
  // @Input() backgroundImage: string = "../../../../assets/images/whowearemodule/banner/overview-bg.png";
  @Input() bottomIMage: string;
  @Input() description: string;

  @ViewChild('wrapper',{static:true}) el:ElementRef;

  constructor() { }

  ngOnInit() {
    // this.el.nativeElement.style.backgroundImage = this.backgroundImage;
  }

}
