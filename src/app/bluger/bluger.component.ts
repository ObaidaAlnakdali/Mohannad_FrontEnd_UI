import { Component, OnInit } from '@angular/core';
import { Bluger } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';
@Component({
  selector: 'app-bluger',
  templateUrl: './bluger.component.html',
  styleUrls: ['./bluger.component.css']
})
export class BlugerComponent implements OnInit {

  bluger: Bluger[];

  constructor(private svc : InfosvcService)
  {
    this.getBlugerInfo();

  }

  ngOnInit(): void {

  }

  getBlugerInfo() {
    this.svc.getBlugerInfo(() => {
      this.bluger = this.svc.Bluger;
    });
  }

}
