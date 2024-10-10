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
      const newLineToBrPipe = new NewLineToBrPipe();
      this.basics = data?.basics;
      this.transformedSummary = newLineToBrPipe.transform(
        this.basics?.summary || ''
      );
      changeCurrentButtonColor(this.currentRoute);
    });
  }

  navigateTo(route: string) {
    this.currentRoute = route;
    console.log('route', route);
    this.router.navigate([route], { skipLocationChange: true });
    // set the class of the current button to .currentButton
    changeCurrentButtonColor(route);
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
