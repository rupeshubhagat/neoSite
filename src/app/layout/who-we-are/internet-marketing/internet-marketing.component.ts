import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet-marketing',
  templateUrl: './internet-marketing.component.html',
  styleUrls: ['./internet-marketing.component.scss']
})
export class InternetMarketingComponent implements OnInit {

  constructor() { }

  product:any[] =[
    {
      title:"SEO",
      isCompetencies:false,
      description:"Search Engine Optimization - Google, Bing & Yahoo",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/internet-marketing/SEO.png",
      paraDescriptionFirst:"Search engine optimization (SEO) is the practice of increasing the quantity and quality of traffic to your website through organic search engine results.",
      paraDescriptionSecond:null,
      listTitleFirst:null,
      listTitleSecond:null,
      listTitleThird:null,
      listHeadingFirst:null,
      listHeadingSecond:"The SEO related services we provide include:",
      posts:null,
      postsSecond:[
        {
          name:"Keyword Research: Identifying and selecting keywords based on a variety of criteria including popularity, relevance, search patterns, competition and other factors."
        },
        {
          name:"Information Architecture: Spotting any technical deficiencies in a website that may adversely affect website ranking. These include URL structures, navigation, HTML codes, design, cross-device performance and even server configuration."
        },
        {
          name:"Related Content Creation and Copywriting"
        },
        {
          name:"On-page Optimization: Optimizing the page-level elements like content, page’s meta-information, image optimization, sitemap management, and internal & external link management."
        },
        {
          name:"Link Building: Build related links (with impact) using search engines' approved and recommended methods"
        },
        {
          name:"Directory Submission: Submit your site to general and targeted directories in your business category / industry"
        },
        {
          name:"Press Releases: Write search engine friendly press release(s), and submit to targeted and premier news outlets"
        },
        {
          name:"Social Media: Establish profiles, pages in top social media sites such as Facebook, Linked-In, Twitter, etc., and utilizing the power of social media to gather endorsements."
        },
        {
          name:"Reporting and Analysis: Monitoring and reporting based on traffic stats, user browsing trends, goal / objective tracking, etc."
        }
      ]
    },
    
    {
      title:"SEM",
      isCompetencies:false,
      description:"Search Engine Marketing (Google, Bing, Facebook & Linked-In)",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/internet-marketing/SEM.png",
      paraDescriptionFirst:"Search engine marketing (SEM) is a form of Internet marketing that involves the promotion of websites by increasing their visibility in search engine results pages (SERPs) primarily through paid advertising. If you have a website that is not ranked for your business / services / products keywords on search engines or if you are running any kind of campaign for which you want to realize instant traffic to your website, then paid advertising is quick and instant solution that you should look for. Paid search marketing or paid advertising provides an unsurpassed opportunity for your business to reach a targeted audience who are interested in very specific and relevant information.",
      paraDescriptionSecond:null,
      listHeadingFirst:null,
      listHeadingSecond:"How it works?",
      listHeadingThird:null,
      listTitleFirst:null,
      listTitleSecond:"Based on the targeted audience and your desired campaign, our SEM experts identify a relevant campaign strategy, set out timelines, manage budgets and run A/B tests to maximize your campaign goals. Our campaign strategy encompasses different advertisement formats including:",
      listTitleThird:"Our campaign experts would guide you through the process of changing / replacing keywords and arriving at an optimum set of keywords that would maximize your ROI.We help you create and activate the campaigns on the world’s leading ad networks including:",
      posts:null,
      postsSecond:[
        {
          name: "Text Advertising"
        },
        {
          name: "Display Advertising"
        },
        {
          name: "Mobile Advertising"
        },
        {
          name:"Social Media Advertising"
        }
        
      ],
      postsThird:[
        {
          name:"Google AdWords",
        },
        {
          name:"Bing Ads",
        },
        {
          name:"Facebook Ad Platform",
        },
        {
          name:"Linked-In Ad Platform",
        }
      ],
      
    },
    {
      title:"SMO",
      isCompetencies:false,
      description:"Social Media Optimization",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/internet-marketing/SMO.png",
      paraDescriptionFirst:"We have moved on from Social Media 1.0, which was the era of having profiles and pages setup on Social Media platforms and replicating the same content that brands used to push on other ATL and BTL channels. Now, it is Social Media 2.0 where customers are put off by advertisements, they want to see content that they are interested in. They have the power to switch off content that they do not wish to see.",
      paraDescriptionSecond:"We have invested lot of time & effort in research, and understood what works on social media after executing hundreds of campaigns for different brands. So, by keeping customers at the forefront, we focus on creating content which is interesting, engaging & influencing the users. We help you with - Understanding your social media goals, defining target audience, creating exceptional content / strategy which can get people hooked to your brand.",
      listHeadingSecond:"Our SMO services includes:",
      listTitleFirst:null,
      listTitleSecond:null,
      listTitleThird:null,
      postsSecond:[
        {
          name:"Social Media Page Management",
          
        },
        {
          name:"Social Media Campaigns",
          
        },
        {
          name:"Influencer Marketing",
          
        },
        {
          name:"Social Listening"
        },
        {
          name:"Video Campaigns"
        }

      ],
      posts:null,
      postsThird:null
    },
    {
      title:"CONTENT WRITING",
      isCompetencies:false,
      description:"Make the prospect a more informed buyer with content",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/internet-marketing/Content-Writing.png",
      paraDescriptionFirst:"Our content writing services fits for all media types including websites, brochures, flyers and other marketing materials. We focus on delivering content for your medium, targeting end clients and produce the exact answers what they seek. Our broad ranged experience in offering copywriting and will help you with all categories of copy writing needs, we provide affordable and top-notch content development services.",
      paraDescriptionSecond:null,
      listHeadingSecond:null,
      listTitleFirst:null,
      listTitleSecond:null,
      listTitleThird:null,
      postsSecond:null,
      posts:null,
      postsThird:null
    },
    {
      title:"ONLINE REPUTATION MANAGEMENT",
      isCompetencies:false,
      description:"Social Media Optimization",
      imgUrl:"../../../../assets/images/whowearemodule/overview/services/internet-marketing/Online-Reputation-Management.png",
      paraDescriptionFirst:"Social Media is two-way communication platform. Here, you create content & share, on the other side, your audience will share their views and opinions about you, your services / products. As Social Media has given a voice to people, it has become very important for brands to listen to the voice of the customer all the time, and control it before it damages your reputation.",
      paraDescriptionSecond:"A single angry / dissatisfied customer speaking negatively about you can cause a lot of damage to your reputation, as on social media, content snowballs and gathers momentum very quickly. And if you are not proactively listening to your customers online then things will get out of hand soon.If you are a brand / company that caters to masses and have a nationwide or worldwide presence, then social listening becomes even more important because of the sheer volume of conversation that takes place. We understand how important Social Listening and Reputation Management are for the success of your brand.",
      listHeadingSecond:"How do we execute?",
      listTitleFirst:null,
      listTitleSecond:null,
      listTitleThird:null,
      postsSecond:[
        {
          name:"We use different online tools to listen to customer conversations all the time whenever / whatever they discuss about you, your products / services",
          
        },
        {
          name:"We take part in such conversations, and try to salvage situation / protect reputation",
          
        },
        {
          name:"If there is a disgruntled customer, we will pass details to your customer services team who can take it up on priority",
          
        },
        {
          name:"We reply to comments on your social media pages and profiles"
        },
        {
          name:"If a customer enquiries about your products / services, we immediately pass it to your sales team"
        }

      ],
      posts:null,
      postsThird:null
    }
  ];

  ngOnInit() {
  }

}
