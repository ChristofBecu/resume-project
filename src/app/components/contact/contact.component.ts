import { Component, Input, OnInit } from '@angular/core';
import { JsonData } from '../../models/data.model';
import { ResumeService } from '../../services/resume.service.ts.service';
import { Profile } from '../../models/profile.model';
import { Basics } from '../../models/basics.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ContactComponent implements OnInit {
  @Input() data!: JsonData 
  hoverText: string = "";
  basics!: Basics;
  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumeService.data$.subscribe(data => {
      if (data) {
        this.basics = data.basics;
console.log(this.basics)
        this.updateProfileIcons();
      }
    });
  }

  updateProfileIcons() {
    if (this.basics !== undefined && this.basics.profiles !== undefined) {
      this.basics.profiles.forEach((profile: Profile) => {
        console.log("updating icons")
        switch (profile.network.toLowerCase()) {
          case 'google-plus':
          case 'googleplus':
            profile.iconClass = 'fab fa-google-plus';
            break;
          case 'flickr':
          case 'flicker':
            profile.iconClass = 'fab fa-flickr';
            break;
          case 'dribbble':
          case 'dribble':
            profile.iconClass = 'fab fa-dribbble';
            break;
          case 'codepen':
            profile.iconClass = 'fab fa-codepen';
            break;
          case 'soundcloud':
            profile.iconClass = 'fab fa-soundcloud';
            break;
          case 'reddit':
            profile.iconClass = 'fab fa-reddit';
            break;
          case 'tumblr':
          case 'tumbler':
            profile.iconClass = 'fab fa-tumblr';
            break;
          case 'stack-overflow':
          case 'stackoverflow':
            profile.iconClass = 'fab fa-stack-overflow';
            break;
          case 'blog':
          case 'rss':
            profile.iconClass = 'fas fa-rss';
            break;
          case 'gitlab':
            profile.iconClass = 'fab fa-gitlab';
            break;
          case 'keybase':
            profile.iconClass = 'fas fa-key';
            break;
          default:
            // try to automatically select the icon based on the name
            profile.iconClass = 'fab fa-' + profile.network.toLowerCase();
        }
        if (!profile.url) {
          profile.url = profile.network + ': ' + profile.username;
        }
      });
    }
  }

  updateHoverText(text: string) {
    this.hoverText = text;
  }

  clearHoverText() {
    this.hoverText = '';
  }

  openProfile(profile: Profile) {
    if (profile.url) {
      window.open(profile.url, '_blank');
    }
  }

}
