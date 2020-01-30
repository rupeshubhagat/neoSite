import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-fact',
  templateUrl: './corporate-fact.component.html',
  styleUrls: ['./corporate-fact.component.scss']
})
export class CorporateFactComponent implements OnInit {
  isTabFirst:boolean = true;
  isTabSecond:boolean = false;

  constructor() { }

  tabFirstOpen(){
    this.isTabFirst = true;
    this.isTabSecond = false;
  }

  tabSecondOpen(){
    this.isTabFirst = false;
    this.isTabSecond = true;
  }

  ngOnInit() {
  }

}
