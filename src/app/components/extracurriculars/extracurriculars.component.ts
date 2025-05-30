import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Extracurricular {
  id: number;
  title: string;
  organization: string;
  duration: string;
  description: string;
  highlights: string[];
  icon: string;
  color: string;
}

@Component({
  selector: 'app-extracurriculars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extracurriculars.component.html',
  styleUrls: ['./extracurriculars.component.scss']
})
export class ExtracurricularsComponent {
  extracurriculars: Extracurricular[] = [
    {
      id: 1,
      title: 'Women Tech Lead',
      organization: 'Google Developer Student Club',
      duration: 'August 2023 - Present',
      description: 'Leading technical initiatives and fostering women in tech community',
      highlights: [
        'Conducted multiple technical workshops for 200+ women',
        'Focused on coding and skill development programs',
        'Built inclusive tech community and mentorship networks'
      ],
      icon: '👩‍💻',
      color: 'violet'
    },
    {
      id: 2,
      title: 'Include <her> Cohort 4.0',
      organization: 'Microsoft Azure',
      duration: 'August 2023 - November 2023',
      description: 'Selected participant in Microsoft\'s inclusive tech program',
      highlights: [
        'Explored OpenAI fundamentals and Generative AI principles',
        'Practical implementation of GPT-based chatbots',
        'DALLE 3 integration for image generation using Python and API'
      ],
      icon: '🚀',
      color: 'purple'
    },
    {
      id: 3,
      title: 'Codess Cafe Mentee',
      organization: 'Machine Learning Cohort 1',
      duration: 'September 2023 - Present',
      description: 'Pro-bono mentorship program for collegiate women in tech',
      highlights: [
        'Selected for exclusive mentorship program',
        'Specialized Machine Learning cohort participation',
        'Supporting women in tech career development'
      ],
      icon: '🤖',
      color: 'light-purple'
    }
  ];

  constructor() { }

  trackByFn(index: number, item: Extracurricular): number {
    return item.id;
  }
}