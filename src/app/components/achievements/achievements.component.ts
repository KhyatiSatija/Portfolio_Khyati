import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Achievement {
  id: number;
  title: string;
  organization: string;
  description: string;
  amount?: string;
  period: string;
  icon: string;
  category: string;
  highlights: string[];
  color: string;
}

@Component({
  selector: 'app-achievements',
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent implements OnInit {
  achievements: Achievement[] = [
    {
      id: 1,
      title: 'Generation Google Scholar (APAC)',
      organization: 'Google',
      description: 'Awarded a $2,500 scholarship by Google for academic excellence, leadership, and commitment to diversity',
      amount: '$2,500',
      period: 'June 2024',
      icon: '🎓',
      category: 'scholarship',
      highlights: ['Academic Excellence', 'Leadership', 'Diversity Commitment'],
      color: 'google'
    },
    {
      id: 2,
      title: 'Top 1% Women Engineers Program',
      organization: 'TalentSprint powered by Google',
      description: 'Selected in top 220 students among 22,000 applicants, Received a 100% program scholarship',
      period: 'April 2023 - March 2025',
      icon: '👩‍💻',
      category: 'program',
      highlights: ['Top 220 out of 22,000', '100% Scholarship', 'Elite Selection'],
      color: 'talent'
    },
    {
      id: 3,
      title: 'Smart India Hackathon Top 30',
      organization: 'Government of India',
      description: 'Top 30 out of 250 teams; developed a Myoelectric Prosthetic Arm with 3D printing, muscle sensors, servo motors, Arduino',
      period: '2022-2025',
      icon: '🏆',
      category: 'competition',
      highlights: ['Top 30 out of 250', 'Prosthetic Arm Development', 'IoT & 3D Printing'],
      color: 'hackathon'
    },
    {
      id: 4,
      title: 'Four-time Dean\'s List Award',
      organization: 'University',
      description: 'Maintained a highh CGPA, ranking in the top 1% of the university every semester',
      period: '2022 - 2025',
      icon: '🌟',
      category: 'academic',
      highlights: ['CGPA 9.7', 'Top 1% Ranking', '6x Consecutive Awards'],
      color: 'academic'
    }
  ];

  selectedCategory: string = 'all';
  visibleAchievements: Achievement[] = [];

  ngOnInit(): void {
    this.visibleAchievements = this.achievements;
  }

  filterAchievements(category: string): void {
    this.selectedCategory = category;
    if (category === 'all') {
      this.visibleAchievements = this.achievements;
    } else {
      this.visibleAchievements = this.achievements.filter(
        achievement => achievement.category === category
      );
    }
  }

  getFilteredAchievements(): Achievement[] {
    return this.visibleAchievements;
  }

  trackByAchievement(index: number, achievement: Achievement): number {
    return achievement.id;
  }

  getTotalAwards(): number {
    return this.achievements.length;
  }

  getScholarshipValue(): string {
    const scholarships = this.achievements.filter(a => a.amount);
    const total = scholarships.reduce((sum, a) => {
      const amount = parseFloat(a.amount!.replace(/[$,]/g, ''));
      return sum + amount;
    }, 0);
    return `$${total.toLocaleString()}`;
  }

  getYearsOfExcellence(): string {
    const years = new Set<string>();
    this.achievements.forEach(achievement => {
      const period = achievement.period;
      if (period.includes('-')) {
        const [start, end] = period.split('-').map(p => p.trim());
        const startYear = parseInt(start.match(/\d{4}/)?.[0] || '0');
        const endYear = parseInt(end.match(/\d{4}/)?.[0] || '0');
        for (let year = startYear; year <= endYear; year++) {
          years.add(year.toString());
        }
      } else {
        const year = period.match(/\d{4}/)?.[0];
        if (year) years.add(year);
      }
    });
    return `${years.size}+`;
  }
}