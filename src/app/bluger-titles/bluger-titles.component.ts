import { Component, OnInit } from '@angular/core';
import { Bluger, Bluger_category } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'bluger-titles',
  templateUrl: './bluger-titles.component.html',
  styleUrls: ['./bluger-titles.component.css'],
})
export class BlugerTitlesComponent implements OnInit {
  bluger: Bluger[];
  blugerAR: Bluger[];
  blugerEN: Bluger[];
  blugerCategory: Bluger_category[];
  lang: string;

  constructor(private svc: InfosvcService, public translate: TranslateService) {
    this.lang = localStorage.getItem('lang') || 'en';
    this.getBlugerCategoryInfo();
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
      this.bluger = this.svc.Bluger;
      this.blugerAR = this.svc.BlugerAR;
      this.blugerEN = this.svc.BlugerEn;
    });
  }

}
