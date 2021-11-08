import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/Common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UI';
  lang: string;

  constructor(
    public translate: TranslateService,
    private router: Router,
    private location: Location,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.lang = localStorage.getItem('lang') || 'ar';
    this.translate.use(this.lang);
  }

  ngOnInit(): void {
    this.addInCopy();
  }

  addInCopy() {
    if (this.lang === 'ar') {
      document.addEventListener('copy', (event) => {
        const pagelink = `\n\n ${document.location.href} \n https://MuhannadAlsamer.org \n مهند سامر © 2021`;
        event.clipboardData.setData('text', document.getSelection() + pagelink);
        event.preventDefault();
      });
    } else {
      document.addEventListener('copy', (event) => {
        const pagelink = `\n\n ${document.location.href} \n https://MuhannadAlsamer.org \n Muhannad Alsamer © 2021`;
        event.clipboardData.setData('text', document.getSelection() + pagelink);
        event.preventDefault();
      });
    }
  }

  onActivate(event) {
    window.scroll(1, 1);
  }

  changeLang() {
    let lang = document.getElementById('language').innerHTML;
    if (lang === 'AR') {
      document.getElementById('language').innerHTML = 'EN';
      this.translate.use('ar');
      localStorage.setItem('lang', 'ar');
    } else {
      document.getElementById('language').innerHTML = 'AR';
      this.translate.use('en');
      localStorage.setItem('lang', 'en');
    }
    // this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
    //   this.router.navigate([decodeURI(this.location.path())]);
    // });
    window.location.reload();
    this.changeCssFile(this.lang);
  }

  changeCssFile(lang: string): void {
    const headTag = this.document.getElementsByTagName(
      'head'
    )[0] as HTMLHeadElement;
    const existingLink = this.document.getElementById(
      'langCss'
    ) as HTMLLinkElement;

    const bundleName =
      lang === 'ar'
        ? '../../assets/css/ar/styles.scss'
        : '../../assets/css/en/styles.scss';
    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      const newLink = this.document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.id = 'langCss';
      newLink.type = 'text/css';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }
}
