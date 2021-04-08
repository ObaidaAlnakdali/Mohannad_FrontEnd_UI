import { Component, Input, OnInit } from '@angular/core';
import { Personal } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personal: Personal;
  constructor(private svc : InfosvcService)
  {

    this.getGeneralInfo();
  }

  ngOnInit(): void {

  }

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
    });
  }


}
