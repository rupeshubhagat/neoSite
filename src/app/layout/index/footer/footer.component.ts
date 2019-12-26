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

  @ViewChild('parent',{static:true}) parent:ElementRef;
  // @ViewChild('isChat',{static:true}) isChat:ElementRef;
  // @ViewChild('isShare',{static:true}) isShare:ElementRef;
  @ViewChild('child',{static:true}) child:ElementRef; 
  // @ViewChild('child',{static:true}) child:ElementRef; 

  constructor() { }
 
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
