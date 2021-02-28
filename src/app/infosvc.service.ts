import { Injectable } from '@angular/core';
import {
  Bluger,
  Educations,
  Experience,
  Params_Get_Bluger_By_ACTIVE,
  Params_Get_Educations_By_ACTIVE,
  Params_Get_Experience_By_ACTIVE,
  Params_Get_Publisher_By_ACTIVE,
  Params_Get_Skills_By_ACTIVE,
  Params_Get_Testimonials_By_ACTIVE,
  Proxy,
  Publisher,
  Skills,
  Testimonials,
} from 'src/services/proxy.service';

@Injectable()
export class InfosvcService {
  Skills: Skills[] = [];
  testimonials: Testimonials[] = [];
  Educations : Educations[] = [];
  Experience: Experience[] = [];
  Bluger: Bluger[] = [];
  Publisher: Publisher[] = [];


  constructor(private proxy: Proxy) {

  }
//--------------------About--------------------------
  getAboutInfo(successHandler) {
    this.Skills = [];
    const params = new Params_Get_Skills_By_ACTIVE();
    params.ACTIVE = true;
    this.proxy.Get_Skills_By_ACTIVE(params).subscribe((data: Skills[]) => {
        this.Skills = data;
        if (successHandler)
        {
            successHandler();

        }
    });

    this.testimonials = [];
    const testimonials = new Params_Get_Testimonials_By_ACTIVE();
    testimonials.ACTIVE = true;
    this.proxy.Get_Testimonials_By_ACTIVE(testimonials).subscribe((data: Testimonials[]) => {
        this.testimonials = data;
        if (successHandler)
        {
            successHandler();
        }
    });
  }
  //--------------------End--About--------------------------

  //--------------------Resume--------------------------
  getResumeInfo(successHandler) {
    this.Educations = [];
    const educations = new Params_Get_Educations_By_ACTIVE();
    educations.ACTIVE = true;
    this.proxy.Get_Educations_By_ACTIVE(educations).subscribe((data: Educations[]) => {
        this.Educations = data;

        if (successHandler)
        {
            successHandler();

        }
    });

    this.Experience = [];
    const experience = new Params_Get_Experience_By_ACTIVE();
    experience.ACTIVE = true;
    this.proxy.Get_Experience_By_ACTIVE(experience).subscribe((data: Experience[]) => {
        this.Experience = data;

        if (successHandler)
        {
            successHandler();
        }
    });
  }
  //--------------------End--Resume--------------------------


  //--------------------Publisher--------------------------

  getPublisherInfo(successHandler) {
    this.Publisher = [];
    const params = new Params_Get_Publisher_By_ACTIVE();
    params.ACTIVE = true;
    this.proxy.Get_Publisher_By_ACTIVE(params).subscribe((data: Publisher[]) => {
        this.Publisher = data;
        if (successHandler)
        {
            successHandler();

        }
    });
  }

  //--------------------End--Publisher--------------------------


  //--------------------Bluger--------------------------

  getBlugerInfo(successHandler) {
    this.Bluger = [];
    const params = new Params_Get_Bluger_By_ACTIVE();
    params.ACTIVE = true;
    this.proxy.Get_Bluger_By_ACTIVE(params).subscribe((data: Bluger[]) => {
        this.Bluger = data;
        if (successHandler)
        {
            successHandler();

        }
    });
  }

  //--------------------End--Bluger--------------------------
}

