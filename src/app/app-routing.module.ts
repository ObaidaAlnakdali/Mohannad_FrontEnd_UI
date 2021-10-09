import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlugerCategoryComponent } from './bluger-category/bluger-category.component';
import { BlugerContentComponent } from './bluger-content/bluger-content.component';
import { BlugerComponent } from './bluger/bluger.component';
import { ChanceItemComponent } from './chance-item/chance-item.component';
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
  { path: 'bluger/content/:BLUGER_ID', component: BlugerContentComponent },
  { path: 'bluger/category/:BLUGER_CATEGORY_ID', component: BlugerCategoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'chance', component: ChanceComponent },
  { path: 'chance/:CHANCE_ID', component: ChanceItemComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
