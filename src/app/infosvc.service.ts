import { Injectable } from '@angular/core';
import {
  Bluger,
  Bluger_category,
  Educations,
  Experience,
  Params_Get_Bluger_By_ACTIVE,
  Params_Get_Bluger_category_By_ACTIVE,
  Params_Get_Educations_By_ACTIVE,
  Params_Get_Experience_By_ACTIVE,
  Params_Get_Publisher_By_ACTIVE,
  Params_Get_Skills_By_ACTIVE,
  Params_Get_Socialmedia_By_ACTIVE,
  Params_Get_Testimonials_By_ACTIVE,
  Params_Get_Personal_By_PERSONAL_ID,
  Proxy,
  Publisher,
  Skills,
  Socialmedia,
  Testimonials,
  Personal,
  Gallary,
  Params_Get_Gallary_By_ACTIVE,
  Friendly_sites,
  Params_Get_Friendly_sites_By_ACTIVE,
  Chance,
  Params_Get_Chance_By_ACTIVE,
} from 'src/services/proxy.service';

@Injectable()
export class InfosvcService {
  Skills: Skills[] = [];
  testimonials: Testimonials[] = [];
  Educations: Educations[] = [];
  Experience: Experience[] = [];
  Bluger: Bluger[] = [];
  BlugerCategory: Bluger_category[] = [];
  Publisher: Publisher[] = [];
  SocialMedia: Socialmedia[] = [];
  Gallary: Gallary[] = [];
  FriendlySite: Friendly_sites[] = [];
  Chance: Chance[] = [];
  ChanceActive: Chance[] = [];
  date : Date = new Date();
  Personal: Personal;
  dd = String(this.date.getDate()).padStart(2, '0');
  mm = String(this.date.getMonth() + 1).padStart(2, '0');
  yyyy = this.date.getFullYear();
  dateNow =  this.yyyy + '-' + this.mm + '-' + this.dd;

  constructor(private proxy: Proxy) {}

  //--------------------General--------------------------

  getGeneralInfo(successHandler) {
    this.Personal = null;
    const params = new Params_Get_Personal_By_PERSONAL_ID();
    params.PERSONAL_ID = 1;
    this.proxy
      .Get_Personal_By_PERSONAL_ID(params)
      .subscribe((data: Personal) => {
        this.Personal = data;
        if (successHandler) {
          successHandler();
        }
      });
  }

  //--------------------End--General--------------------------

  //--------------------Header--------------------------

  getHeaderInfo(successHandler) {
    this.SocialMedia = [];
    const params = new Params_Get_Socialmedia_By_ACTIVE();
    params.ACTIVE = true;
    this.proxy
      .Get_Socialmedia_By_ACTIVE(params)
      .subscribe((data: Socialmedia[]) => {
        this.SocialMedia = data;
        if (successHandler) {
          successHandler();
        }
      });
  }

  //--------------------End--Header--------------------------

  //--------------------About--------------------------
  getAboutInfo(successHandler) {
    this.Skills = [];
    const params = new Params_Get_Skills_By_ACTIVE();
    params.ACTIVE = true;
    this.proxy.Get_Skills_By_ACTIVE(params).subscribe((data: Skills[]) => {
      this.Skills = data;
      if (successHandler) {
        successHandler();
      }
    });

    this.testimonials = [];
    const testimonials = new Params_Get_Testimonials_By_ACTIVE();
    testimonials.ACTIVE = true;
    this.proxy
      .Get_Testimonials_By_ACTIVE(testimonials)
      .subscribe((data: Testimonials[]) => {
        this.testimonials = data;
        if (successHandler) {
          successHandler();
        }
      });

      this.FriendlySite = [];
      const friendlySite = new Params_Get_Friendly_sites_By_ACTIVE();
      friendlySite.ACTIVE = true;
      this.proxy
        .Get_Friendly_sites_By_ACTIVE(friendlySite)
        .subscribe((data: Friendly_sites[]) => {
          this.FriendlySite = data;
          if (successHandler) {
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
    this.proxy
      .Get_Educations_By_ACTIVE(educations)
      .subscribe((data: Educations[]) => {
        this.Educations = data;

        if (successHandler) {
          successHandler();
        }
      });

    this.Experience = [];
    const experience = new Params_Get_Experience_By_ACTIVE();
    experience.ACTIVE = true;
    this.proxy
      .Get_Experience_By_ACTIVE(experience)
      .subscribe((data: Experience[]) => {
        this.Experience = data;

        if (successHandler) {
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
    this.proxy
      .Get_Publisher_By_ACTIVE(params)
      .subscribe((data: Publisher[]) => {
        this.Publisher = data;
        if (successHandler) {
          successHandler();
        }
      });
  }

  //--------------------End--Publisher--------------------------

  //--------------------Gallary--------------------------

  getGallaryInfo(successHandler) {
    this.Gallary = [];
    const params = new Params_Get_Gallary_By_ACTIVE();
    params.ACTIVE = true;
    this.proxy.Get_Gallary_By_ACTIVE(params).subscribe((data: Gallary[]) => {
      this.Gallary = data;
      if (successHandler) {
        successHandler();
      }
    });
  }

  //--------------------End--Gallary--------------------------

  //--------------------Bluger--------------------------

  getBlugerInfo(successHandler) {
    this.Bluger = [];
    const params = new Params_Get_Bluger_By_ACTIVE();
    params.ACTIVE = true;
    this.proxy.Get_Bluger_By_ACTIVE(params).subscribe((data: Bluger[]) => {
      this.Bluger = data;
      if (successHandler) {
        successHandler();
      }
    });
  }

  //--------------------End--Bluger--------------------------

    //--------------------Bluger_category--------------------------

    getBlugerCategoryInfo(successHandler) {
      this.BlugerCategory = [];
      const params = new Params_Get_Bluger_category_By_ACTIVE();
      params.ACTIVE = true;
      this.proxy.Get_Bluger_category_By_ACTIVE(params).subscribe((data: Bluger_category[]) => {
        this.BlugerCategory = data;
        if (successHandler) {
          successHandler();
        }
      });
    }

    //--------------------End--Bluger--------------------------

  //--------------------Chance--------------------------

    getChanceInfo(successHandler) {
      this.Chance = [];
      this.ChanceActive = [];
      const params = new Params_Get_Chance_By_ACTIVE();
      params.ACTIVE = true;
      this.proxy.Get_Chance_By_ACTIVE(params).subscribe((data: Chance[]) => {
        this.Chance = data;
        data.forEach(element => {
          if (element.END_DATE > this.dateNow){
            this.ChanceActive.push(element);
          }
        });
        if (successHandler) {
          successHandler();
        }
      });
    }

  //--------------------End--Chance--------------------------

}
