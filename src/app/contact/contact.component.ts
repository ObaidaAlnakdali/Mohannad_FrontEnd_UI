import { Component, OnInit } from '@angular/core';
import { Personal, Proxy } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';
import { msgContact } from './contactmsg';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  personal: Personal;
  lang: string;
  msg = new msgContact();

  constructor(private svc: InfosvcService, private proxy: Proxy) {
    this.lang = localStorage.getItem('lang') || 'ar';
    this.getGeneralInfo();
  }

  ngOnInit(): void {}

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
    });
  }

  onSubmit() {

    this.proxy.SendEmail(this.msg).subscribe(() => {
      Swal.fire({
        title: 'Thanks',
        text: 'The mail has been sent successfully !!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'OK'
      })

    });
  }
}
