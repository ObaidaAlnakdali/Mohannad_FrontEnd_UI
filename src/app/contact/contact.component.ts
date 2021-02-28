import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  subject: string;
  message: string;

  constructor() {}

  ngOnInit(): void {}

  submitForm() {
    if (this.name.length > 4 && this.email.indexOf('@') > 0) {

      const message = `My name is ${this.name}.  My email is ${this.email}.  My subject is ${this.subject}.
      My message is ${this.message}`;


    }
  }
}
