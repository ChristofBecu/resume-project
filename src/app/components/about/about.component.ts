import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ResumeService } from '../../services/resume.service.ts.service';
import { CommonModule } from '@angular/common';
import { NewLineToBrPipe } from '../../pipes/newline-to-br.pipe';
import { Profile } from '../../models/profile.model';
import { Basics } from '../../models/basics.model';
import { JsonData } from '../../models/data.model';
import { ContactComponent } from '../contact/contact.component';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule, NewLineToBrPipe, ContactComponent, NewLineToBrPipe],
})
export class AboutComponent extends BaseComponent implements OnInit {
  @Input() data!: JsonData 
  
  constructor(
    private resumeService: ResumeService,
    private newLineToBrPipe: NewLineToBrPipe ) {
    super();
    }

  transformedSummary!: string;
  basics!: Basics;
  hoverText: string = '';

  ngOnInit() {
    this.resumeService.data$.subscribe(data => {
      if (data) {
        this.basics = data.basics;
        this.transformedSummary = this.newLineToBrPipe.transform(this.basics?.summary || '');
      }
    });
  }
}
