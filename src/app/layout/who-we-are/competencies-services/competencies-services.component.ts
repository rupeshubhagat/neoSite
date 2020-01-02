import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-competencies-services',
  templateUrl: './competencies-services.component.html',
  styleUrls: ['./competencies-services.component.scss']
})
export class CompetenciesServicesComponent implements OnInit {
  arrowRight:string = "../../../../assets/images/whowearemodule/accordian/accordion-arrow.png";
  close:string = "../../../../assets/images/whowearemodule/accordian/accordion-close.png";

  @Input() isCompetencies:boolean;
  @Input() title:string;
  @Input() description:string;
  @Input() paraDescriptionFirst:string;
  @Input() paraDescriptionSecond:string;
  @Input() imgUrl:string;
  @Input() posts:object[];
  @Input() postsSecond:object[];

  constructor() { }

  isOpenBody(){
    this.isCompetencies =! this.isCompetencies;
    }

  ngOnInit() {
  }

}
