import { Component, Input, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service.ts.service';
import { CommonModule } from '@angular/common';
import { Work } from '../../models/work.model';
import { JsonData } from '../../models/data.model';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-work',
  standalone: true,
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  imports: [CommonModule, ContactComponent],
})
export class WorkComponent implements OnInit {
  @Input() data!: JsonData;
  works!: Work[];

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.resumeService.data$.subscribe((data) => {
      if (data) {
        this.works = data.work;
      }
    });
  }

  formatDate(date: string) {
    return new Intl.DateTimeFormat('nl', { month: 'long', year: 'numeric' }).format(new Date(date));
  }

}
