import { ResumeService } from '../../services/resume.service.ts.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { JsonData } from '../../models/data.model';
import { ContactComponent } from '../contact/contact.component';
import { Certificate } from '../../models/certificate.model';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
  imports: [CommonModule, ContactComponent],
  standalone: true,
})
export class CertificateComponent extends BaseComponent implements OnInit {

  @Input() data!: JsonData 
  constructor(
    private resumeService: ResumeService
  ) {
    super();
  }

  certificates!: Certificate[];

  ngOnInit() {
    this.resumeService.data$.subscribe(data => {
      if (data) {
        this.certificates = data.certificates;
      }
    });
  }
}
