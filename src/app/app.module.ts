import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { ClickOutsideModule } from 'ng-click-outside';
import { IndexModule } from './layout/index/index.module';
import { WhoWeAreModule } from './layout/who-we-are/who-we-are.module';
import { TechnologyModule } from './layout/technology/technology.module';
import { WhatWeDoModule } from './layout/what-we-do/what-we-do.module';
import { WeWorkWithModule } from './layout/we-work-with/we-work-with.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    WhoWeAreModule,
    TechnologyModule,
    WhatWeDoModule,
    WeWorkWithModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ClickOutsideModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
