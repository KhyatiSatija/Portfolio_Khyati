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
    { key: 'miscellaneous', label: 'Miscellaneous', icon: '⚙️' }
  ];

  allProjects: Project[] = [
  {
    id: 1,
    title: 'WhiteSpace - Collaborative Whiteboard for Teams',
    description: 'Real-time collaborative whiteboard built with Phoenix LiveView and Canvas API.',
    longDescription: 'Built with Phoenix LiveView and Canvas API, enabling real-time multi-user collaboration. Engineered backend with Elixir and Phoenix Channels using WebSockets; utilized PostgreSQL for data persistence.',
    technologies: ['Elixir', 'Phoenix LiveView', 'Canvas API', 'PostgreSQL', 'WebSockets'],
    category: 'web',
    date: '2025-01-01',
    githubUrl: 'https://github.com/KhyatiSatija/WhiteSpace-Collaborative-Whiteboard-for-Teams.git',
    liveUrl: '',
    imageUrl: 'whitespace.jpeg',
    featured: true
  },
  {
    id: 2,
    title: 'Achievo - Your Path to Success',
    description: 'Productivity app using Pomodoro and To-Do list features.',
    longDescription: 'Achievo is a productivity web app that enhances user focus, motivation, and productivity with Pomodoro timer, task management, and scientifically backed techniques.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    date: '2023-08-01',
    githubUrl: 'https://github.com/KhyatiSatija/Achievo.git',
    liveUrl: '',
    imageUrl: 'achievo.png',
    featured: false
  },
  {
    id: 3,
    title: 'UniMEET',
    description: 'Android app to interact with seniors and alumni using real-time messaging.',
    longDescription: 'A real-time Android app for university students to chat with seniors and alumni. Developed using XML and Firebase in a team of 3.',
    technologies: ['Java', 'XML', 'Firebase'],
    category: 'mobile',
    date: '2023-04-01',
    githubUrl: 'https://github.com/KhyatiSatija/UniMEET.git',
    liveUrl: '',
    imageUrl:'unimeet.png',
    featured: false
  },
  {
    id: 4,
    title: 'Q-buster - Campus Food Ordering System',
    description: 'An online food ordering system for campus universities using MERN stack.',
    longDescription: 'A web app to place food orders online within large university campuses, built with React, Node.js, MongoDB, and various modern React features like Context API, useReducer.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Bootstrap 5', 'bcrypt.js', 'jsonwebtoken', 'express-validator', 'context API', 'useReducer'],
    category: 'web',
    date: '2024-04-01',
    githubUrl: 'https://github.com/KhyatiSatija/FoodOrderingApp_MERN_Stack.git',
    liveUrl: '',
    imageUrl: 'qBuster.png',
    featured: true
  },
  {
    id: 5,
    title: 'Smart Phone Book',
    description: 'Terminal-based contact manager using Linked Lists in C++.',
    longDescription: 'Built a terminal-based phone book using Linked Lists with add, display, update, search, delete features. Handles duplicate entries efficiently.',
    technologies: ['C++'],
    category: 'miscellaneous',
    date: '2023-11-01',
    githubUrl: 'https://github.com/KhyatiSatija/Smart_PhoneBook',
    liveUrl: '',
    imageUrl: 'phonebook.png',
    featured: false
  },
  {
    id: 6,
    title: 'Autonomous Self-Driving Cars',
    description: 'Computer vision project inspired by Nvidia’s 2016 paper on end-to-end learning.',
    longDescription: 'Developed a self-driving car system using computer vision and deep learning, trained using data from the Udacity simulator. Includes preprocessing and bias removal techniques.',
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
    category: 'ml',
    date: '2023-09-01',
    githubUrl: 'https://github.com/KhyatiSatija/Autonomous_Self_Driving_Cars',
    liveUrl: '',
    imageUrl: 'self_driving_car.png',
    featured: false
  },
  {
    id: 7,
    title: 'codeRunner',
    description: 'A Phaser.js-based educational game built with React.',
    longDescription: 'An engaging React game using Phaser.js where a duck navigates platforms, answers DSA questions, and avoids bugs. Designed to be both educational and fun.',
    technologies: ['React', 'Phaser.js'],
    category: 'web',
    date: '2025-02-01',
    githubUrl: 'https://github.com/WE-Arcade/Anshul_Game.git',
    liveUrl: '',
    imageUrl: 'codeRunner.png',
    featured: false
  },
  {
    id: 8,
    title: 'TalentBridge - Developer Job and Hackathon Connect App',
    description: 'A MERN stack app that matches developers with job and project opportunities.',
    longDescription: 'TalentBridge is a MERN app to connect developers for projects and jobs using Tinder-style swipes. Companies can post jobs and review applicants, ensuring unbiased hiring.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Mongoose', 'Vercel'],
    category: 'web',
    date: '2025-02-01',
    githubUrl: 'https://github.com/KhyatiSatija/TalentBridge-MERN-App.git',
    liveUrl: '',
    imageUrl: 'talentbridge.png',
    featured: true
  },
  {
    id: 9,
    title: 'TaskPilot - AI Workflow Manager for BPOs',
    description: 'AI-powered workflow enhancement system for BPOs.',
    longDescription: 'TaskPilot is a smart agent workflow automation system using AI for claims processing in BPOs. Features include Whisper speech-to-text, VADER sentiment analysis, Gemini chatbot, Play.ht voice synthesis, and more.',
    technologies: ['React', 'Node.js', 'MongoDB Atlas', 'Socket.io', 'Whisper API', 'VADER', 'Gemini AI', 'Play.ht', 'AWS Lambda', 'Multer', 'FFmpeg'],
    category: 'ml',
    date: '2025-01-15',
    githubUrl: 'https://github.com/NidhiIyer04/TaskPilot.git',
    liveUrl: '',
    imageUrl: 'taskPilot.png',
    featured: false
  },
  {
    id: 10,
    title: 'Attendance Tracker using RFID Scanner',
    description: 'Designed a smooth attendance tracker to mitigate the proxy system at college.',
    longDescription: 'Built an attendance tracking system using Python and RFID hardware to detect and log student entries in real-time. Designed to eliminate classroom proxy attendance.',
    technologies: ['Python', 'RFID Scanner', 'Arduino UNO'],
    category: 'miscellaneous',
    date: '2022-12-01',
    githubUrl: '',
    liveUrl: '',
    imageUrl: 'attendance.jpeg',
    featured: false
  },
  {
    id: 11,
    title: 'Myoelectric Prosthetic Arm',
    description: 'Developed a prosthetic arm using 3D printing, muscle sensors, servo motors, and Arduino.',
    longDescription: 'Designed a low-cost myoelectric prosthetic arm controlled by muscle signals, built with 3D printed parts and servo motors. Finalist project in Smart India Hackathon internal rounds.',
    technologies: ['Arduino', '3D Printing', 'Servo Motors', 'Myoelectric Muscle Sensors', 'C++'],
    category: 'miscellaneous',
    date: '2023-09-01',
    githubUrl: '',
    liveUrl: '',
    imageUrl: 'prosthetic_arm.png',
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
}

