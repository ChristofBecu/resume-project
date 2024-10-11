import { ResumeService } from '../../services/resume.service.ts.service';
import { Component, Input, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLineToBrPipe } from '../../pipes/newline-to-br.pipe';
import { Profile } from '../../models/profile.model';
import { Basics } from '../../models/basics.model';
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

}
