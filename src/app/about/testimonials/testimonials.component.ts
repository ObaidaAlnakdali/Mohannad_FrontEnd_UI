import { Component, OnInit, Input } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  @Input () Name = '';
  @Input () Title = '';
  @Input () Description = '';
  @Input () My_Image_Url = '';
  lang : string;
  constructor() {this.lang = localStorage.getItem('lang') || 'ar'; }

  ngOnInit(): void {
    (function($) {
      "use strict";

      // Testimonials carousel (uses the Owl Carousel library)
      $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          900: {
            items: 2,
          },
        },

        // items: 1,
      });


    })(jQuery);
  }

}
