import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { $$ } from 'protractor';
import { Proxy, Socialmedia } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';
declare var jQuery: any;

declare var jQuery : any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  social_media: Socialmedia[];
  Name = "icofont-";
  lang: string;

  constructor(
    private proxy : Proxy,
    private svc : InfosvcService,
    public translate : TranslateService
  ) {
    this.lang = localStorage.getItem('lang') || 'ar';
    this.getHeaderInfo();
  }

  ngOnInit(): void {

  }

  getHeaderInfo() {
    this.svc.getHeaderInfo(() => {
      this.social_media = this.svc.SocialMedia;
    });
  }

  navMabOpen(){
    let navMobile = document.querySelector(".nav-mob");
    let divMob = document.querySelector(".div-nave");
    let navLinks = document.querySelector(".nav-menu ul");
    divMob.classList.remove("d-none");
    divMob.classList.add("d-block");
    navMobile.appendChild(navLinks);
  }

  navMabClose(){
    let divMob = document.querySelector(".div-nave");
    let navLinksitem = document.querySelector(".nav-mob ul");
    let navLinks = document.querySelector(".nav-menu");
    divMob.classList.add("d-none");
    divMob.classList.remove("d-block");
    navLinks.appendChild(navLinksitem);
  }

  top() {
    window.scroll(0,0);
  }
}
