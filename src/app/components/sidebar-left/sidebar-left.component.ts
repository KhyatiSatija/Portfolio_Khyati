// src/app/components/sidebar-left/sidebar-left.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar-left',
  imports: [CommonModule],
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})
export class SidebarLeftComponent {
  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/KhyatiSatija',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/khyati-satija-computer-science/',
      icon: 'fab fa-linkedin-in'
    },
    {
      name: 'Email',
      url: 'mailto:satijakhyati2003@gmail.com',
      icon: 'fas fa-envelope'
    },
    {
      name: 'YouTube',
      url: '#',
      icon: 'fab fa-youtube'
    },
    {
      name: 'Instagram',
      url: '#',
      icon: 'fab fa-instagram'
    }
  ];
}