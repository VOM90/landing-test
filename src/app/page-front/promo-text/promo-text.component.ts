import { Component, OnInit } from '@angular/core';
import { Promo } from '../../shared/interface';
import { Observable } from 'rxjs';
import { GetAllDataService } from '../../shared/services/get-all-data.service';

@Component({
  selector: 'app-promo-text',
  templateUrl: './promo-text.component.html',
  styleUrls: ['./promo-text.component.less']
})
export class PromoTextComponent implements OnInit {
  promoText$: Observable<Promo[]>
  constructor(private getAllDataService: GetAllDataService) {}
  ngOnInit() {
    this.promoText$ = this.getAllDataService.fetchPromo();
  }
}
