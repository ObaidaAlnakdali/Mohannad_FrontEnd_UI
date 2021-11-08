import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bluger } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

@Component({
  selector: 'app-bluger-content',
  templateUrl: './bluger-content.component.html',
  styleUrls: ['./bluger-content.component.css'],
})
export class BlugerContentComponent implements OnInit {
  bluger: Bluger;

  constructor(
    private svc: InfosvcService,
    private activatedrout: ActivatedRoute
  ) {
    this.get_Bluger_info();
  }

  ngOnInit(): void {}

  get_Bluger_info() {
    this.activatedrout.paramMap.subscribe((params) => {
      this.svc.getBlugerByID(params.get('BLUGER_ID'), () => {
        this.bluger = this.svc.BlugerByID;
        console.log(this.bluger);
        });
    });
  }

}


