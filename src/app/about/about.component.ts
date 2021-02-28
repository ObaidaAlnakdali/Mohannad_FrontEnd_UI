import { Component, OnInit } from '@angular/core';
import { Proxy, Skills, Testimonials } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';
declare var jQuery:any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  skills: Skills[];
  testimonials: Testimonials[];
  constructor(
    private proxy : Proxy,
    private svc : InfosvcService
    ) {
      this.getAboutInfo()
    }

  ngOnInit(): void {

    (function($) {
      "use strict";

      // Skills section
      $('.skills-content').waypoint(function() {
        $('.progress .progress-bar').each(function() {
          $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
      }, {
        offset: '80%'
      });

      // jQuery counterUp
      $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
      });

      // Testimonials carousel (uses the Owl Carousel library)

    })(jQuery);

  }
  getAboutInfo() {
    this.svc.getAboutInfo(() => {
      this.skills = this.svc.Skills;
      this.testimonials = this.svc.testimonials;

    });
  }



}
