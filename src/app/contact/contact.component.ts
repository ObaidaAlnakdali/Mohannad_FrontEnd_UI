import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Params_SendEmail, Personal, Proxy } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

declare var jQuery: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  personal: Personal;

  constructor(private svc: InfosvcService, private proxy: Proxy) {
    this.getGeneralInfo();
  }

  ngOnInit(): void {}

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
    });
  }

  log(x) {
    console.log(x);
  }

  onSubmit(contactForm: NgForm) {
    //this.loading = true;
    const p = new Params_SendEmail();
    p.name = ' hAmZa';
    p.email = ' KK_KK_KK@gmail.com';
    p.supject = ' RARARARORORO';
    p.message = '   RARwelcome';

    this.proxy.SendEmail(p).subscribe(() => {
      alert('The mail has been sent successfully !!');
    });
  }
}
