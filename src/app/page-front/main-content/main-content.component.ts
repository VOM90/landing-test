import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllDataService } from '../../shared/services/get-all-data.service';
import {Tab} from '../../shared/interface';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.less']
})
export class MainContentComponent implements OnInit {
  tabs$: Observable<Tab[]>;
  constructor(private getAllDataService: GetAllDataService) { }

  ngOnInit() {
    this.tabs$ = this.getAllDataService.fetchTabs();
  }

}
