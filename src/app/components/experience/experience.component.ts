import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service.ts.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  imports: [CommonModule, HttpClientModule]
})
export class ExperienceComponent implements OnInit {
  experience!: any[];

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumeService.getResumeData().subscribe(data => {
      this.experience = data.work;
    });
  }
}