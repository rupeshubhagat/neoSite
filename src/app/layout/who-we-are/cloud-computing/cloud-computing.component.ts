import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud-computing',
  templateUrl: './cloud-computing.component.html',
  styleUrls: ['./cloud-computing.component.scss']
})
export class CloudComputingComponent implements OnInit {

  constructor() { }
  product:any[] =[
    {
      title:"STRATEGY & ASSESSMENT",
      isCompetencies:false,
      description:"Cloud Consulting & Planning",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/cloud-computing/STRATEGY-ASSESSMENT.png",
      paraDescriptionFirst:"NeoSOFT help you gauge your cloud-readiness, evaluate application suitability & your existing legacy systems, augment security and compliance, maximize ROI and build a cloud road-map that will enable your organization to migrate to the cloud seamlessly.",
      paraDescriptionSecond:null,
      posts:[
        {
          name: "Cloud-Readiness"
        },
        {
          name: "Transformation Roadmap"
        },
        {
          name: "Platform Assessment"
        },
        {
          name: "Business Needs Prioritization"
        },
        {
          name: "Integration Strategy"
        },
        {
          name: "Evaluating ROI & TCO"
        },
        {
          name: "Legacy Infrastructure Evaluation"
        },
        {
          name: "Cost Optimization"
        }
      ]
    },
    
    {
      title:"CLOUD ENABLEMENT",
      isCompetencies:false,
      description:"Cloud Management Services - Run, Monitor, Tune, Metering, Analytics & Administration",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/cloud-computing/CLOUD-ENABLEMENT.png",
      paraDescriptionFirst:"NeoSOFT offers its vast experience in Serverless Technologies, DevOps Practices as well as in building highly scalable cloud-native applications across multiple public / private / hybrid / community cloud platforms including AWS, Microsoft Azure, Google Cloud, vCloud, OpenStack, CloudStack, etc.",
      paraDescriptionSecond:null,
      listTitleFirst:null,
      listTitleSecond:null,
      postsSecond:[
        {
          name: "Infrastructure as a Service (IaaS) - VM Provisioning, Storage, Failover / Backup, Elastic Scalability, Database, Application Server, etc."
        },
        {
          name: "Platform as a Service (PaaS) - Multi-Tenancy, Client Libraries, Components, Workflows, Message Services, Cache, Authentication / Authorization, Data Services, etc."
        },
        {
          name: "Software as a Service (SaaS) - Packaged Applications, Custom Applications 1…n"
        }
      ],
      posts:null
    },
    {
      title:"LIFECYCLE MANAGEMENT",
      isCompetencies:false,
      description:"Cloud Management Services - Run, Monitor, Tune, Metering, Analytics & Administration",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/web-dev/Ecommerce-Solutions.png",
      paraDescriptionFirst: null,
      paraDescriptionSecond:null,
      postsSecond:[
        {
          name:"Application Management - Monitoring & tuning applications to get high availability, better response time & to optimize resources utilization."
        },
        {
          name:"Security - Monitoring & managing security concerns covering different aspects like Data Security, Access Control & Server / OS Security."
        },
        {
          name:"Platform / Infrastructure Management - By deploying different automated set of tools for monitoring, optimizing, backups, disaster recovery, upgrades / patches, etc."
        }
      ]
     
    }
  ];


  ngOnInit() {
  }

}
