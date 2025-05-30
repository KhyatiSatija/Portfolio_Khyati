import { Component, Input, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface NavLink {
  name: string;
  link: string;
  id: string; // Add id for easier comparison
}

@Component({
  selector: 'app-sidebar-right',
  imports: [CommonModule],
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss']
})
export class SidebarRightComponent implements OnInit {
  @Input() activeSection: string = 'about';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  navLinks: NavLink[] = [
    { name: 'About', link: '#about', id: 'about' },
    { name: 'What I Do', link: '#what-i-do', id: 'what-i-do' },
    { name: 'Experience', link: '#experience', id: 'experience' },
    { name: 'Projects', link: '#projects', id: 'projects' },
    { name: 'Skills', link: '#skills', id: 'skills' },
    { name: 'Education', link: '#education', id: 'education' },
    { name: 'Achievements', link: '#achievements', id: 'achievements' },
    { name: 'Extracurriculars', link: '#extracurriculars', id: 'extracurriculars' },
    { name: 'Contact', link: '#contact', id: 'contact' }
  ];

  ngOnInit(): void {
    // Only run in browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollProgress();
    }
  }

  private setupScrollProgress(): void {
    // Double-check we're in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const progressBar = document.getElementById('scrollProgressBar');
    if (!progressBar) return;

    const updateScrollProgress = () => {
      if (!isPlatformBrowser(this.platformId)) return;
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      progressBar.style.height = `${scrollPercent}%`;
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call
  }

  // Method to handle smooth scrolling when clicking nav links
  scrollToSection(event: Event, link: string): void {
    // Only run in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    event.preventDefault();
    const targetId = link.substring(1); // Remove the '#' from the link
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}