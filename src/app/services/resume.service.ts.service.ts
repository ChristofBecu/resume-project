// src/app/services/resume.service.ts
import { Injectable } from '@angular/core';
import { catchError, from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private gistUrl: string;

  constructor() {
    if (window.location.hostname === 'localhost') {
      this.gistUrl = '/assets/resume.json';
    } else {
      this.gistUrl = '/resume-project/assets/resume.json';
    }
  }

  getResumeData(): Observable<any> {
    return from(fetch(this.gistUrl).then(response => response.json())).pipe(
      catchError(error => {
        console.error('Error fetching resume data:', error);
        // Return an observable with a user-friendly error message or fallback data
        return of({ error: 'Failed to fetch resume data' });
      })
    );
  }
}
