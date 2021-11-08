import { Component, TemplateRef, OnInit } from '@angular/core';
import { Consulting_services, Personal } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personal: Personal;
  modalRef?: BsModalRef;
  lang : string;
  consulting_services : Consulting_services[]

  constructor(private svc : InfosvcService,
    private modalService: BsModalService)
  {
    this.lang = localStorage.getItem('lang') || 'ar';
    this.getGeneralInfo();
    this.getConsulting_services_Info();
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  ngOnInit(): void {

  }

  getConsulting_services_Info(){
    this.svc.getConsulting_services_Info(() => {
      this.consulting_services = this.svc.Consulting_services;
    });
  }

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
    });
  }


}
