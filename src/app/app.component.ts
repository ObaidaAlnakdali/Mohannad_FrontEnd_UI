import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare var jQuery : any;
declare var AOS : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI';

  constructor(public translate : TranslateService){}

  ngOnInit(): void {}

  onActivate(event) {
    window.scroll(1,1);
}

changeLang(){
  let lang = document.getElementById("language").innerHTML;
  if (lang === "AR"){
    document.getElementById("language").innerHTML="EN";
    this.translate.use('ar');
  }else{
    document.getElementById("language").innerHTML="AR";
    this.translate.use('en');
  }
}

}
