// src/app/services/resume.service.ts
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private gistUrl: string;

  constructor() {
    this.gistUrl = (window as any).GISTRESUME || '/assets/resume.json';
  }

  getResumeData(): Observable<any> {
    return from(fetch(this.gistUrl).then(response => response.json()));
  }
}
