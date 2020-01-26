import { Component, OnInit } from '@angular/core';
import { GetAllDataService } from '../../../shared/services/get-all-data.service';
import { Observable } from 'rxjs';
import { Menu } from '../../../shared/interface';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.less']
})
export class NavMenuComponent implements OnInit {
  links$: Observable<Menu[]>
  constructor(private menuService: GetAllDataService ) { }

  ngOnInit() {
    this.links$ = this.menuService.fetch();
  }

}
