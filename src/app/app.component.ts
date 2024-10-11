import { Component, importProvidersFrom, ChangeDetectorRef } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { ResumeService } from './services/resume.service.ts.service';
import { AboutComponent } from './components/about/about.component';
import { JsonData } from './models/data.model';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';

registerLocaleData(localeNl);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet,  HeaderComponent, AboutComponent]
})


export class AppComponent {
  name: string | undefined;
  image: string | undefined;
  data! : JsonData
  constructor(private resumeService: ResumeService, private cdr : ChangeDetectorRef) { }

  ngOnInit() {
    this.resumeService.getResumeData().subscribe(data => {
      this.data = data;
      this.resumeService.setData(this.data);
      this.name = data.basics?.name;
      this.image = data.basics?.image;
      this.updateTitle();
      this.updateFavicon();
      this.cdr.detectChanges();
    })
  }

  updateTitle() {
    if (this.name) {
      document.title = this.name;
    }
  }

  updateFavicon() {
    if (this.image) {
      const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
      if (link) {
        link.href = this.image;
      } else {
        const newLink: HTMLLinkElement = document.createElement('link');
        newLink.rel = 'icon';
        newLink.href = this.image;
        document.head.appendChild(newLink);
      }
    }
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'nl' }
  ],
});