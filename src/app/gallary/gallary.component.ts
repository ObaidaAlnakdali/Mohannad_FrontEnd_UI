import { Component, Input, OnInit } from '@angular/core';
import { Personal, Gallary } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

declare var jQuery: any;
declare var AOS: any;
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
})
export class GallaryComponent implements OnInit {

  personal: Personal;
  gallary : Gallary [];

  constructor(private svc : InfosvcService)
  {

    this.getGeneralInfo();
    this.getGallaryInfo();
  }

  ngOnInit(): void {
    this.jQueryStart();

  }


  jQueryStart(){

    (function ($) {
      // Porfolio isotope and filter
      $(window).on('load', function () {
        var portfolioIsotope = $('.portfolio-container').isotope({
          itemSelector: '.portfolio-item',
        });

        $('#portfolio-flters li').on('click', function () {
          $('#portfolio-flters li').removeClass('filter-active');
          $(this).addClass('filter-active');

          portfolioIsotope.isotope({
            filter: $(this).data('filter'),
          });
          aos_init();
        });

        // Init AOS
        function aos_init() {
          AOS.init({
            duration: 1000,
            once: true,
          });
        }
        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function () {
          $('.venobox').venobox({
            share: false,
          });
        });
      });
    })(jQuery);

  }

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
    });
  }

  getGallaryInfo() {
    this.svc.getGallaryInfo(() => {
      this.gallary = this.svc.Gallary;
      console.log(this.gallary);
    });
  }

}
