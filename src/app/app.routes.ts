import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InitialRedirectComponent } from './components/inititalRedirectComponent/inititalRedirectComponent.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { CertificateComponent } from './components/certificates/certificate.component';

export const routes: Routes = [
    { path: '', component: InitialRedirectComponent },
    { path: 'work', component: WorkComponent },
    { path: 'about', component: AboutComponent },
    { path: 'education', component: EducationComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'certificate', component: CertificateComponent }
];
