import { Component, OnInit, TemplateRef } from '@angular/core';
import { Courses, Personal } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Courses[];
  courses_ar: Courses[];
  courses_en: Courses[];
  lang: string;
  modalRef?: BsModalRef;
  personal: Personal;

  constructor(
    private svc: InfosvcService,
    public translate: TranslateService,
    private modalService: BsModalService
  ) {
    this.lang = localStorage.getItem('lang') || 'ar';
    this.getCoursesInfo();
    this.getGeneralInfo();
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  ngOnInit(): void {}

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
    });
  }

  getCoursesInfo() {
    this.svc.getCoursesInfo(() => {
      this.courses = this.svc.Courses;
      this.courses_ar = this.svc.Courses_AR;
      this.courses_en = this.svc.Courses_EN;
    });
  }
}
