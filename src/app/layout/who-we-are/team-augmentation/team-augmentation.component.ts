import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-augmentation',
  templateUrl: './team-augmentation.component.html',
  styleUrls: ['./team-augmentation.component.scss']
})
export class TeamAugmentationComponent implements OnInit {

  constructor() { }
  products: any[] = [
    {
      title:"MICROSOFT TECHNOLOGIES",
      description: "ASP.NET, ASP.NET MVC, C#, VB.NET, WCF, WPF, Web API, MS Azure, MS Silverlight, etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/microsoft.jpg",
      posts: [
        {
          name: "Hire ASP.NET Developers",
          path: '/'
          // path:'/index/'
        },
        {
          name: "Hire DotNetNuke Developers",
          path: '/'
        },
        {
          name: "Hire AspDotNetStorefront Developers",
          path: '/'
        },
        {
          name: "Hire nopCommerce Developers",
          path: '/'
        },
        {
          name: "Hire Microsoft Dynamics Developers",
          path: '/'
        },
        {
          name: "Hire SharePoint Developers",
          path: '/'
        }
      ]
    },
    {
      title:"Open Source Technologies",
      description: "PHP, Java, ROR, Perl, Node.js, etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/op.jpg",
      posts: [
        {
          name: "Hire PHP Developers",
          path: '/'
        },
        {
          name: "Hire Codeigniter Developers",
          path: '/'
        },
        {
          name: "Hire JAVA Developers",
          path: '/'
        },
        {
          name: "Hire Symfony Developers",
          path: '/'
        },
        {
          name: "Hire Ruby on Rails Developers",
          path: '/'
        },
        {
          name: "Hire Drupal Developers",
          path: '/'
        },
        {
          name: "Hire Python Developers",
          path: '/'
        },
        {
          name: "Hire Wordpress Developers",
          path: '/'
        },
        {
          name: "Hire Coldfusion Developers",
          path: '/'
        },
        {
          name: "Hire Joomla Developers",
          path: '/'
        },
        {
          name: "Hire Zend Developers",
          path: '/'
        },
        {
          name: "Hire Typo3 Developers",
          path: '/'
        },
        {
          name: "Hire Cakephp Developers",
          path: '/'
        },
        {
          name: "Hire Magento Developers",
          path: '/'
        },
        {
          name: "Hire Yii Developers",
          path: '/'
        },
        {
          name: "Hire OsCommerce Developers",
          path: '/'
        },
        {
          name: "Hire Laravel Developers",
          path: '/'
        },
        {
          name: "Hire Node.js Developers",
          path: '/'
        }
      ]
    },

    {
      title:"JAVA TECHNOLOGIES",
      description: "Java / J2EE, JSP / Servlet, Spring, Struts, Hibernate, Maven, JSF, GWT, Play, Vaadin, GRAILS, etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/java.jpg",
      posts: [
        {
          name: "Hire JAVA Developers",
          path: '/'
          // path:'/index/'
        },
        {
          name: "Hire JSF Developers",
          path: '/'
        },
        {
          name: "Hire Spring Developers",
          path: '/'
        },
        {
          name: "Hire Liferay Developers",
          path: '/'
        },
        {
          name: "Hire Spring Developers",
          path: '/'
        },
        {
          name: "Hire Strut Developers",
          path: '/'
        }
      ]
    },
    {
      title:"MOBILE TECHNOLOGIES",
      description: "iOS, Android, Windows, Phonegap, Ionic, Xamarin, React Native, Appcelerator Titanium, etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/mobile.jpg",
      posts: [
        {
          name: "Hire iOS Developers",
          path: '/'
          // path:'/index/'
        },
        {
          name: "Hire PhoneGap Developers",  
          path: '/'
        },
        {
          name: "Hire Android Developers",
          path: '/'
        },
        {
          name: "Hire Appcelerator Titanium Developers",
          path: '/'
        },
        {
          name: "Hire Windows Developers",
          path: '/'
        },
        {
          name: "Hire Xamarin Developers",
          path: '/'
        }
      ]
    },
    {
      title:"UX/UI OR FRONTEND TECHNOLOGIES",
      description: "HTML / CSS, Javascript / Jquery, Bootstrap, Sass, AngularJS, React, Vue.js, Adobe Photoshop, Adobe Illustrator, Corel Draw, Flash / Flex, etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/frontend.jpg",
      posts: [
        {
          name: "Hire Frontend Developers",
          path: '/'
          // path:'/index/'
        },
        {
          name: "Hire Angular JS Designers",  
          path: '/'
        },
        {
          name: "Hire Knockout Developers",
          path: '/'
        },
        {
          name: "Hire HTML 5 Developers",
          path: '/'
        },
        {
          name: "Hire Backbone.js Developers",
          path: '/'
        },
        {
          name: "Hire Node.js Developers",
          path: '/'
        }
      ]
    },
    {
      title:"DATABASE TECHNOLOGIES",
      description: "Oracle, MS SQL, MySQL, PostgreSQL, Hadoop, MongoDB, Neo4j, SqlLite, etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/database.jpg",
      posts: [
        {
          name: "Hire Database Developers",
          path: '/'
          // path:'/index/'
        },
        {
          name: "Hire Database Admininstrator",  
          path: '/'
        }
      ]
    },
    {
      title:"BIG DATA & ANALYTICS",
      description: "Tableau, QlikView, Pentaho, Informatica, mongoDB, Hadoop, Apache CouchDB, Apache Cassandra, Apache Storm, Apache HBase, Apache Spark, Hive, etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/big-data.jpg",
      posts: [
        {
          name: "Comming Soon",
          path: ''
          // path:'/index/'
        }
       
      ]
    },
    {
      title:"INTERNET OF THINGS",
      description: "Azure IoT Suite, AWS IoT, IBM - Watson IoT, Google - Cloud IoT Core, Alljoyn, Weave, Thread, Kaa, Losant, Tessel, PlatformIO, etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/internet-of-things.jpg",
      posts: [
        {
          name: "Comming Soon",
          path: ''
          // path:'/index/'
        }
       
      ]
    },
    {
      title:"BLOCKCHAIN TECHNOLOGY  ",
      description: "Bitcoin, Ethereum, Hyperledeger, Multichain, Fabric, Sawtooth, Corda, Parity, Exonum, NXT, R3, etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/blockchain-technology.jpg",
      posts: [
        {
          name: "Comming Soon",
          path: ''
          // path:'/index/'
        }
       
      ]
    },
    {
      title:"DEVOPS",
      description: "Kubernetes, Docker, Jenkins, Puppets, Vagrant, Ansible, Gradle, Bamboo, Nagios",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/banner.jpg",
      posts: [
        {
          name: "Comming Soon",
          path: ''
          // path:'/index/'
        }
       
      ]
    },
    {
      title:"SAP TECHNOLOGY",
      description: "ECC, HANA, BASIS, NetWeaver, Business Object, BI/BW, ABAP",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/sap.jpg",
      posts: [
        {
          name: "Comming Soon",
          path: ''
          // path:'/index/'
        }
       
      ]
    },
    {
      title:"AI & ML TECHNOLOGY",
      description: "Python, R, Java, Lisp, Prolog, TensorFlow, Keras, Pytorch, Theano, Sklearn, Lasagna, Tflearn, OpenCV",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/banner.jpg",
      posts: [
        {
          name: "Comming Soon",
          path: ''
          // path:'/index/'
        }
       
      ]
    },
    {
      title:"Customer Relationship Management (CRM)",
      description: "Sugarcrm, Vtiger, Salesforce, Microsoft Dynamics, etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/crm.jpg",
      posts: [
        {
          name: "Hire SugarCRM Developers",
          path: '/'
          // path:'/index/'
        },
        {
          name: "Hire Salesforce Developers",  
          path: '/'
        },
        {
          name: "Hire Vtiger Developers",
          path: '/'
        },
        {
          name: "Hire Microsoft Dynamics Developers",
          path: '/'
        }
        
      ]
    },
    {
      title:"Ecommerce Solution",
      description: "Magento, Oscommerce, ASP.NET Storefront, Nopcommerce , etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/ecommerce.jpg",
      posts: [
        {
          name: "Hire Magento Developers",
          path: '/'
          // path:'/index/'
        },
        {
          name: "Hire AspDotNetStorefront Developers",  
          path: '/'
        },
        {
          name: "Hire OsCommerce Developers",
          path: '/'
        },
        {
          name: "Hire nopCommerce Developers",
          path: '/'
        }
        
      ]
    },  
    {
      title:"Content Management System (CMS)",
      description: "Drupal, Wordpress, Joomla, Typo3, DotNetNuke, etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/cms.jpg",
      posts: [
        {
          name: "Hire Drupal Developers",
          path: '/'
          // path:'/index/'
        },
        {
          name: "Hire Typo3 Developers",  
          path: '/'
        },
        {
          name: "Hire DotNetNuke Developers",
          path: '/'
        },
        {
          name: "Hire Joomla Developers",
          path: '/'
        }
        
      ]
    }, 

    {
      title:"Enterprise Resource Planning (ERP)",
      description: "Sharepoint , Liferay, etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/erp.jpg",
      posts: [
        {
          name: "Hire SharePoint Developers",
          path: '/'
          // path:'/index/'
        },
        {
          name: "Hire Liferay Developers",  
          path: '/'
        }
      
        
      ]
    }, 
    {
      title:"Testing",
      description: "Functional Testing, Test Automation, Security Testing, Performance Testing, GUI Usability Testing, User Acceptance Testing, Mobile Testing, Cross-Browser Testing, Game Testing, etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/testing.jpg",
      posts: [
        {
          name: "Hire a Tester",
          path: '/'
          // path:'/index/'
        },
        {
          name: "Hire Liferay Developers",  
          path: '/'
        }
      
        
      ]
    }, 
    {
      title:"other",
      description: "SEO, PPC, SMO, Content Writer, etc.",
      open:false,
      imgUrl:"../../../../assets/images/whowearemodule/competencies/seo.jpg",
      posts: [
        {
          name: "Hire SEO Professionals",
          path: '/'
          // path:'/index/'
        },
        {
          name: "Hire SMO Professionals",  
          path: '/'
        },
        {
          name: "Hire PPC Professionals",
          path: '/'
          // path:'/index/'
        },
        {
          name: "Content Writer",  
          path: '/'
        }
      ]
    }, 
  ]

  ngOnInit() {
  }

}
