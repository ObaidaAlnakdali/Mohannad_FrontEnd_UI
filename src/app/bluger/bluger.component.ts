import { Component, OnInit } from '@angular/core';
import { Bluger, Personal } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';
@Component({
  selector: 'app-bluger',
  templateUrl: './bluger.component.html',
  styleUrls: ['./bluger.component.css']
})
export class BlugerComponent implements OnInit {

  bluger: Bluger[];
  personal : Personal;

  constructor(private svc : InfosvcService)
  {
    this.getBlugerInfo();
    this.getGeneralInfo();
  }

  ngOnInit(): void {

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
