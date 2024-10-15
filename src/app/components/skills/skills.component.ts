import { Component, Input, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service.ts.service';
import { CommonModule } from '@angular/common';
import { JsonData } from '../../models/data.model';
import { ContactComponent } from '../contact/contact.component';
import { Skill } from '../../models/skill.model';


@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule, ContactComponent],
})
export class SkillsComponent implements OnInit {
  @Input() data!: JsonData;
  skills!: Skill[];
  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumeService.data$.subscribe((data) => {
      if (data) {
        this.skills = data.skills;
        console.log(this.skills);
      }
    });
  }

}
