import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AboutUs, Copyright, PromoText, Promo, Menu, SocialLinks, Tab } from '../interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetAllDataService {
  constructor(private http: HttpClient) {}
  fetch(): Observable<Menu[]> {
    return this.http.get<Menu[]>('http://localhost:3000/header-menu');
  }
  fetchMenuFooter(): Observable<Menu[]> {
    return this.http.get<Menu[]>('http://localhost:3000/footer-menu');
  }
  fetchPromo(): Observable<Promo[]> {
    return this.http.get<Promo[]>('http://localhost:3000/promo');
  }
  fetchTabs(): Observable<Tab[]> {
    return this.http.get<any>('http://localhost:3000/tabs');
  }
  fetchAboutUs(): Observable<AboutUs[]> {
    return this.http.get<AboutUs[]>('http://localhost:3000/about-us');
  }
  fetchCopyright(): Observable<Copyright[]> {
    return this.http.get<Copyright[]>('http://localhost:3000/copyright');
  }
  fetchSocialIcons(): Observable<SocialLinks[]> {
    return this.http.get<SocialLinks[]>('http://localhost:3000/social-link');
  }
  fetchPromoText(): Observable<PromoText[]> {
    return this.http.get<PromoText[]>('http://localhost:3000/promo-text');
  }
}
