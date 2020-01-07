import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { FulljsComponent } from './fulljs/fulljs.component';


const routes: Routes = [
  
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  }
  // {
  //   path: 'footer',
  //   component: FooterComponent
  // },
  // {
  //   path: 'fulljs',
  //   component: FulljsComponent
  // }


];

@NgModule({
  imports: [RouterModule.forChild(routes), ModalModule.forRoot()],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
