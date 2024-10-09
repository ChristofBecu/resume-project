import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { ResumeService } from './services/resume.service.ts.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet,  HeaderComponent]
})


export class AppComponent {
  name: string | undefined;
  image: string | undefined;
  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumeService.getResumeData().subscribe(data => {
      this.name = data.basics?.name;
      this.image = data.basics?.image;
      this.updateTitle();
      this.updateFavicon();
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
  providers: [provideRouter(routes)],
});