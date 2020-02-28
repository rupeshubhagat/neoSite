import { Injectable } from '@angular/core';
import { ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService {
  frag:string;
  constructor(private _scrollToService: ScrollToService ) { }

  public triggerScrollTo(fragment) {
    this.frag = fragment;
    // /**
    //  * @see NOTE:1
    //  */
    const config: ScrollToConfigOptions = {
      // container: 'custom-container',
      target: this.frag ,
      // duration: 650,
      // easing: 'easeOutElastic',
      offset: 20
    };
 
    return this._scrollToService.scrollTo(config);
  }
  scrollTo(config: import("@nicky-lenaers/ngx-scroll-to/lib/scroll-to-config.interface").ScrollToConfigOptionsTarget) {
    throw new Error("Method not implemented.");
  }

}
