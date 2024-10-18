import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service.ts.service';
import { CommonModule } from '@angular/common';
import { NewLineToBrPipe } from '../../pipes/newline-to-br.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule, NewLineToBrPipe],
})
export class HeaderComponent implements OnInit {
  constructor(private resumeService: ResumeService, private router: Router) {}
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
    this.resumeService.getResumeData().subscribe((data) => {
      console.log(data);
      const newLineToBrPipe = new NewLineToBrPipe();
      this.basics = data?.basics;
      this.jsonResumeUrl = data?.meta?.link;
      console.log(this.jsonResumeUrl);
      this.transformedSummary = newLineToBrPipe.transform(
        this.basics?.summary || ''
      );
      changeCurrentButtonColor(this.currentRoute);
    });
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
