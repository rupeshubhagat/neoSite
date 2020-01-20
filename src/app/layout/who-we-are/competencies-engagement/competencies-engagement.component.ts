import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competencies-engagement',
  templateUrl: './competencies-engagement.component.html',
  styleUrls: ['./competencies-engagement.component.scss']
})
export class CompetenciesEngagementComponent implements OnInit {

  isCompetencies:boolean = false;
  isCompetenciesSecond:boolean = false;
  arrowRight:string = "../../../../assets/images/whowearemodule/accordian/accordion-arrow.png";
  close:string = "../../../../assets/images/whowearemodule/accordian/accordion-close.png";
  constructor() { }

  ngOnInit() {
  }

}
