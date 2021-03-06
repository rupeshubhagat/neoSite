import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ClickOutsideModule } from 'ng-click-outside';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { FulljsComponent } from './fulljs/fulljs.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, IndexComponent, FulljsComponent, PagenotfoundComponent, ContactusComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MaterialModule,
    ClickOutsideModule,
    CarouselModule,
    AngularFullpageModule,
    ScrollToModule.forRoot(),
    ReactiveFormsModule,
    AngularMultiSelectModule
  ],
  exports: [HeaderComponent, FooterComponent, IndexComponent, FulljsComponent,PagenotfoundComponent,ContactusComponent]
})
export class IndexModule { }
