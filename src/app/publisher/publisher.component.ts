import { Component, OnInit } from '@angular/core';
import { Publisher } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  publisher: Publisher[];

  constructor(private svc : InfosvcService)
  {
    this.getPublisherInfo()

  }

  ngOnInit(): void {

  }

  getPublisherInfo() {
    this.svc.getPublisherInfo(() => {
      this.publisher = this.svc.Publisher;
    });
  }

}
