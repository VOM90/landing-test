import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutUs } from '../../../shared/interface';
import { GetAllDataService } from '../../../shared/services/get-all-data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.less']
})
export class AboutUsComponent implements OnInit {
  aboutUs$: Observable<AboutUs[]>
  constructor(private menuTabs: GetAllDataService) { }

  ngOnInit() {
    this.aboutUs$ = this.menuTabs.fetchAboutUs();
  }

}
