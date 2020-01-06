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
  @Input() description:any;
  @Input() paraDescriptionFirst:any;
  @Input() paraDescriptionSecond:any;
  @Input() paraDescriptionThird:any;
  @Input() paraDescriptionForth:any;

  @Input() moreInfoParaFirst:any;
  @Input() moreInfoParaSecond:any;
  @Input() moreInfoParaThird:any;
  @Input() moreInfoParaForth:any;
  @Input() moreInfoParaFifth:any;
  @Input() moreInfoParaSix:any;
  @Input() moreInfoParaSeven:any;
  @Input() moreInfoParaEight:any;
  @Input() moreInfoParaNine:any;

  @Input() listHeadingFirst:any;
  @Input() listHeadingSecond:any;
  @Input() listHeadingThird:any;
  @Input() listHeadingForth:any;
  @Input() listHeadingFifth:any;
  @Input() listHeadingSix:any;
  @Input() listHeadingSeven:any;
  @Input() listHeadingEight:any;
  @Input() listHeadingNine:any;

  @Input() listTitleFirst:any;
  @Input() listTitleSecond:any;
  @Input() listTitleThird:any;
  @Input() listTitleForth:any;
  @Input() listTitleFifth:any;
  @Input() listTitleSix:any;
  @Input() listTitleSeven:any;
  @Input() listTitleEight:any;
  @Input() listTitleNine:any;
 

  @Input() imgUrl:string;
  @Input() posts:object[];
  @Input() postsSecond:object[];
  @Input() postsThird:object[];
  @Input() postsForth:object[];
  @Input() postsFifth:object[];
  @Input() postsSix:object[];
  @Input() postsSeven:object[];
  @Input() postsEight:object[];
  @Input() postsNine:object[];

  constructor() { }

  isOpenBody(){
    this.isCompetencies =! this.isCompetencies;
    }

  ngOnInit() {
  }

}
