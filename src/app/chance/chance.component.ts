import { Component, OnInit } from '@angular/core';
import { Chance, Personal } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

@Component({
  selector: 'app-chance',
  templateUrl: './chance.component.html',
  styleUrls: ['./chance.component.css']
})
export class ChanceComponent implements OnInit {
  chance: Chance[];
  personal : Personal;
  i=0;

  constructor(private svc : InfosvcService) {
    this.getChanceInfo();
    this.getGeneralInfo();
  }

  ngOnInit(): void {
    setTimeout(() => {
      var navElements = document.querySelectorAll('.chances span');

      navElements.forEach(function(x) {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let todays =  Date.parse(yyyy + '-' + mm + '-' + dd);
        let date = Date.parse(x.textContent)
        if(date < todays){
          x.classList.toggle("background-item-red");
        }
      })
    }, 3000);

  }

  getChanceInfo() {
    this.svc.getChanceInfo(() => {
      this.chance = this.svc.Chance;
      console.log(this.chance.sort(this.byBirthday));
    });
  }

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
    });
  }

  byBirthday(a, b) {
    //by month and then by day
    let d1 = new Date(a.dob); // 1993-02-15T00:00:00Z =>   1993-02-14T20:00:00EST
    let d2 = new Date(b.dob);
    if (d1.getUTCMonth() > d2.getUTCMonth()) {
      return 1;
    } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
      return -1;
    } else {
      //same month
      return d1.getUTCDate() - d2.getUTCDate();
    }
  }

  checkDate(e){
    console.log(e)
  }
}
