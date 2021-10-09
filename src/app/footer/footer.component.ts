import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Bluger_category, Socialmedia } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  social_media: Socialmedia[];
  blugerCategory: Bluger_category[];
  Email: string;

  constructor(private svc: InfosvcService, public translate: TranslateService) {
    this.getsocialMediaInfo();
    this.getBlugerCategoryInfo();
  }

  ngOnInit(): void {}

  getBlugerCategoryInfo() {
    this.svc.getBlugerCategoryInfo(() => {
      this.blugerCategory = this.svc.BlugerCategory;
      console.log(this.blugerCategory);
    });
  }

  getsocialMediaInfo() {
    this.svc.getHeaderInfo(() => {
      this.social_media = this.svc.SocialMedia;
    });
  }

  onSubmit() {}
}
