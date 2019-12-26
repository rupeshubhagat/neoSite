import { Component, OnInit, ViewEncapsulation, HostListener, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  isLang: boolean = false;
  isSearch: boolean = false;
  isAccount: boolean = false;

  isCountry: boolean = false;
  isIcon: boolean = true;

  isWhoWeAre: boolean = false;
  isWhatWeDo: boolean = false;
  isWeWorkWith: boolean = false;
  isTechnology: boolean = false;


  caretDown: string = "fa fa-caret-down";
  caretUp: string = "fa fa-caret-up";

  angleDown: string = "fa fa-angle-down";
  angleUp: string = "fa fa-angle-up";
  close: string = "fa fa-times";
  public iconWhoWeAre = 'fa fa-angle-down';
  public iconWhatWeDo = 'fa fa-angle-down';
  public iconWeWorkWith = 'fa fa-angle-down';
  public iconTechnology = 'fa fa-angle-down';

  isActive: boolean = false;
  isCheck: boolean = false;

  // showBox = true;
  // public text: String;
  // @HostListener('document:click', ['$event'])
  // clickout(event) {
  //   if(this.eRef.nativeElement.contains(event.target)) {
  //     // this.text = "clicked inside";
  //     // this.isLang = true;
  //   } else {  
  //     this.text = "clicked outside";
  //     this.isLang = true;
  //   }
  // }


  constructor(private eRef: ElementRef) { }

  // onClickedOutside(event) {
  //   // this.showBox = false;
  //   if(event && event['value'] === true) {
  //    this.isLang = false;
  //   } else {
  //     this.isLang = true;
  //   }

  // }
  // onClickedOutside(e: Event) {
  //   this.isLang = false;
  // }
  // onClickedOutside(e: Event) {
  //   console.log('Clicked outside:', e);
  //   // alert("Click outside");
  //   if(this.isLang){

  //   }


  // }

  whoWeAre() {
    this.isWhoWeAre = !this.isWhoWeAre;
    this.isWhatWeDo = false;
    this.isWeWorkWith = false;
    this.isTechnology = false;

    this.iconWhatWeDo = 'fa fa-angle-down';
    this.iconWeWorkWith = 'fa fa-angle-down';
    this.iconTechnology = 'fa fa-angle-down';
    if (this.iconWhoWeAre === 'fa fa-angle-down') {
      this.iconWhoWeAre = "fa fa-times";
    } else {
      this.iconWhoWeAre = 'fa fa-angle-down';
    }

  }

  whatWeDo() {
    this.isWhatWeDo = !this.isWhatWeDo;
    this.iconWhoWeAre = 'fa fa-angle-down';
    this.iconWeWorkWith = 'fa fa-angle-down';
    this.iconTechnology = 'fa fa-angle-down';
    this.isWhoWeAre = false;
    this.isWeWorkWith = false;
    this.isTechnology = false;

    if (this.iconWhatWeDo === 'fa fa-angle-down') {
      this.iconWhatWeDo = 'fa fa-times';
    } else {
      this.iconWhatWeDo = 'fa fa-angle-down';
    }
  }

  weWorkWith() {
    this.isWeWorkWith = !this.isWeWorkWith;
    this.isWhoWeAre = false;
    this.isWhatWeDo = false;
    this.isTechnology = false;

    this.iconWhoWeAre = 'fa fa-angle-down';
    this.iconWhatWeDo = 'fa fa-angle-down';
    this.iconTechnology = 'fa fa-angle-down';

    if (this.iconWeWorkWith === 'fa fa-angle-down') {
      this.iconWeWorkWith = 'fa fa-times';
    } else {
      this.iconWeWorkWith = 'fa fa-angle-down';
    }
  }
  technologly() {
    this.isTechnology = !this.isTechnology;
    this.isWhoWeAre = false;
    this.isWhatWeDo = false;
    this.isWeWorkWith = false;
    this.iconWhoWeAre = 'fa fa-angle-down';
    this.iconWhatWeDo = 'fa fa-angle-down';
    this.iconWeWorkWith = 'fa fa-angle-down';

    if (this.iconTechnology === 'fa fa-angle-down') {
      this.iconTechnology = 'fa fa-times';
    } else {
      this.iconTechnology = 'fa fa-angle-down';
    }
  }

  //Languages
  openLang() {
    this.isLang = true;
    this.isSearch = false;
    this.isAccount = false;
    this.isCountry = false;
  }
  closeLang() {
    this.isLang = false;
  }

  //Search
  openSearch() {
    this.isSearch = true;
    this.isLang = false;
    this.isAccount = false;
    this.isCountry = false;
    this.isActive = true;
  }
  closeSearch() {
    this.isSearch = false;
  }

  //Account
  openAccount() {
    this.isAccount = true;
    this.isLang = false;
    this.isSearch = false;
    this.isCountry = false;
  }
  closeAccount() {
    this.isAccount = false;
  }

  // Country
  openCountry() {
    this.isIcon = false;
    this.isCountry = true;

    this.isLang = false;
    this.isAccount = false;
    this.isSearch = false;

  }
  closeCountry() {
    this.isIcon = true;
    this.isCountry = false;
    
  }
  closeTopList(){
    // alert("I am closing top bar");
    // this.isLang = false;
    // this.isSearch = false;
    // this.isAccount = false;
    // this.isCountry = false;
    // this.isIcon = false;
    this.closeAccount();
    this.closeLang();
    this.closeSearch();
    this.closeCountry();
    // this.isCountry = false;
    // this.isCountry = !this.isCountry;
  }
  // closeTopListBar(){
  //   // alert("I am closing top bar");
  //   // this.isLang = ! this.isLang;
  //   // this.isSearch = ! this.isSearch;
  //   // this.isAccount = ! this.isAccount;
  //   // this.isCountry = ! this.isCountry;
  //   // this.isIcon = ! this.isIcon;
  //   // if(this.isLang){ 
  //   //   //alert("Working");
  //   //   this.isLang = true;
  //   // }
  //   // else{
  //   //   this.isLang = false;
  //   // }
  //   // this.isLang =! this.isLang;
  //   // this.closeAccount();
  //   // this.closeLang();
  //   // this.closeSearch();
  //   // this.closeCountry();
  //   // this.isCountry = false;
  //   // this.isCountry = !this.isCountry;
  // }



  ngOnInit() {

    // $('button').click(function () {
    //   alert("I am sign in");
    // });
    //   $(function() {
    //     $('#dialogdiv').dialog({
    //       modal: true,
    //         open:function() {
    //             $(".ui-widget-overlay").click(function() {
    //                 $('#dialogdiv').dialog('close');
    //             });
    //         }
    //     });
    // });
    //   $('#dialogdiv').click(function() {
    //    alert("adsk");
    //    console.log("working");
    //  });
    // $('#clkMee').on('click', function(event) {
    //           if ($(event.target).closest("#div1").length == 0) {
    //               $("#div1").hide();
    //           }
    //       });
    // $(".language").click(function(e) {
    // e.preventDefault();
    // this.isLang = true;
    // if (this.isLang) {
    //   $(".isLangActive").fadeIn(300, function () {
    //     $(this).focus();
    //   });
    // }
  //   $(".isLangActive").on('blur',function(){
  //     $(this).fadeOut(300);
  //  }); 
  


    //  });



  }
}