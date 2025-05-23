import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  
  experiences = [
    {
      id: 1,
      position: 'Software Engineer Intern',
      company: 'Google',
      period: 'June - August 2025',
      type: 'Internship',
      description: 'Working on cutting-edge software solutions and contributing to large-scale systems that impact millions of users worldwide. Collaborating with senior engineers on innovative projects using modern technologies and agile methodologies.',
      skills: ['Python', 'Go', 'Cloud Computing', 'System Design'],
      isLeft: false
    },
    {
      id: 2,
      position: 'Data Analyst Intern',
      company: 'National Informatics Centre',
      period: 'July - September 2024',
      type: 'Internship',
      description: 'Built a comprehensive Django web application integrated with MS SQL Server, creating dynamic models, views, and templates to support advanced data visualization and analytics for government data systems.',
      skills: ['Django', 'MS SQL Server', 'Data Visualization', 'Python'],
      isLeft: true
    },
    {
      id: 3,
      position: 'Student Ambassador',
      company: 'Bennett University',
      period: 'June 2024',
      type: 'Leadership',
      description: 'Led student outreach initiatives, counseling 200+ prospective students and boosting application inquiries by 25%. Successfully coordinated a 3-day summer school program for 100 high school students, increasing STEM interest by 40%.',
      skills: ['Leadership', 'Communication', 'Event Management', 'Mentoring'],
      isLeft: false
    },
    {
      id:  4,
      position: 'Women Developer Lead',
      company : 'Google Developer Groups',
      period : 'January 2023 - March 2025',
      type: 'Leadership',
      description : 'Conducted workshops to empower women in university',
      skills : ['Leadership', 'Public Speaking', 'Mentorship'],
      isLeft: true
    }
  ];

  hoveredExperience: number | null = null;

  onMouseEnter(id: number): void {
    this.hoveredExperience = id;
  }

  onMouseLeave(): void {
    this.hoveredExperience = null;
  }
}