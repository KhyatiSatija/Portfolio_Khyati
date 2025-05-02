import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Data Analyst Intern',
      company: 'National Informatics Centre',
      period: 'July 2024',
      description: 'Built a Django web app with MS SQL Server, creating dynamic models, views, and templates to support data visualization.'
    },
    {
      title: 'Student Ambassador',
      company: 'Bennett University',
      period: 'June 2023',
      description: 'Counseled 200+ prospective students, boosting application inquiries by 25%. Coordinated a 3-day summer school for 100 high school students, increasing STEM interest by 40%.'
    },
    {
      title: 'Women Tech Lead',
      company: 'Google Developer Student Club',
      period: 'August 2023',
      description: 'Conducted multiple technical workshops for 200+ women on coding and skill development.'
    }
  ];
}