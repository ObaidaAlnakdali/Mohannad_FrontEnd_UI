import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Proxy,
  Gallary_item,
} from 'src/services/proxy.service';

declare var jQuery: any;


@Component({
  selector: 'app-discription',
  templateUrl: './discription.component.html',
  styleUrls: ['./discription.component.css'],
})

export class DiscriptionComponent implements OnInit {
  id: number = 0;
  x = 0;
  gallary_item: Gallary_item[];

  constructor(private activatedrout: ActivatedRoute, private proxy: Proxy)
  {

    this.getGallaryItemInfo()
  }

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

   getGallaryItemInfo() {
  //   this.activatedrout.paramMap.subscribe((params) => {

  //     this.gallary_item = [];
  //     const P = new Params_Get_Gallary_item_By_GALLARY_ID();
  //     P.GALLARY_ID = +params.get('GALLARY_ID');
  //     this.proxy
  //       .Get_Gallary_item_By_GALLARY_ID(P)
  //       .subscribe((data: Gallary_item[]) => {
  //         this.gallary_item = data;
  //         console.log(this.gallary_item)
  //       });
  //       console.log(params.get('GALLARY_ID'))

  //  });
   }
}
