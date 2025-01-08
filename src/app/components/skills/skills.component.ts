import { Component, Input, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service.ts.service';
import { CommonModule } from '@angular/common';
import { JsonData } from '../../models/data.model';
import { ContactComponent } from '../contact/contact.component';
import { Skill } from '../../models/skill.model';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule, ContactComponent],
})
export class SkillsComponent extends BaseComponent implements OnInit {
  @Input() data!: JsonData;
  skills!: Skill[];
  constructor(private resumeService: ResumeService) { 
    super();
  }

  ngOnInit() {
    this.resumeService.data$.subscribe((data) => {
      if (data) {
        this.skills = data.skills;
      }
    });
  }

}
