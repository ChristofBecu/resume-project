import { ResumeService } from '../../services/resume.service.ts.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { JsonData } from '../../models/data.model';
import { ContactComponent } from '../contact/contact.component';
import { Education } from '../../models/education.model';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  imports: [CommonModule, ContactComponent],
  standalone: true,
})
export class EducationComponent extends BaseComponent implements OnInit {
  @Input() data!: JsonData 
  constructor(private resumeService: ResumeService) {
    super();
  }

  educations!: Education[];

  ngOnInit() {
    this.resumeService.data$.subscribe(data => {
      if (data) {
        this.educations = data.education;
      }
    });

  }
  
  getFormattedDates(start: string, end: string) : string {
    const startYear = new Date(start).getFullYear();
    const endYear = new Date(end).getFullYear();

    if (Number.isNaN(startYear) && Number.isNaN(endYear)) {
      return '';
    }

    if (!Number.isNaN(startYear) && Number.isNaN(endYear)) {
      return `${startYear.toString()} - Present`;
    }

    if (Number.isNaN(startYear) && !Number.isNaN(endYear)) {
      return endYear.toString();
    }

    if (startYear == endYear) {
      return startYear.toString();
    }

    return `${startYear.toString()} - ${endYear.toString()}`;
  }
}
