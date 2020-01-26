import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {GetAllDataService} from '../../shared/services/get-all-data.service';
import { Copyright } from '../../shared/interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  footerInfoText$: Observable<Copyright[]>
  constructor(private menuService: GetAllDataService) { }

  ngOnInit() {
    this.footerInfoText$ = this.menuService.fetchCopyright();
  }

}
