import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
declare var AOS: any;
@Component({
  selector: 'app-discription',
  templateUrl: './discription.component.html',
  styleUrls: ['./discription.component.css']
})
export class DiscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      // Portfolio details carousel
      $('.portfolio-details-carousel').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1,
      });
    })(jQuery);
  }

}
