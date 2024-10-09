// src/app/services/resume.service.ts
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private gistUrl: string;

  constructor() {
    this.gistUrl = environment.gistResumeUrl || '/assets/resume.json';
  }

  getResumeData(): Observable<any> {
    return from(fetch(this.gistUrl).then(response => response.json()));
  }
}
