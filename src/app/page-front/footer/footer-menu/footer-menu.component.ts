import { Component, OnInit } from '@angular/core';
import { GetAllDataService } from '../../../shared/services/get-all-data.service';
import { Observable } from 'rxjs';
import { Menu } from '../../../shared/interface';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.less']
})
export class FooterMenuComponent implements OnInit {
  menuLinks$: Observable<Menu[]>
  constructor(private menuService: GetAllDataService) { }

  ngOnInit() {
    this.menuLinks$ = this.menuService.fetchMenuFooter();
  }

}
