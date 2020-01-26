import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllDataService } from '../../../shared/services/get-all-data.service';
import { SocialLinks } from '../../../shared/interface';

@Component({
  selector: 'app-footer-socials',
  templateUrl: './footer-socials.component.html',
  styleUrls: ['./footer-socials.component.less']
})
export class FooterSocialsComponent implements OnInit {

  links$: Observable<SocialLinks[]>
  constructor(private menuService: GetAllDataService) { }

  ngOnInit() {
    this.links$ = this.menuService.fetchSocialIcons();
  }

}
