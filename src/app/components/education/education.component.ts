import { ResumeService } from '../../services/resume.service.ts.service';
import { Component, Input, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { NewLineToBrPipe } from '../../pipes/newline-to-br.pipe';
import { JsonData } from '../../models/data.model';
import { ContactComponent } from '../contact/contact.component';
import { Education } from '../../models/education.model';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  imports: [CommonModule, NewLineToBrPipe, ContactComponent],
  standalone: true,
})
export class EducationComponent implements OnInit {
  @Input() data!: JsonData 
  constructor(private resumeService: ResumeService, private cdr: ChangeDetectorRef) {}

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
