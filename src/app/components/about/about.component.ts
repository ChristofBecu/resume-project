import { Component, Input, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ResumeService } from '../../services/resume.service.ts.service';
import { CommonModule } from '@angular/common';
import { NewLineToBrPipe } from '../../pipes/newline-to-br.pipe';
import { Profile } from '../../models/profile.model';
import { Basics } from '../../models/basics.model';
import { JsonData } from '../../models/data.model';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule, NewLineToBrPipe, ContactComponent],
})
export class AboutComponent implements OnInit {
  @Input() data!: JsonData 
  
  constructor(private resumeService: ResumeService, private cdr: ChangeDetectorRef) {}

  transformedSummary!: string;
  basics!: Basics;
  hoverText: string = '';

  ngOnInit() {
    this.resumeService.data$.subscribe(data => {
      if (data) {
        this.basics = data.basics;
        const newLineToBrPipe = new NewLineToBrPipe();
        this.transformedSummary = newLineToBrPipe.transform(this.basics?.summary || '');
      }
    });
  }
}
