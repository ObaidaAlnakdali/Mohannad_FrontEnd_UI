import { Component, OnInit, Input } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input () Name = '';
  @Input () Value = '';
  constructor() { }

  ngOnInit(): void {
    (function($) {
      "use strict";

      // Skills section
      $('.skills-content').waypoint(function() {
        $('.progress .progress-bar').each(function() {
          $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
      }, {
        offset: '80%'
      });




    })(jQuery);
  }

}
