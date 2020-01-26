import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-items',
  templateUrl: './tab-items.component.html',
  styleUrls: ['./tab-items.component.less']
})
export class TabItemsComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit() {
  }

}
