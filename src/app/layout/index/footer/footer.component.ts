import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isShow:boolean =false;
  text:string = "Share & Save";
  // isContact:boolean;
  // isShare:boolean;

  isChat:boolean = false;
  isShare:boolean = false;

  whatWeDoUl:boolean = true;
  WeWorkWithUl:boolean = true;
  technologyUl:boolean = true;
  enterpriseSolUl:boolean = true;
  whoWeAreUl:boolean = true;
  quickLinksUl:boolean = true;

  @ViewChild('parent',{static:true}) parent:ElementRef;
  // @ViewChild('isChat',{static:true}) isChat:ElementRef;
  // @ViewChild('isShare',{static:true}) isShare:ElementRef;
  @ViewChild('child',{static:true}) child:ElementRef; 
  // @ViewChild('child',{static:true}) child:ElementRef; 
  year = new Date().getFullYear();

  constructor() { }
 
 //Footer Heading Clicks Events
 footerWhatWeDo(){
  this.whatWeDoUl = !this.whatWeDoUl; 
 }
 footerWeWorkWith(){
  this.WeWorkWithUl = !this.WeWorkWithUl; 
 }
 footerTechnology(){
  this.technologyUl = !this.technologyUl; 
 }
 footerEnterpriceSol(){
  this.enterpriseSolUl = !this.enterpriseSolUl; 
 }
 footerWhoWeAre(){
  this.whoWeAreUl = !this.whoWeAreUl; 
 }
 footerQuickLinks(){
  this.quickLinksUl = !this.quickLinksUl; 
 }
 
 //Footer Heading Clicks Events ends

  changeChatIcon(){
    this.isChat = ! this.isChat;
    this.isShare = false;
    console.log("chat icon");
  }
  
  changeShareIcon(){
   this.isShare =! this.isShare;
   this.isChat = false;
  }
  closeCancelIcon(){
  //  console.log("Close footer working");
  this.isChat = false;
  this.isShare = false;
  }

  ngOnInit() {
    // this.isChat.nativeElement.style.visibility = "hidden";
    // this.child.nativeElement.style.visibility = "hidden";
    this.parent.nativeElement.style.opacity = "0";
  }

  onChatHover(){
    // this.child.nativeElement.style.visibility = "visible";
    this.parent.nativeElement.style.opacity = "1";
    this.text = "Contact Us";
  }

  onChatLeave(){
    // this.child.nativeElement.style.visibility = "hidden";
    this.parent.nativeElement.style.opacity = "0";
  }

  onShareHover(){
    // this.child.nativeElement.style.visibility = "visible";
    this.parent.nativeElement.style.opacity = "1";
    this.text = "Share & Save";
  }

  onShareLeave(){
    // this.child.nativeElement.style.visibility = "hidden";
    this.parent.nativeElement.style.opacity = "0";
  }

}
