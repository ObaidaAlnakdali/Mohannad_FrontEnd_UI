import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PublisherComponent } from './publisher/publisher.component';
import { GallaryComponent } from './gallary/gallary.component';
import { BlugerComponent } from './bluger/bluger.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DiscriptionComponent } from './discription/discription.component';
import { SkillsComponent } from './about/skills/skills.component';
import { TestimonialsComponent } from './about/testimonials/testimonials.component';
import { InfosvcService } from './infosvc.service';
import { Proxy } from 'src/services/proxy.service';
import { CommonService } from 'src/services/common.service';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './resume/education/education.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { ExperienceItemComponent } from './resume/experience-item/experience-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PublisherComponent,
    GallaryComponent,
    BlugerComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    DiscriptionComponent,
    SkillsComponent,
    TestimonialsComponent,
    EducationComponent,
    ExperienceComponent,
    ExperienceItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
  ],
  providers: [
    CommonService,
    Proxy,
    InfosvcService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
