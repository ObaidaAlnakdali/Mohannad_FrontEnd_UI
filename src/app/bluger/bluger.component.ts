import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Bluger, Bluger_category, Personal } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';
import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-bluger',
  templateUrl: './bluger.component.html',
  styleUrls: ['./bluger.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class BlugerComponent implements OnInit {

  bluger: Bluger[];
  blugerCategory: Bluger_category[];
  personal : Personal;

  constructor(private svc : InfosvcService)
  {
    this.getBlugerInfo();
    this.getGeneralInfo();
    this.getBlugerInfo();
  }

  ngOnInit(): void {

  }

  getBlugerCategoryInfo() {
    this.svc.getBlugerCategoryInfo(() => {
      this.blugerCategory = this.svc.BlugerCategory;
      console.log(this.blugerCategory);
    });
  }

  getBlugerInfo() {
    this.svc.getBlugerInfo(() => {
      this.bluger = this.svc.Bluger;
    });
  }

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
    });
  }

}
