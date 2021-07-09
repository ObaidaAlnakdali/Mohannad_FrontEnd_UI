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

}
