import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-competencies',
  templateUrl: './competencies.component.html',
  styleUrls: ['./competencies.component.scss']
})
export class CompetenciesComponent implements OnInit {

  arrowRight:string = "../../../../assets/images/whowearemodule/accordian/accordion-arrow.png";
  close:string = "../../../../assets/images/whowearemodule/accordian/accordion-close.png";

  @Input() isCompetencies:boolean;
  @Input() title:string;
  @Input() description:string;
  @Input() imgUrl:string;
  @Input() posts:object[];
   
  constructor() { }
  
  isOpenBody(){
  this.isCompetencies =! this.isCompetencies;
  }

  ngOnInit() {
  }

}
