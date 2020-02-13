import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directories',
  templateUrl: './directories.component.html',
  styleUrls: ['./directories.component.scss']
})
export class DirectoriesComponent implements OnInit {

  constructor() { }
  
  blogs:any[];


  ngOnInit() {
    this.blogs= [
    {
      id:1,
      blogDate:"01 April 2019",
      blogTitle:"What Is Vulnerability Assessment and Penetration Testing? (VAPT)",
      blogImage:"../../../../assets/images/whowearemodule/blogs/VAPT-important-thum.jpg",
      blogImageAlt:"VAPT-important-thum",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    },
    {
      id:2,
      blogDate:"01 April 2019",
      blogTitle:"Tech Startups – An Irresistible Proposal",
      blogImage:"../../../../assets/images/whowearemodule/blogs/Tech-Startups-thumbnail.png",
      blogImageAlt:"Tech-Startups-thumbnail",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    },
    {
      id:3,
      blogDate:"01 April 2019",
      blogTitle:"How Salesforce Developer can Improve Your Business Productivity",
      blogImage:"../../../../assets/images/whowearemodule/blogs/salesforce-thumbnail.png",
      blogImageAlt:"salesforce-thumbnail",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    },
    {
      id:4,
      blogDate:"01 April 2019",
      blogTitle:"What Is Vulnerability Assessment and Penetration Testing? (VAPT)",
      blogImage:"../../../../assets/images/whowearemodule/blogs/VAPT-important-thum.jpg",
      blogImageAlt:"VAPT-important-thum",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    },
    {
      id:5,
      blogDate:"01 April 2019",
      blogTitle:"Tech Startups – An Irresistible Proposal",
      blogImage:"../../../../assets/images/whowearemodule/blogs/Tech-Startups-thumbnail.png",
      blogImageAlt:"Tech-Startups-thumbnail",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    },
    {
      id:6,
      blogDate:"01 April 2019",
      blogTitle:"How Salesforce Developer can Improve Your Business Productivity",
      blogImage:"../../../../assets/images/whowearemodule/blogs/salesforce-thumbnail.png",
      blogImageAlt:"salesforce-thumbnail",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    },
    {
      id:7,
      blogDate:"01 April 2019",
      blogTitle:"What Is Vulnerability Assessment and Penetration Testing? (VAPT)",
      blogImage:"../../../../assets/images/whowearemodule/blogs/VAPT-important-thum.jpg",
      blogImageAlt:"VAPT-important-thum",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    },
    {
      id:8,
      blogDate:"01 April 2019",
      blogTitle:"Tech Startups – An Irresistible Proposal",
      blogImage:"../../../../assets/images/whowearemodule/blogs/Tech-Startups-thumbnail.png",
      blogImageAlt:"Tech-Startups-thumbnail",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    },
    {
      id:9,
      blogDate:"01 April 2019",
      blogTitle:"How Salesforce Developer can Improve Your Business Productivity",
      blogImage:"../../../../assets/images/whowearemodule/blogs/salesforce-thumbnail.png",
      blogImageAlt:"salesforce-thumbnail",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    },
    {
      id:10,
      blogDate:"01 April 2019",
      blogTitle:"How Salesforce Developer can Improve Your Business Productivity",
      blogImage:"../../../../assets/images/whowearemodule/blogs/salesforce-thumbnail.png",
      blogImageAlt:"salesforce-thumbnail",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    },
    {
      id:11,
      blogDate:"01 April 2019",
      blogTitle:"What Is Vulnerability Assessment and Penetration Testing? (VAPT)",
      blogImage:"../../../../assets/images/whowearemodule/blogs/VAPT-important-thum.jpg",
      blogImageAlt:"VAPT-important-thum",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    },
    {
      id:12,
      blogDate:"01 April 2019",
      blogTitle:"Tech Startups – An Irresistible Proposal",
      blogImage:"../../../../assets/images/whowearemodule/blogs/Tech-Startups-thumbnail.png",
      blogImageAlt:"Tech-Startups-thumbnail",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    },
    {
      id:13,
      blogDate:"01 April 2019",
      blogTitle:"How Salesforce Developer can Improve Your Business Productivity",
      blogImage:"../../../../assets/images/whowearemodule/blogs/salesforce-thumbnail.png",
      blogImageAlt:"salesforce-thumbnail",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    },
    {
      id:14,
      blogDate:"01 April 2019",
      blogTitle:"What Is Vulnerability Assessment and Penetration Testing? (VAPT)",
      blogImage:"../../../../assets/images/whowearemodule/blogs/VAPT-important-thum.jpg",
      blogImageAlt:"VAPT-important-thum",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    },
    {
      id:15,
      blogDate:"01 April 2019",
      blogTitle:"Tech Startups – An Irresistible Proposal",
      blogImage:"../../../../assets/images/whowearemodule/blogs/Tech-Startups-thumbnail.png",
      blogImageAlt:"Tech-Startups-thumbnail",
      blogDescription:"Vulnerability Assessment and Penetration Testing (VAPT) is a security testing method which identifies the security bugs in a software program, a computer network, a server or a system infrastructure. Since both tests serve a different purpose, they are often misunderstood as 2 different test...."
    }
  ];
  }

}
