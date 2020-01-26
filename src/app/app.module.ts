import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageFrontComponent } from './page-front/page-front.component';
import { MainContentComponent } from './page-front/main-content/main-content.component';
import { PromoTextComponent } from './page-front/promo-text/promo-text.component';
import { HeaderComponent } from './page-front/header/header.component';
import { FooterComponent } from './page-front/footer/footer.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageCaseStudiesComponent } from './page-case-studies/page-case-studies.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageExpertiseComponent } from './page-expertise/page-expertise.component';
import { PageServicesComponent } from './page-services/page-services.component';
import { NavMenuComponent } from './page-front/header/nav-menu/nav-menu.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './page-front/main-content/about-us/about-us.component';
import { TabItemsComponent } from './page-front/main-content/tab-items/tab-items.component';
import { FooterSocialsComponent } from './page-front/footer/footer-socials/footer-socials.component';
import { FooterMenuComponent } from './page-front/footer/footer-menu/footer-menu.component';
import { FooterInfoComponent } from './page-front/footer/footer-info/footer-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PageFrontComponent,
    MainContentComponent,
    PromoTextComponent,
    HeaderComponent,
    FooterComponent,
    PageAboutComponent,
    PageCaseStudiesComponent,
    PageContactComponent,
    PageExpertiseComponent,
    PageServicesComponent,
    NavMenuComponent,
    AboutUsComponent,
    TabItemsComponent,
    FooterSocialsComponent,
    FooterMenuComponent,
    FooterInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
