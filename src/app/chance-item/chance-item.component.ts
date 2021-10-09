import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chance } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

@Component({
  selector: 'app-chance-item',
  templateUrl: './chance-item.component.html',
  styleUrls: ['./chance-item.component.css'],
})
export class ChanceItemComponent implements OnInit {
  chance_item: Chance;

  constructor(
    private svc: InfosvcService,
    private activatedrout: ActivatedRoute
  ) {
    this.get_Chance_info();
  }

  ngOnInit(): void {}

  get_Chance_info() {
    this.activatedrout.paramMap.subscribe((params) => {
      this.svc.getChanceInfo(() => {
        this.chance_item = this.svc.Chance.find((x) => x.CHANCE_ID == +params.get('CHANCE_ID'));
        console.log(this.chance_item);
      });
    });
  }
}
