import { Component } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
//private router: Router
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'neosofttech';
  constructor() { }

  ngOnInit() {
    // this.router.events.subscribe((evt) => {
    //     if (!(evt instanceof NavigationEnd)) {
    //         return;
    //     }
    //     window.scrollTo(0, 0)
    // });
 }
}
