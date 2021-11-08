import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input () Title = '';
  @Input () Date = '';
  @Input () Name = '';
  constructor() { }

  ngOnInit(): void {
  }

}
