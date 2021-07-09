import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlugerComponent } from './bluger/bluger.component';
import { ChanceComponent } from './chance/chance.component';
import { ContactComponent } from './contact/contact.component';
import { DiscriptionComponent } from './discription/discription.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { PublisherComponent } from './publisher/publisher.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'publisher', component: PublisherComponent },
  { path: 'gallary', component: GallaryComponent},
  { path: 'discription/:GALLARY_ID', component: DiscriptionComponent },
  { path: 'bluger', component: BlugerComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'chance', component: ChanceComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
