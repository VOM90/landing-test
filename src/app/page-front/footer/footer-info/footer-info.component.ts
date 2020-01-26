import { Component, OnInit } from '@angular/core';
import { GetAllDataService } from '../../../shared/services/get-all-data.service';
import { Observable } from 'rxjs';
import { PromoText } from '../../../shared/interface';

@Component({
  selector: 'app-footer-info',
  templateUrl: './footer-info.component.html',
  styleUrls: ['./footer-info.component.less']
})
export class FooterInfoComponent implements OnInit {
  text$: Observable<PromoText[]>
  constructor(private menuService: GetAllDataService) { }

  ngOnInit() {
    this.text$ = this.menuService.fetchPromoText();
  }

}
