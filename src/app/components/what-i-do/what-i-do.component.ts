import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-what-i-do',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './what-i-do.component.html',
  styleUrl: './what-i-do.component.scss'
})
export class WhatIDoComponent {
  
  services = [
    {
      title: 'SOFTWARE ENGINEERING',
      description: 'Building scalable, efficient, and robust software solutions using modern technologies and best practices. Experienced in full-stack development, system architecture, and agile methodologies.'
    },
    {
      title: 'CONTENT CREATION',
      description: 'Creating engaging digital content including technical tutorials, blogs, videos, and educational materials. Specializing in making complex concepts accessible and interesting.'
    },
    {
      title: 'WEB DEVELOPMENT',
      description: 'Crafting responsive, interactive web applications using cutting-edge frameworks and technologies. Focus on user experience, performance optimization, and modern design principles.'
    },
    {
      title: 'BACKEND',
      description: 'Developing secure, scalable server-side applications and APIs. Expertise in database design, cloud services, microservices architecture, and performance optimization.'
    },
    {
      title: 'FRONTEND',
      description: 'Creating stunning, responsive user interfaces with modern frameworks like Angular, React, and Vue. Emphasis on accessibility, performance, and delightful user experiences.'
    },
    {
      title: 'TEACHING',
      description: 'Mentoring and educating aspiring developers through workshops, tutorials, and one-on-one guidance. Passionate about sharing knowledge and helping others grow in tech.'
    }
  ];

  hoveredIndex: number | null = null;

  onMouseEnter(index: number): void {
    this.hoveredIndex = index;
  }

  onMouseLeave(): void {
    this.hoveredIndex = null;
  }
}