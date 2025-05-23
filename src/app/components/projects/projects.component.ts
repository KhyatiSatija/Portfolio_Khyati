// projects.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  date: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  filterCategories = [
    { key: 'all', label: 'All Projects', icon: '🚀' },
    { key: 'web', label: 'Web Dev', icon: '🌐' },
    { key: 'mobile', label: 'Mobile', icon: '📱' },
    { key: 'ml', label: 'AI/ML', icon: '🤖' },
    { key: 'system', label: 'Systems', icon: '⚙️' }
  ];

  allProjects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI/UX and secure payment integration.',
      longDescription: 'A comprehensive e-commerce platform built with Angular and Node.js, featuring user authentication, product management, shopping cart, and Stripe payment integration.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe API', 'SCSS'],
      category: 'web',
      date: '2024-01-15',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://your-ecommerce-demo.com',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      longDescription: 'A comprehensive task management solution with drag-and-drop functionality, real-time collaboration, and advanced filtering options.',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      category: 'mobile',
      date: '2023-11-20',
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: 'https://your-task-app.com',
      imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 3,
      title: 'AI Image Classifier',
      description: 'Machine learning model for image classification with 95% accuracy using TensorFlow.',
      longDescription: 'An advanced image classification system using convolutional neural networks, trained on custom datasets with data augmentation techniques.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'Docker'],
      category: 'ml',
      date: '2023-09-10',
      githubUrl: 'https://github.com/yourusername/ai-classifier',
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Real-time Chat System',
      description: 'A scalable real-time messaging system with WebSocket support and message encryption.',
      longDescription: 'A distributed chat system handling thousands of concurrent users with message encryption, file sharing, and video call integration.',
      technologies: ['Node.js', 'Socket.io', 'Redis', 'PostgreSQL', 'Docker'],
      category: 'system',
      date: '2023-07-05',
      githubUrl: 'https://github.com/yourusername/chat-system',
      liveUrl: 'https://your-chat-demo.com',
      imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern animations.',
      longDescription: 'A personal portfolio website built with Angular, featuring smooth animations, responsive design, and optimized performance.',
      technologies: ['Angular', 'SCSS', 'TypeScript', 'AOS', 'Netlify'],
      category: 'web',
      date: '2024-02-28',
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://your-portfolio.com',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'Mobile app for tracking workouts, nutrition, and health metrics with social features.',
      longDescription: 'A comprehensive fitness tracking application with workout planning, nutrition logging, progress tracking, and social community features.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Fit API'],
      category: 'mobile',
      date: '2023-12-15',
      githubUrl: 'https://github.com/yourusername/fitness-app',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      featured: false
    }
  ];

  filteredProjects: Project[] = [];
  activeFilter: string = 'all';
  isLoading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.filteredProjects = this.allProjects;
      this.isLoading = false;
    }, 500);
  }

  filterProjects(category: string) {
    this.activeFilter = category;
    this.filteredProjects = category === 'all'
      ? this.allProjects
      : this.allProjects.filter(project => project.category === category);
  }

  getCategoryCount(category: string): number {
    return category === 'all'
      ? this.allProjects.length
      : this.allProjects.filter(project => project.category === category).length;
  }

  isFeatured(project: Project): boolean {
    return project.featured;
  }

  getProjectById(id: number): Project | undefined {
    return this.allProjects.find(project => project.id === id);
  }

  addProject(project: Omit<Project, 'id'>): void {
    const newId = Math.max(...this.allProjects.map(p => p.id), 0) + 1;
    const newProject: Project = { ...project, id: newId };
    this.allProjects.unshift(newProject);
    this.filterProjects(this.activeFilter);
  }

  removeProject(id: number): void {
    this.allProjects = this.allProjects.filter(project => project.id !== id);
    this.filterProjects(this.activeFilter);
  }

  updateProject(id: number, updates: Partial<Project>): void {
    const index = this.allProjects.findIndex(project => project.id === id);
    if (index !== -1) {
      this.allProjects[index] = { ...this.allProjects[index], ...updates };
      this.filterProjects(this.activeFilter);
    }
  }
}

