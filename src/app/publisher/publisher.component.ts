import { Component, OnInit } from '@angular/core';
import { Personal, Publisher } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  publisher: Publisher[];
  personal : Personal;

  constructor(private svc : InfosvcService)
  {
    this.getPublisherInfo();
    this.getGeneralInfo();

  }

  ngOnInit(): void {

  }

  getPublisherInfo() {
    this.svc.getPublisherInfo(() => {
      this.publisher = this.svc.Publisher;
    });
  }

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
      console.log(this.personal)
    });
  }

}
