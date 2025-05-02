// src/app/components/sidebar-right/sidebar-right.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavLink {
  name: string;
  link: string;
  active: boolean;
}

@Component({
  selector: 'app-sidebar-right',
  imports: [CommonModule],
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss']
})
export class SidebarRightComponent {
  navLinks: NavLink[] = [
    { name: 'About', link: '#about', active: true },
    { name: 'What I Do', link: '#what-i-do', active: false },
    { name: 'Experience', link: '#experience', active: false },
    { name: 'Projects', link: '#projects', active: false },
    { name: 'Education', link: '#education', active: false },
    { name: 'Achievements', link: '#achievements', active: false },
    { name: 'Extracurriculars', link: '#extracurriculars', active: false },
    { name: 'Contact', link: '#contact', active: false }
  ];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 300) {
        current = section.getAttribute('id') || '';
      }
    });
    
    this.navLinks.forEach(link => {
      link.active = link.link === `#${current}`;
    });
  }
}