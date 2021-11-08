import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Courses, Personal, Socialmedia } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  social_media: Socialmedia[];
  personal: Personal;
  courses: Courses[];
  Email: string;
  lang: string;

  constructor(private svc: InfosvcService, public translate: TranslateService) {
    this.lang = localStorage.getItem('lang') || 'ar';
    this.getsocialMediaInfo();
    this.getCoursesInfo();
    this.getGeneralInfo();
  }

  ngOnInit(): void {}

  getCoursesInfo() {
    this.svc.getCoursesInfo(() => {
      this.courses = this.svc.Courses;
    });
  }

  getsocialMediaInfo() {
    this.svc.getHeaderInfo(() => {
      this.social_media = this.svc.SocialMedia;
    });
  }

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
    });
  }

  onSubmit() {}
}
