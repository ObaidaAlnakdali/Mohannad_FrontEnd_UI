import { Component, OnInit } from '@angular/core';
import { Educations, Experience, Personal } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  education: Educations[];
  experience : Experience[];
  personal : Personal ;

  constructor(private svc : InfosvcService) {
    this.getResumeInfo();
    this.getGeneralInfo();

   }

  ngOnInit(): void {

  }
  getResumeInfo() {
    this.svc.getResumeInfo(() => {
      this.education = this.svc.Educations;
      this.experience = this.svc.Experience;
    });
  }

  getGeneralInfo() {
    this.svc.getGeneralInfo(() => {
      this.personal = this.svc.Personal;
    });
  }

}
