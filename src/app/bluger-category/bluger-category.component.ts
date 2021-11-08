import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bluger } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

@Component({
  selector: 'app-bluger-category',
  templateUrl: './bluger-category.component.html',
  styleUrls: ['./bluger-category.component.css'],
})
export class BlugerCategoryComponent implements OnInit {
  bluger: Bluger[];

  constructor(
    private svc: InfosvcService,
    private activatedrout: ActivatedRoute
  ) {
    this.get_Bluger_info();
  }

  ngOnInit(): void {}



      get_Bluger_info() {
        this.activatedrout.paramMap.subscribe((params) => {
            this.svc.getBlugerInfo(() => {
              if(params.get("BLUGER_CATEGORY_ID") === '-1'){
                this.bluger = this.svc.BlugerEn;
              }else{
                this.bluger = this.svc.BlugerAR.filter((x) => x.BLUGER_CATEGORY_ID == +params.get('BLUGER_CATEGORY_ID'));;
              }
              console.log(this.bluger);
            });
        });
      }

}
