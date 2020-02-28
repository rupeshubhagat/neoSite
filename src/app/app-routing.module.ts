import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path:'',
    redirectTo:'index',
    pathMatch:'full'
  }
  ,
  {
    path:'**',
    redirectTo:'pagenotfound',
    pathMatch:'full'
  }
  // { 
  //   path: 'index',
  //   loadChildren: () => import(`./layout/index/index.module`).then(d =>d.IndexModule)
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{scrollPositionRestoration: 'enabled'})],
  //, { scrollPositionRestoration: 'enabled'})
  exports: [RouterModule]
})
export class AppRoutingModule { }
