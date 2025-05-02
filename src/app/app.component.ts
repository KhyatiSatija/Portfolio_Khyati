// app.component.ts is the source file that describes the app-root component. This is the top-level Angular component in the app.
//  A component is the basic building block of an Angular application. The component description includes the component's code,
//  HTML template, and styles, which can be described in this file, or in separate files.
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { AboutComponent } from './components/about/about.component';
import { WhatIDoComponent } from './components/what-i-do/what-i-do.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ExtracurricularsComponent } from './components/extracurriculars/extracurriculars.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TerminalComponent } from './components/terminal/terminal.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    AboutComponent,
    WhatIDoComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    AchievementsComponent,
    ExtracurricularsComponent,
    ContactComponent,
    FooterComponent,
    TerminalComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isTerminalMode = false;
  
  toggleMode() {
    this.isTerminalMode = !this.isTerminalMode;
  }
}