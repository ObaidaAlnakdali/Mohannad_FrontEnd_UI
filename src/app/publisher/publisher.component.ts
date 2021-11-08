import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Personal, Publisher, Reqwest_publishers, Proxy } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  publisher: Publisher[];
  personal : Personal;
  reqwest = new Reqwest_publishers();
  modalRef: BsModalRef;
  lang : string;

  constructor(private svc : InfosvcService, private modalService: BsModalService, private proxy: Proxy)
  {
    this.lang = localStorage.getItem('lang') || 'ar';
    this.getPublisherInfo();
    this.getGeneralInfo();

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {

  }

  getPublisherInfo() {
    this.svc.getPublisherInfo(() => {
      this.publisher = this.svc.Publisher;
      console.log(this.publisher)
    });
  }

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
    });
  }



  onSubmit(id, URL) {
    this.reqwest.REQWEST_PUBLISHERS_ID = -1;
    this.reqwest.PUBLISHER_ID = id;
    this.proxy.Edit_Reqwest_publishers(this.reqwest).subscribe(() => {
      console.log(this.reqwest);
      window.open(URL, '_blank');
      this.modalService.hide();
      this.reqwest.NAME = "";
      this.reqwest.EMAIL = "";
    });
  }

}
