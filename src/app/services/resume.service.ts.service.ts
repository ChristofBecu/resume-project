// src/app/services/resume.service.ts
import { Injectable } from '@angular/core';
import { catchError, from, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private gistUrl: string;

  constructor() {
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    this.gistUrl = corsProxy + (environment.gistResumeUrl || '/assets/resume.json');
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
