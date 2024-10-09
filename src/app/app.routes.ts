import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './components/experience/experience.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InitialRedirectComponent } from './components/inititalRedirectComponent/inititalRedirectComponent.component';

export const routes: Routes = [
    { path: '', component: InitialRedirectComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'about', component: AboutComponent },
    { path: 'education', component: EducationComponent },
    { path: 'skills', component: SkillsComponent },
];
