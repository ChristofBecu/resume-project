import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResumeService } from '../../services/resume.service.ts.service';
import { CommonModule } from '@angular/common';
import { NewLineToBrPipe } from '../../pipes/newline-to-br.pipe';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, NewLineToBrPipe],
})
export class HeaderComponent extends BaseComponent implements OnInit {
  
  constructor(
    private resumeService: ResumeService, 
    private router: Router, 
    private cdr : ChangeDetectorRef,
    private newLineToBrPipe: NewLineToBrPipe
  ) {
    super();
  }
  transformedSummary: string | undefined;
  basics!: any;
  jsonResumeUrl = '';
  currentRoute = 'about';

  routes = [
    {
      route: 'about',
      label: 'About',
    },
    {
      route: 'work',
      label: 'Work',
    },
    {
      route: 'education',
      label: 'Education',
    },
    {
      route: 'skills',
      label: 'Skills',
    },
    {
      route: 'projects',
      label: 'Projects',
    },
    {
      route: 'contact',
      label: 'Contact',
    },
  ];

  ngOnInit() {
    this.subscription.add(
      this.resumeService.getResumeData().subscribe((data) => {
        this.basics = data?.basics;
        this.jsonResumeUrl = data?.meta?.link;
        this.transformedSummary = this.newLineToBrPipe.transform(
          this.basics?.summary || ''
        );
        changeCurrentButtonColor(this.currentRoute);
        this.cdr.detectChanges();
    }));
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.cdr.detach();
  }

  navigateTo(route: string) {
    if (route === "print") {
      window.open(this.jsonResumeUrl);
    }
    else {
      this.currentRoute = route;
      this.router.navigate([route], { skipLocationChange: true });
      changeCurrentButtonColor(route);
    }
  }
}

function changeCurrentButtonColor(route: string) {
  // every button has an id of the route name+button, change the class to currentButton
  const buttons = document.querySelectorAll('.menubutton');
  buttons.forEach((button) => {
    button.classList.remove('currentbutton');
  });
  const currentButton = document.getElementById(route + 'button');
  currentButton?.classList.add('currentbutton');
}
