import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Proxy,
  Gallary_item,
  Params_Get_Gallary_item_By_GALLARY_ID
} from 'src/services/proxy.service';


@Component({
  selector: 'app-discription',
  templateUrl: './discription.component.html',
  styleUrls: ['./discription.component.scss'],
})

export class DiscriptionComponent implements OnInit {
  id: number = 0;
  x = 0;
  gallary_item: Gallary_item[];



   constructor(private activatedrout: ActivatedRoute, private proxy: Proxy)
  {
    this.getGallaryItemInfo();
    setTimeout(function(){
      var sliderImage = Array.from(document.querySelectorAll(".slider-container img"));
      var slidesCount = sliderImage.length;
      console.log("number " + slidesCount);
    }, 100);
    var carrentSlide = 1;
    var nextButton = document.getElementById('next');
    var prevButton = document.getElementById('prev');

  }

  ngOnInit(): void {

  }

  next(): void{
    console.log('next');
  }

  prev(): void{
    console.log('prev');
  }


   getGallaryItemInfo() {

    this.activatedrout.paramMap.subscribe((params) => {
      this.gallary_item = [];
      const P = new Params_Get_Gallary_item_By_GALLARY_ID();
      P.GALLARY_ID = +params.get('GALLARY_ID');
      this.proxy
        .Get_Gallary_item_By_GALLARY_ID(P)
        .subscribe((data: Gallary_item[]) => {
          this.gallary_item = data;
          console.log(this.gallary_item);
        });
      });
   }

}
