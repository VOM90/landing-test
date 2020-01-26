import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageFrontComponent} from './page-front/page-front.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: '' , component: AppComponent , children : [
      {path: '', component: PageFrontComponent},
      {path: 'case-studies', component: PageFrontComponent},
      {path: 'services', component: PageFrontComponent},
      {path: 'expertise', component: PageFrontComponent},
      {path: 'about', component: PageFrontComponent},
      {path: 'contact', component: PageFrontComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
