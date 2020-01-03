import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {

  constructor() { }
  product:any[] =[
    {
      title:"BLOCKCHAIN APPLICATION DEVELOPMENT",
      isCompetencies:false,
      description:"With competencies to harness the capacity of this new revolutionary technology, we build cutting-edge futuristic blockchain applications for businesses worldwide.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/blockchain/Blockchain_appDev.png",
      paraDescriptionFirst:"Blockchain application development is gaining traction across several industries. NeoSOFT experts help you while you decide to leverage the blockchain technology. We discuss and build roadmaps for a successful blockchain journey. Our blockchain application development services follow the below procedures to deliver a majestic experience.",
      paraDescriptionSecond:null,
      posts:null,
      postsSecond:[
        {
          name: "Understand need, devise the roadmap"
        },
        {
          name: "Identify the technology stack that will befit the requirement"
        },
        {
          name: "Work on wireframes and prototypes."
        },
        {
          name: "Create an eye-catchy UI"
        },
        {
          name: "Build secured and robust applications- Entire development stack, right from UI designs to deploying nods."
        },
        {
          name: "Beta testing, audits and deployment"
        }
      ]
    },
    
    {
      title:"ADVISORY AND CONSULTING SERVICES",
      isCompetencies:false,
      description:"We understand the nuances of your business before proposing the right Blockchain solution for efficient and beneficial business transformation.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/blockchain/Advisory&consultant.png",
      paraDescriptionFirst:"A masterpiece is built only if it is strategically and thoughtfully designed and devised. Our blockchain advisory and consulting services are aimed at providing clients with appropriate decentralized apps and blockchain architecture that will meet their business goals. Using appropriate use cases, we then further get onto designing the prototypes.",
      paraDescriptionSecond:null,
      listTitleFirst:null,
      listTitleSecond:null,
      postsSecond:null,
      posts:null
    },
    {
      title:"ENTERPRISE SOLUTIONS",
      isCompetencies:false,
      description:"After witnessing the potential of this disruptive platform in the market, enterprises in leading industry verticals have resorted to blockchain technology",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/blockchain/enterprice_solution.png",
      paraDescriptionFirst:"Leveraging our depth of expertise over blockchain frameworks, we collaborate with enterprises to design and architect custom blockchain solutions. We engage the stakeholders to get a complete low-down on the existing systems and derive solutions which are robust and ultra-secure.",
      paraDescriptionSecond:"Enterprises enjoy the below listed benefits from our blockchain solutions",
      postsSecond:[
        {
          name:"Reduced cost/time for transactions"
        },
        {
          name:"Improves product and security of the entire system"
        },
        {
          name:"Increases transparency and tracks fraudulent activity."
        },
        {
          name:"Improves customer loyalty"
        }
      
      ]
     
    },
    {
      title:"BLOCKCHAIN FRAMEWORK",
      isCompetencies:false,
      description:"We specialize in building decentralized, secure and reliable blockchain applications using a wide range of frameworks.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/blockchain/blockchain_framework.png",
      paraDescriptionFirst:"Blockchain frameworks on which we work:",
      paraDescriptionSecond:"Bitcoin, Ethereum, Hyperledger, Multichain, R3, Corda",
      postsSecond:null
     
    },
    {
      title:"INTEGRATION SERVICES",
      isCompetencies:false,
      description:"Integration is one of the most vital aspects of the blockchain platform. Our experts ensure proper integration of the application with the cloud.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/blockchain/integration_service.png",
      paraDescriptionFirst:"Blockchain technology is mostly about distributed databases. Integrating them with the application requires expertise, precision and in-depth understanding of the intricate dimensions. As your blockchain development partner, we provide 2 types of integration services-",
      paraDescriptionSecond:null,
      postsSecond:[
        {
          name:"Integrate the application with the cloud"
        },
        {
          name:"Integrate the existing legacy systems with the new blockchain architecture and use accelerators, to expedite connecting and reconciling with the existing infrastructure."
        }
    
      ]
     
    },
    {
      title:"TESTING SERVICES",
      isCompetencies:false,
      description:"Our blockchain application testing services ensure that all the components work in cohesion and any relative application connected to the blockchain fabric interacts in the desired pattern.",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/blockchain/Testing.png",
      paraDescriptionFirst:"We follow the best suite of testing approaches that include several paths. Depending on the blockchain application and the platform, we choose a mixed toolset to conduct testing, with a focus on Bitcoin and Ethereum.",
      paraDescriptionSecond:"Blockchain Testing Frameworks: Ethereum Tester, BitconJ, Populus, Truffle, Embark, Hyperledger Composer",
      postsSecond:null
     
    }
  ];

  ngOnInit() {
  }

}
