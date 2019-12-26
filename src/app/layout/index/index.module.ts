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



@NgModule({
  declarations: [HeaderComponent, FooterComponent, IndexComponent, FulljsComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MaterialModule,
    ClickOutsideModule,
    CarouselModule,
    AngularFullpageModule
  ]
})
export class IndexModule { }
