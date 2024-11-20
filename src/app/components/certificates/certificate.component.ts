import { ResumeService } from '../../services/resume.service.ts.service';
import { Component, Input, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { NewLineToBrPipe } from '../../pipes/newline-to-br.pipe';
import { JsonData } from '../../models/data.model';
import { ContactComponent } from '../contact/contact.component';
import { Certificate } from '../../models/certificate.model';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
  imports: [CommonModule, NewLineToBrPipe, ContactComponent],
  standalone: true,
})
export class CertificateComponent implements OnInit {

  @Input() data!: JsonData 
  constructor(private resumeService: ResumeService, private cdr: ChangeDetectorRef) {}

  certificates!: Certificate[];

  ngOnInit() {
    this.resumeService.data$.subscribe(data => {
      if (data) {
        this.certificates = data.certificates;
      }
    });
  }
}
