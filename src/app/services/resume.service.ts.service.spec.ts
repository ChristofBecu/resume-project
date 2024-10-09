/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Resume.service.tsService } from './resume.service.ts.service';

describe('Service: Resume.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Resume.service.tsService]
    });
  });

  it('should ...', inject([Resume.service.tsService], (service: Resume.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});
