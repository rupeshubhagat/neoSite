import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-ops',
  templateUrl: './dev-ops.component.html',
  styleUrls: ['./dev-ops.component.scss']
})
export class DevOpsComponent implements OnInit {

  constructor() { }

  product:any[] =[
    {
      title:"DEVOPS CONSULTING",
      isCompetencies:false,
      description:"Connect, collaborate and orchestrate the digital components.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/devops/DevOps-Consulting.png",
      paraDescriptionFirst:"Our team of DevOps experts assess the existing development practices including agile adoption, tools, automation, solution architecture, cloud services, and culture and recommend agile practices that effectively collaborate with development, quality, and operations. In the age of changing business landscape and the evolution of disruptive technologies, we help organizations with DevOps consulting services to overcome the bottleneck in the traditional software development processes.",
      paraDescriptionSecond:null,
      posts:[
        {
          name:"DevOps Assessment & Strategy"
        },
        {
          name:"Maturity Roadmap & Blueprint"
        },
        {
          name:"Maturity Model Evaluation"
        },
        {
          name:"Jumpstart Program"
        }
      ],
      postsSecond:null
    },
    
    {
      title:"DEVOPS AS A SERVICE",
      isCompetencies:false,
      description:"An interface between the developers and the operations to reduce rollbacks during the development phase for faster deployment of the project.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/devops/DevOps-Service.png",
      paraDescriptionFirst:"Growing businesses need to be nimble and require quick adaptability and integration. We offer DevOps as a Service, where our team of experts deploys DevOps strategies and tools to help you automate the process and align every aspect of software development for quicker and hassle-less deliveries. We are proficient in Amazon Web Services DevOps and hold capabilities that allow migrating complex applications and manage the infrastructure challenges easily.",
      paraDescriptionSecond:null,
      listTitleFirst:null,
      listTitleSecond:null,
      postsSecond:null,
      posts:null
    },
    {
      title:"DEVOPS ENABLEMENT",
      isCompetencies:false,
      description:"Continuous integration and continuous delivery tools to improve product quality and reduce the cost.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/devops/DevOps-ENABLEMENT.png",
      paraDescriptionFirst:"We deploy agile methodologies across heterogeneous architectures and technologies to improve product quality and reduce the costs through:",
      paraDescriptionSecond:"Enterprises enjoy the below listed benefits from our blockchain solutions",
      posts:[
        {
          name:"Continuous integration"
        },
        {
          name:"SCM and development/test tool automation"
        },
        {
          name:"Cross-Platform Migration"
        },
        {
          name:"Continuous delivery"
        },
        {
          name:"Test automation"
        },
        {
          name:"Code Repository"
        },
        {
          name:"Service virtualization"
        },
        {
          name:"Security PARAM’s and measurements on demands"
        }
      
      ]
     
    },
    {
      title:"SMARTER ENVIRONMENTS",
      isCompetencies:false,
      description:"Create smarter environments, improve productivity, quality, development and IT operations.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/devops/SmarterEnvironments.png",
      paraDescriptionFirst:"The tremendous cost and delivery delays are important factors which are significantly reduced by creating smarter environments using DevOps. We create a smarter and automated production-environment which includes:",
      paraDescriptionSecond:null,
      posts:[
        {
          name:"Infrastructure as Code (AWS CloudFormation)"
        },
        {
          name:"Application Container Packs"
        },
        {
          name:"Configuration management (Puppet, Chef, Ansible)"
        },
        {
          name:"Application & Infra Monitoring"
        },
        {
          name:"Container Management (Docker, Swarm, Vagrant)"
        },
        {
          name:"Test Data management"
        }
    
      
      ]
     
    }
   
  ];


  ngOnInit() {
  }

}
