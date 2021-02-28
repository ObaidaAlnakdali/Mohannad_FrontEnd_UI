import { Component } from '@angular/core';
declare var jQuery : any;
declare var AOS : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI';

  ngOnInit(): void {


  }
  onActivate(event) {
    window.scroll(1,1);
}

}
