import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Proxy, Socialmedia } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

declare var jQuery : any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  social_media: Socialmedia[];
  Name = "icofont-";

  constructor(
    private proxy : Proxy,
    private svc : InfosvcService,
    public translate : TranslateService
  ) {
    this.getHeaderInfo();
  }

  ngOnInit(): void {

  }

  getHeaderInfo() {
    this.svc.getHeaderInfo(() => {
      this.social_media = this.svc.SocialMedia;
    });
  }
}
