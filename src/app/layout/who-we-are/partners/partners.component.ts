import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  constructor() { }
  clienteleArray:any[]=[
    {
      id:1,
      imgUrl:"../../../../assets/images/whowearemodule/partners/cisco.png",
      imgAlt:"cisco.png",
      categeory:"patners"
    },
    {
      id:2,
      imgUrl:"../../../../assets/images/whowearemodule/partners/icann.png",
      imgAlt:"icann.png",
      categeory:"patners"
    },
    {
      id:3,
      imgUrl:"../../../../assets/images/whowearemodule/partners/adobe.png",
      imgAlt:"adobe.png",
      categeory:"patners"
    },
    {
      id:4,
      imgUrl:"../../../../assets/images/whowearemodule/partners/java.png",
      imgAlt:"java.png",
      categeory:"patners"
    },
    {
      id:5,
      imgUrl:"../../../../assets/images/whowearemodule/partners/bronze.png",
      imgAlt:"bronze.png",
      categeory:"patners"
    },
    {
      id:6,
      imgUrl:"../../../../assets/images/whowearemodule/partners/microsoft.png",
      imgAlt:"microsoft.png",
      categeory:"patners"
    },
    {
      id:7,
      imgUrl:"../../../../assets/images/whowearemodule/partners/playstore.png",
      imgAlt:"playstore.png",
      categeory:"patners"
    },
    {
      id:8,
      imgUrl:"../../../../assets/images/whowearemodule/partners/vmvare.png",
      imgAlt:"vmvare.png",
      categeory:"patners"
    },
    {
      id:9,
      imgUrl:"../../../../assets/images/whowearemodule/partners/ios.png",
      imgAlt:"ios.png",
      categeory:"patners"
    },
    {
      id:10,
      imgUrl:"../../../../assets/images/whowearemodule/partners/intel.png",
      imgAlt:"intel.png",
      categeory:"patners"
    },
    {
      id:11,
      imgUrl:"../../../../assets/images/whowearemodule/partners/aws.png",
      imgAlt:"aws.png",
      categeory:"patners"
    },
    {
      id:12,
      imgUrl:"../../../../assets/images/whowearemodule/partners/googlecloud.png",
      imgAlt:"googlecloud.png",
      categeory:"patners"
    }
  ]

  ngOnInit() {
  }

}
