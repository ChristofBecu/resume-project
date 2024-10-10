import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service.ts.service';
import { CommonModule } from '@angular/common';
import { Work } from '../../models/work.model';

@Component({
  selector: 'app-work',
  standalone: true,
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  imports: [CommonModule]
})
export class WorkComponent implements OnInit {
  work!: Work[];

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumeService.getResumeData().subscribe(data => {
      this.work = data.work;
    });
  }
}