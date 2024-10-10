import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service.ts.service';
import { CommonModule } from '@angular/common';
import { NewLineToBrPipe } from '../../pipes/newline-to-br.pipe';
import { Profile } from '../../models/profile.model';
import { Basics } from '../../models/basics.model';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule, NewLineToBrPipe],
})
export class AboutComponent implements OnInit {

  constructor(private resumeService: ResumeService) { }
  transformedSummary!: string;
  basics!: Basics;
  location!: Location;
  hoverText: string = '';

  ngOnInit() {
    this.resumeService.getResumeData().subscribe(data => {
      const newLineToBrPipe = new NewLineToBrPipe();
      this.basics = data?.basics;
      console.log(this.basics);
      this.location = data?.basics?.location || [];
      console.log(this.location);
      this.transformedSummary = newLineToBrPipe.transform(this.basics?.summary || '');
      
      this.updateProfileIcons();
    }); 
  }

  updateProfileIcons() {
    this.basics?.profiles?.forEach((profile: Profile) => {
      switch (profile.network.toLowerCase()) {
        case "google-plus":
        case "googleplus":
          profile.iconClass = "fab fa-google-plus";
          break;
        case "flickr":
        case "flicker":
          profile.iconClass = "fab fa-flickr";
          break;
        case "dribbble":
        case "dribble":
          profile.iconClass = "fab fa-dribbble";
          break;
        case "codepen":
          profile.iconClass = "fab fa-codepen";
          break;
        case "soundcloud":
          profile.iconClass = "fab fa-soundcloud";
          break;
        case "reddit":
          profile.iconClass = "fab fa-reddit";
          break;
        case "tumblr":
        case "tumbler":
          profile.iconClass = "fab fa-tumblr";
          break;
        case "stack-overflow":
        case "stackoverflow":
          profile.iconClass = "fab fa-stack-overflow";
          break;
        case "blog":
        case "rss":
          profile.iconClass = "fas fa-rss";
          break;
        case "gitlab":
          profile.iconClass = "fab fa-gitlab";
          break;
        case "keybase":
          profile.iconClass = "fas fa-key";
          break;
        default:
          // try to automatically select the icon based on the name
          profile.iconClass = "fab fa-" + profile.network.toLowerCase();
      }
      if (!profile.url) {
        profile.url = profile.network + ": " + profile.username;
    }
    });
  }

  updateHoverText(text: string) {
    this.hoverText = text;
  }

  clearHoverText() {
    this.hoverText = '';
  } 

  openProfile(profile: Profile) {
    if (profile.url) {
      window.open
      (profile.url, '_blank');
    }
  }


}
