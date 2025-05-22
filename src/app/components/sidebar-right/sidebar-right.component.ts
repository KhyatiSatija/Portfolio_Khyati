// src/app/components/sidebar-right/sidebar-right.component.ts
import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

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
export class SidebarRightComponent implements OnInit {
  private isBrowser: boolean;
  
  navLinks: NavLink[] = [
    { name: 'About', link: '#about', active: true },
    { name: 'What I Do', link: '#what-i-do', active: false },
    { name: 'Experience', link: '#experience', active: false },
    { name: 'Projects', link: '#projects', active: false },
    { name: 'Skills', link: '#skills', active: false},
    { name: 'Education', link: '#education', active: false },
    { name: 'Achievements', link: '#achievements', active: false },
    { name: 'Extracurriculars', link: '#extracurriculars', active: false },
    { name: 'Contact', link: '#contact', active: false }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.onWindowScroll(); 
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Only execute scroll logic in browser
    if (!this.isBrowser) return;

    const sections = document.querySelectorAll('section');
    let current = '';

    for (const section of Array.from(sections)) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 100) { // Use -100 for better accuracy
        current = section.getAttribute('id') || '';
      }
    }

    this.navLinks.forEach(link => {
      link.active = link.link === `#${current}`;
    });

    // Scroll progress calculation
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const progressBar = document.getElementById('scrollProgressBar');
    if (progressBar) {
      progressBar.style.height = `${scrollPercent}%`;
    }
  }
}