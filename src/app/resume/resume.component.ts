import { Component, OnInit } from '@angular/core';
import { Educations, Experience } from 'src/services/proxy.service';
import { InfosvcService } from '../infosvc.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  education: Educations[];
  experience : Experience[];
  constructor(private svc : InfosvcService) {
    this.getResumeInfo();

   }

  ngOnInit(): void {

  }
  getResumeInfo() {
    this.svc.getResumeInfo(() => {
      this.education = this.svc.Educations;
      this.experience = this.svc.Experience;
    });
  }
}
