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
  constructor() { }

  ngOnInit(): void {
    (function($) {
      "use strict";

      // Testimonials carousel (uses the Owl Carousel library)
      $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
      });


    })(jQuery);
  }

}
