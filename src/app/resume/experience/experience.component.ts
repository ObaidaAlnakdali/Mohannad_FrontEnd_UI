import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }
  @Input () Title = '';
  @Input () Date = '';
  @Input () Address = '';
  ngOnInit(): void {
  }

}
