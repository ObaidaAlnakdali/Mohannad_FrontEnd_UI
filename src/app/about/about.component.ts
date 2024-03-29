import { Component, OnInit } from '@angular/core';
import {
  Friendly_sites,
  Personal,
  Skills,
  Socialmedia,
  Testimonials,
} from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';
import Swiper from 'swiper/core';

declare var jQuery: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  skills: Skills[];
  testimonials: Testimonials[];
  social_media: Socialmedia[];
  friendlySite: Friendly_sites[];
  personal: Personal;
  mySwiper: Swiper;
  lang: string;

  constructor(private svc: InfosvcService) {
    this.lang = localStorage.getItem('lang') || 'ar';
    this.getGeneralInfo();
    this.getAboutInfo();
    this.getsocialMediaInfo();
  }

  ngOnInit(): void {
    this.JQuery();
  }

  getsocialMediaInfo() {
    this.svc.getHeaderInfo(() => {
      this.social_media = this.svc.SocialMedia;
    });
  }

  getAboutInfo() {
    this.svc.getAboutInfo(() => {
      this.skills = this.svc.Skills;
      this.testimonials = this.svc.testimonials;
      this.friendlySite = this.svc.FriendlySite;
      console.log(this.testimonials);
    });
  }

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
    });
  }

  JQuery() {
    (function ($) {
      'use strict';

      // Skills section
      $('.skills-content').waypoint(
        function () {
          $('.progress .progress-bar').each(function () {
            $(this).css('width', $(this).attr('aria-valuenow') + '%');
          });
        },
        {
          offset: '80%',
        }
      );

      // jQuery counterUp
      $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000,
      });

    })(jQuery);
  }
}
