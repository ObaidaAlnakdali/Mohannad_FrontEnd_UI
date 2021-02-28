import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {
  @Input () Item = '';
  constructor() { }

  ngOnInit(): void {
  }

}
