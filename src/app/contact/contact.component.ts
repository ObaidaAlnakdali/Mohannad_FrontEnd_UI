import { Component, OnInit } from '@angular/core';
import { Personal } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {

  personal : Personal;

  constructor(private svc : InfosvcService)
  {
    this.getGeneralInfo();
  }

  ngOnInit(): void {}

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
    });
  }

}
