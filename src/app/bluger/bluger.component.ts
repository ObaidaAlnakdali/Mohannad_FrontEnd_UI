import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Bluger, Bluger_category, Personal } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bluger',
  templateUrl: './bluger.component.html',
  styleUrls: ['./bluger.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlugerComponent implements OnInit {
  blugerAR: Bluger[];
  blugerEN: Bluger[];
  blugerFavorite: Bluger[];
  blugerCategory: Bluger_category[];
  personal: Personal;
  lang: string;

  constructor(private svc: InfosvcService, public translate: TranslateService) {
    this.lang = localStorage.getItem('lang') || 'en';
    this.getBlugerCategoryInfo();
    this.getGeneralInfo();
    this.getBlugerInfo();
  }

  ngOnInit(): void {}

  getBlugerCategoryInfo() {
    this.svc.getBlugerCategoryInfo(() => {
      this.blugerCategory = this.svc.BlugerCategory;
    });
  }

  getBlugerInfo() {
    this.svc.getBlugerInfo(() => {
      this.blugerAR = this.svc.BlugerAR;
      this.blugerEN = this.svc.BlugerEn;
      console.log(this.blugerEN);
      this.blugerFavorite = this.svc.BlugerFavorite;
    });
  }

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
    });
  }
}
