import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet-of-things',
  templateUrl: './internet-of-things.component.html',
  styleUrls: ['./internet-of-things.component.scss']
})
export class InternetOfThingsComponent implements OnInit {

  constructor() { }
  product:any[] =[
    {
      title:"STRATEGY",
      isCompetencies:false,
      description:"Plan your IoT Solution",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/IoT/strategy.png",
      paraDescriptionFirst:"We define the right IoT landscape for you to kick start your IoT journey. A structured approach is taken to understand your business needs & offer quick ramp-up to discover your IoT needs & solutions, accelerating your time to market with low risk and zero lock-in.",
      paraDescriptionSecond:"Here, we Identify business pain points that IoT can resolve, find out Industry insights & benchmark, create IoT roadmap in line with desired business outcomes, define POC plan / technology / platform roadmap.",
      posts:null,
      postsSecond:null
    },
    
    {
      title:"Build",
      isCompetencies:false,
      description:"Devices, Gateways, Cloud Platforms, Applications & Analytics",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/IoT/build.png",
      paraDescriptionFirst:"NeoSOFT has developed several domain specific solutions that have helped our clients across various industries like Healthcare, Automotive, Retail, Energy, Manufacturing, Construction, BFSI, Home Automation, etc. to leverage potential benefits of IoT technologies and M2M communication using internet protocol. Under the IoT portfolio, we have expertise on various technologies like:",
      paraDescriptionSecond:null,
      listTitleFirst:null,
      listTitleSecond:null,
      listTitleThird:"Our offering includes,",
      posts:null,
      postsSecond:[
        {
          name: "machine to machine – collect information through meters or sensors and communicate through wired or wireless devices network"
        },
        {
          name: "sensors – subsequent actions through sensors or actuators take place based on certain environmental changes"
        },
        {
          name: "sensors – subsequent actions through sensors or actuators take place based on certain environmental changes"
        },
        {
          name:"connected machines – automate processes through an intelligent network of devices and alert the users on reaching preset values"
        }
        
      ],
      postsThird:[
        {
          name:"IoTization – Device, Gateway, Connectivity, Security - Enabling devices to sense, communicate, network & produce information, and sending it to cloud securely.",
        },
        {
          name:"IoT Platform – Data Storage, Device Management, Data Science Workbench",
        },
        {
          name:"IoT Applications and Analytics",
        },
        {
          name:"Integration of IoT Applications with rest of IT landscape",
        }
      ],
      
    },
    {
      title:"Run",
      isCompetencies:false,
      description:"IoT Device / Platform Management, IoT Data Review, Provisioning, Measuring & Monitoring - IoT Solutions",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/IoT/run.png",
      paraDescriptionFirst:"To run an IoT system smoothly, a properly managed service is required in each layer of the IoT ecosystem. IoT managed services allow businesses to take a proactive approach towards operations, maintenance and predict machine downtime in advance to avoid sudden breakdown and failures. Different managed services include,",
      paraDescriptionSecond:null,
      listTitleFirst:null,
      listTitleSecond:null,
      listTitleThird:null,
      postsSecond:[
        {
          name:"IoT Device Management - Updates / Security Patches, Replacement, Monitoring",
          
        },
        {
          name:"Platform Management - Usage monitoring, performance tuning & optimization",
          
        },
        {
          name:"Data Review - Monitoring different data patterns, measuring accuracy of data models, data cleaning & reports generation",
          
        }
      ],
      posts:null,
      postsThird:null
    }
  ];

  ngOnInit() {
  }

}
