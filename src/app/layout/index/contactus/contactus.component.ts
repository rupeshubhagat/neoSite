import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  sign:FormGroup;
  frmSign:object;
  inquiryTypes: any = ['Request For Services', 'Alliances', 'Alumni', 'Investor Relations','Media']
  constructor() { }
  ngOnInit() {
    this.sign = new FormGroup({
      inquiry: new FormControl(""),
      name: new FormControl(""),
      email:new FormControl(""),
      contact:new FormControl(""),
      orgnization:new FormControl(""),
      country:new FormControl(""),
      services: new FormControl(""),
      message: new FormControl("")
    });
  }

  register(sign){
   this.frmSign = {
     name : sign.name
   }
   console.log(this.frmSign);
   alert("Working");
   this.sign.reset();
  }

}
