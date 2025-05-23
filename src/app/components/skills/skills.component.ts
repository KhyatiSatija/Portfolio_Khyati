import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 90, category: 'language' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 85, category: 'language' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 80, category: 'language' },
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', level: 75, category: 'language' },
        { name: 'Elixir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg', level: 70, category: 'language' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 80, category: 'language' }
      ]
    },
    {
      title: 'Web Development',
      icon: '🌐',
      skills: [
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 90, category: 'web' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 85, category: 'web' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 80, category: 'web' },
        { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', level: 85, category: 'web' },
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', level: 75, category: 'web' },
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', level: 70, category: 'web' },
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 75, category: 'web' },
        { name: 'Phoenix', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original.svg', level: 65, category: 'web' }
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 85, category: 'database' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 80, category: 'database' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', level: 75, category: 'database' },
        { name: 'MS SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', level: 70, category: 'database' }
      ]
    },
    {
      title: 'Machine Learning',
      icon: '🤖',
      skills: [
        { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', level: 85, category: 'ml' },
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', level: 90, category: 'ml' },
        { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', level: 85, category: 'ml' },
        { name: 'Keras', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg', level: 80, category: 'ml' },
        { name: 'Scikit-Learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', level: 75, category: 'ml' },
        { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', level: 70, category: 'ml' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 90, category: 'tool' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 80, category: 'tool' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', level: 85, category: 'tool' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 95, category: 'tool' },
        { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', level: 75, category: 'tool' },
        { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg', level: 70, category: 'tool' },
        { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', level: 85, category: 'tool' },
        { name: 'MATLAB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg', level: 75, category: 'tool' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: '🧠',
      skills: [
        { name: 'Problem Solving', icon: '🔍', level: 95, category: 'soft' },
        { name: 'Self Learning', icon: '📚', level: 90, category: 'soft' },
        { name: 'Project Management', icon: '📊', level: 85, category: 'soft' },
        { name: 'Leadership', icon: '👥', level: 80, category: 'soft' }
      ]
    }
  ];

  selectedCategory: string = 'all';
  animationDelay: number = 0;

  constructor() {
    // Initialize animation delays
    this.skillCategories.forEach((category, categoryIndex) => {
      category.skills.forEach((skill, skillIndex) => {
        skill.level = skill.level || 0;
      });
    });
  }

  filterSkills(category: string): void {
    this.selectedCategory = category;
    this.animationDelay = 0;
  }

  getFilteredCategories(): SkillCategory[] {
    if (this.selectedCategory === 'all') {
      return this.skillCategories;
    }
    return this.skillCategories.filter(cat => 
      cat.skills.some(skill => skill.category === this.selectedCategory)
    );
  }

  trackByCategory(index: number, category: SkillCategory): string {
    return category.title;
  }

  trackBySkill(index: number, skill: Skill): string {
    return skill.name;
  }

  getTotalSkillsCount(): number {
    return this.skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjNGMwMDk5Ii8+Cjx0ZXh0IHg9IjEyIiB5PSIxNiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+PzwvdGV4dD4KPC9zdmc+Cg==';
    }
  }
}