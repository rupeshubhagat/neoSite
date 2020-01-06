import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa-testing',
  templateUrl: './qa-testing.component.html',
  styleUrls: ['./qa-testing.component.scss']
})
export class QaTestingComponent implements OnInit {

  constructor() { }

   product:any[] =[
    {
      title:"CORE TESTING SERVICES",
      isCompetencies:false,
      description:"Functional Testing",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/qa-testing/Core-Services.png",
      paraDescriptionFirst:null,
      paraDescriptionSecond:null,
      
      listHeadingFirst:null,
      listTitleFirst:null,
      post:null,

      listHeadingSecond:"Functional Testing",
      listTitleSecond:"Installation Testing verifies software's proper installation and further operating. And is executed at end when software is almost ready to go LIVE. There are different types of installation like,",
      postsSecond:[
        {
          name:"Simulating actual software usage to find out potential problems / issues before they impact actual / live users."
        },
        {
          name:"Detecting defects early in the software lifecycle to minimize rework, improve quality and reduce overall testing & development costs"
        },
        {
          name:"Ensuring that new features / enhancements do not impact existing software"
        },
        {
          name:"Unit Testing / Module Testing - At this stage we check whether functions of the separate modules operate properly"
        },
        {
          name:"Integration Testing - At this stage we verify whether the functions involving interaction of the different modules work as intended, stated in its specification"
        },
        {
          name:"System Testing - At this stage, our team carefully examines functionalities of whole software as intended, stated in its specification."
        },
        {
          name:"Unit Testing"
        },
        {
          name:"System Testing"
        },
        {
          name:"System Testing"
        }

      ],

      listHeadingThird:"Regression Testing",
      listTitleThird:"Regression Testing must be an integral part of every software development process. Regression Testing is performed after –",
      postsThird:[
        {
          name:"Correction of the reported defects / bugs"
        },
        {
          name:"Adding new features / functionalities in software."
        },
        {
          name:"In Regression Testing, we choose test cases –"
        },
        {
          name:"that often fail"
        },
        {
          name:"that are complex"
        },
        {
          name:"verifying frequently used functions & main functions"
        },
        {
          name:"verifying functions affected by the recent changes in the code"
        },
        {
          name:"checking boundary values"
        },
        {
          name:"checking integration issues, etc."
        }

      ],
      moreInfoParaThird:"Regression Testing should be automated (if possible), as it contains many tests which need to be repeated in every testing session, nowadays there are many tools available for this - paid as well as open source.",
   

      listHeadingForth:"User Interface & Usability Testing",
      listTitleForth:"User interface testing is a process of verifying whether the software user interface complies with the requirements, and whether it is easy & convenient for the end-users to work / interact with the software. This testing type may be performed manually and by means of various automated testing tools.",
      postsForth:[
        {
          name:"It is carried out in 2 phases –"
        },
        {
          name:"Usability Testing performed by qualified test engineers - where domain experts perform certain tasks as end-user and find out how easy / convenient software is to use / interact with."
        },
        {
          name:"Usability Testing performed by end-users - where end-users perform certain tasks, test engineers watch the user's behavior, problems that they face while performing tasks, way of thinking, time to understand user interface, facial expressions, etc. Different recording instruments are usually used during this session to record what is going on screen, voice of user, user facial expression, etc. These recordings are used to find out software usability defects."
        },
      ],
    },

    {
      title:"CORE TESTING SERVICES",
      isCompetencies:false,
      description:"Non-functional Testing",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/qa-testing/Core-Services.png",
      paraDescriptionFirst:null,
      paraDescriptionSecond:null,
      
      listHeadingFirst:null,
      listTitleFirst:null,
      post:null,

      listHeadingSecond:"Installation Testing",
      listTitleSecond:"Installation Testing verifies software's proper installation and further operating. And is executed at end when software is almost ready to go LIVE. There are different types of installation like,",
      postsSecond:[
        {
          name:"Attended Installation where user must accept the end-user license agreement, select where to install the application, enter the password or activation, etc.."
        },
        {
          name:"Detecting defects early in the software lifecycle to minimize rework, improve quality and reduce overall testing & development costs"
        },
        {
          name:"Headless Installation where installation of software happens over network from one machine to another"
        },
        {
          name:"Automated Installation where installation runs when certain predefined conditions satisfy or occur."
        },
        {
          name:"Important aspects that should be considered during Installation Testing –"
        },
        {
          name:"Space - whether the installer checks required free space on selected installation location"
        },
        {
          name:"Memory - how much memory is used by software, whether it’s in specified limits"
        },
        {
          name:"Behavior of installer in non-compliance states"
        },
        {
          name:"Negative Testing"
        },
        {
          name:"Uninstallation - what all things should happen & what all things are happening."
        }

      ],

      listHeadingThird:"Load & Performance Testing",
      listTitleThird:"Performance issues are not always because of hardware. A proper analysis on performance issues can reveal the real bottlenecks which may be in software / network / hardware, and thus can produce an optimized solution which can be combination of software, network and hardware solutions. Performance Testing comprises of –",
      postsThird:[
        {
          name:"Load Testing - Here, we verify whether software operate properly at different load levels, what problems happen during functioning under different loads, etc. It defines the normal performance ability."
        },
        {
          name:"Stress Testing - In stress testing, with the increase in load, some unfavorable conditions, factors and the environment also adds to degrade performance of a software. Thus, a software should be able to perform effectively and efficiently under these circumstances. It identifies boundaries."
        },
        {
          name:"Volume Testing - Software applications are often subjected to large volume of data for certain process or operation. It is required that the software performance should not be hindered while being flooded with the considerable amount of data."
        },
        {
          name:"Soak / Reliability Testing - Sustaining a load continuously for a longer period and simultaneously maintaining the performance level imparts the endurance and stability quality of a software product. It is used to verify endurance level and system behavior under constant use."
        },
        {
          name:"Scalability Testing - To meet and accommodate the growing needs of constantly increasing users, a software needs to be scalable to ensure hassle free functioning. It provides option to boost performance beyond specifications."
        }
        
      ],

      listHeadingForth:"Security Testing",
      listTitleForth:"Our security testing practice checks for known vulnerabilities and conducts penetration testing to help you discover and fix known security issues. Software Security Testing should be integral part of software development process, and Network, Servers & Infrastructure Security Testing should be part of project role out strategy. Security Testing with right tools, right knowledge & capabilities is what we bring as a value proposition to our clients. Our comprehensive security testing solution for application layer, network layer, server layers and database layer helps in securing software from all levels of vulnerabilities and make it hack proof. Our Security Testing approach ensures compliance to Standards, Best Practices and Regulatory Requirements such as",
      postsForth:[
        {
          name:"Open Web Application Security Project (OWASP) Top 10"
        },
        {
          name:"The Web Application Security Consortium (WASC)"
        },
        {
          name:"Payment Card Industry – Data Security Standards (PCI-DSS)"
        },
        {
          name:"International Standard Organization (ISO) 27001:2005"
        },
        {
          name:"Health Insurance Portability and Accountability Act (HIPPA)"
        },
        {
          name:"Sarbanes-Oxley Act (SOX) / Central Bank Regulations"
        },
        {
          name:"Family Educational Rights and Privacy Act (FERPA)"
        },
        {
          name:"Data Protection Act and many more…"
        }
        
      ],

      listHeadingFifth:"Following is list of our primary focus for security testing:",
      listTitleFifth:null,
      postsFifth:[
        {
          name:"A1 - Injection"
        },
        {
          name:"A2 - Broken authentication and session management"
        },
        {
          name:"A3 - Cross-site scripting"
        },
        {
          name:"A4 - Insecure direct object reference"
        },
        {
          name:"A5 - Security misconfiguration"
        },
        {
          name:"A6 - Sensitive data exposure"
        },
        {
          name:"A7 - Missing function level access control"
        },
        {
          name:"A8 - Cross-site request forgery"
        },
        {
          name:"A9 - Using components with known vulnerabilities: Heartbleed and Shellshock in action"
        },
        {
          name:"A10 - Invalidated redirects and forwards"
        }
        
      ],
    },


    {
      title:"SPECIALIZED TESTING SERVICES",
      isCompetencies:false,
      description:"For Specific Software Needs",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/qa-testing/SPECIALIZED-TESTING-SERVICES.png",
      paraDescriptionFirst:null,
      paraDescriptionSecond:null,
      
      listHeadingFirst:null,
      listTitleFirst:null,
      post:null,

      listHeadingSecond:"Mobile App Testing",
      listTitleSecond:"Mobility has introduced new levels of complexity to QA and Test management that most companies are not prepared for – different technology platforms, different OS’s, different devices - with different specifications like screen size, RAM, CPU, etc., numerous use cases, different network connections and carriers. Mobile, Web & Hybrid apps need to be tested across several permutations and combinations. All in more compressed cycles than ever before. We bring proven & tested approach for this real-world problem - which covers full spectrum of Mobile Testing needs as follow, and how mobile app is behaving in different scenarios / situations,",
      postsSecond:[
        {
          name:"Functional Testing - Validation of functionalities, Regression Testing, Offline Access Testing, Negative Testing"
        },
        {
          name:"Non-Functional Testing - Network Strength / Outage / Recovery, Peripheral Testing, Different Network Types"
        },
        {
          name:"Interrupt - SMS / Voice Interrupt, Battery / Cable Removal, Notifications"
        },
        {
          name:"Memory - Memory Usage, Leaks & Garbage Collection, Review of cache & data storage mechanism"
        },
        {
          name:"App Performance - CPU Usage, Network Usage, Page / Screen / Activity Render Time"
        },
        {
          name:"Usability Testing - User Experience, How easy & convenient"
        },
        {
          name:"Security Testing - OWASP Vulnerabilities, Static Code Analysis, etc."
        },
        {
          name:"Localization Testing - Different languages, currencies, time-zones, images & text"
        },
        {
          name:"Installation, Uninstallation & Updates Testing"
        }
        

      ],

      listHeadingThird:"Game Testing",
      listTitleThird:"Game Testing is a process of verifying quality of game. Game testing is very critical because of different platforms, age groups, different genres, different ways of interaction with users, video / sound effects / etc. Game Testing comprises of -",
      postsThird:[
        {
          name:"Functional Testing"
        },
        {
          name:"Cross-Platform Testing"
        },
        {
          name:"Localization Testing"
        },
        {
          name:"Load Testing"
        }
        
      ],

      listHeadingForth:"E-Governance Testing",
      listTitleForth:"E-Governance Testing is critical because of volume of data, volume of users, different compliances and data security. It comprises of -",
      postsForth:[
        {
          name:"Functional Testing"
        },
        {
          name:"Load & Performance Testing"
        },
        {
          name:"Security Testing"
        },
        {
          name:"Usability Testing"
        },
        {
          name:"Localization Testing"
        },
        {
          name:"Cross-browser Testing (if applicable)"
        },
        {
          name:"Cross-platform Testing (if applicable)"
        }
        
      ],

      listHeadingFifth:"Cross-platform Testing",
      listTitleFifth:"Cross-platform Testing is necessary when software is designed / made to work on different platforms. Cross-platform Testing comprises of -",
      postsFifth:[
        {
          name:"Functional Testing on each platform"
        },
        {
          name:"GUI / Usability Testing on each platform"
        },
        {
          name:"Performance Testing on each platform"
        },
        {
          name:"Security Testing on each platform"
        },
        {
          name:"Installation Testing on each platform"
        },
        {
          name:"Localization Testing on each platform (if applicable)."
        }
        
      ],

      listHeadingSix:"API Testing",
      listTitleSix:"In today's world of Service Oriented Architecture (SOA), it is very crucial that your APIs should work as expected for functionality, reliability, performance and security. Our API testing service will make sure this - whether its APIs / Web Services / Micro Services.",
      postsSix:null,

      listHeadingSeven:"Cross-browser Testing",
      listTitleSeven:"Cross-browser Testing should be an integral part of any web application testing. Nowadays there are so many platforms like Windows, Mac, Linux, Android, iOS - on each platform there are many browsers like Firefox, Chrome, Safari, IE, Opera, Opera Mini, UC Browser, Dolphin, Maxthon, Mercury Browser, Nokia Xpress, etc., each browser has many versions. Elements of web application behave differently on each browser, even on different versions of same browser, differently on each platform - so many combinations need to check to complete Cross-browser Testing. Here, we check HTML / CSS code in each browser, different dynamic operations done by JavaScript, alignments, fonts, layouts in different resolutions, etc. There are few server side checks, which we should test, how web application behaves when interacted from different browsers.",
      postsSeven:null,

      listHeadingEight:"Localization / Globalization Testing",
      listTitleEight:"Localization Testing verifies whether the software is properly translated, and adjusted to local languages and cultures. Localization Testing should be included in software testing process when software is made for more than one language, there should not be wrong translation / absent text / unreadable or meaningless text / characters. Here, we check software user interface and content / text of each language.",
      postsEight:null,
      
      listHeadingNine:"SEO Testing",
      listTitleNine:"Here, we verify both whether website is search engine friendly as well as search engine optimized.In report, we give 2 things -",
      postsNine:[
        {
          name:"Detailed analysis of current state of the website"
        },
        {
          name:"Recommendation for improving current state."
        }
      ],
      moreInfoParaNine:"Due to frequent changes in search engines algorithms, we recommend conducting SEO Testing twice in a year to make sure website maintain good position in different search engines, attract more visitors & convert them into customers."

    },
    
  // four
  {
    title:"TEST AUTOMATION",
    isCompetencies:false,
    description:"Mobile, Web & Cloud",
    imgUrl:"../../../../assets/images/whowearemodule/overview/services/qa-testing/Test-Automation.png",
    paraDescriptionFirst:null,
    paraDescriptionSecond:null,
    
    listHeadingFirst:null,
    listTitleFirst:null,
    post:null,

    listHeadingSecond:null,
    listTitleSecond:"Increased frequencies of online software updates / release cycles of newer software application make “Regression Testing Automation” a must to get it done in minimum time & cost. We have developed a tested & proven approach to test automation that leverages best practices in Agile Testing, Continuous Integration and Test-Driven Development to accelerate your QA / Testing processes and reduce cycle time. Automation testing services consists of:",
    postsSecond:[
      {
        name:"Assessment of automation needs"
      },
      {
        name:"Tool Selection"
      },
      {
        name:"Creating Framework"
      },
      {
        name:"Automated test script creation & execution"
      },
      {
        name:"Creation of regression test suites with flexible execution options"
      },
      {
        name:"Training & handover of test pack for future need & maintenance."
      },
      {
        name:"Reduced Regression Testing Cost & Time"
      },
      {
        name:"Faster Time to market"
      },
      {
        name:"Better quality testing - no human errors"
      },
      {
        name:"Better resource utilization - QA team can focus more on release specific functional testing, instead of repeating same testing"
      },
      {
        name:"Multi-platform testing - Test across different Operating Systems, Devices, and Browsers to ensure smooth operation for all end users"
      }
    ],
    moreInfoParaSecond:"It is recommended to automate the tests that will run many times in course of the project; if tests are to be performed only once then it is not recommended to automate them."


    
  },

    
   
     
  
   
  ];

  ngOnInit() {
  }

}
