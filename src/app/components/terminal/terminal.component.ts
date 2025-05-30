import { Component, ElementRef, ViewChild, AfterViewInit, HostListener} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
interface Command {
  name: string;
  description: string;
  aliases?: string[];
}

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
  timestamp?: Date;
}

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [FormsModule, CommonModule, NgClass],
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements AfterViewInit {
  // @ViewChild('terminalInput') terminalInput!: ElementRef;
  @ViewChild('terminalContent') terminalContent!: ElementRef;
  @ViewChild('terminalInput') terminalInput!: ElementRef<HTMLInputElement>;
  @ViewChild('cursorRef') cursorRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('promptRef') promptRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('inputTextRef') inputTextRef!: ElementRef<HTMLSpanElement>;

  currentInput = '';
  commandHistory: string[] = [];
  historyIndex = -1;
  terminalLines: TerminalLine[] = [];
  currentPath = '~/portfolio';
  userName = 'khyati';

  private commands: Command[] = [
    { name: 'help', description: 'Display all available commands' },
    { name: 'about-me', description: 'Display information about me', aliases: ['about'] },
    { name: 'experiences', description: 'Show my work experiences', aliases: ['exp', 'work'] },
    { name: 'projects', description: 'Show all projects' },
    { name: 'get-projects', description: 'Get projects by category (web, ml, mobile, miscellaneous)' },
    { name: 'skills', description: 'Display my technical skills' },
    { name: 'education', description: 'Show my educational background', aliases: ['edu'] },
    { name: 'achievements', description: 'Display my achievements and awards' },
    { name: 'extracurriculars', description: 'Show extracurricular activities', aliases: ['extra'] },
    { name: 'get-github', description: 'Get GitHub profile URL', aliases: ['github'] },
    { name: 'get-linkedin', description: 'Get LinkedIn profile URL', aliases: ['linkedin'] },
    { name: 'get-youtube', description: 'Get YouTube channel URL', aliases: ['youtube'] },
    { name: 'get-instagram', description: 'Get Instagram profile URL', aliases: ['instagram'] },
    { name: 'get-email', description: 'Get email address', aliases: ['email'] },
    { name: 'get-resume', description: 'Download resume', aliases: ['resume'] },
    { name: 'clear', description: 'Clear the terminal screen' },
    { name: 'whoami', description: 'Display current user' },
    { name: 'pwd', description: 'Print working directory' },
    { name: 'date', description: 'Display current date and time' },
    { name: 'echo', description: 'Display a line of text' }
  ];

  // Data from your portfolio
  private personalInfo = {
    name: 'Khyati Satija',
    roles: ['Software Developer', 'Content Creator', 'Dreamer', 'Engineer'],
    description: 'Final Year Undergraduate in Computer Science Engineering with a passion for building innovative solutions. I focus on creating high-quality digital experiences through clean code and creative problem-solving.'
  };

  private experiences = [
    {
      id: 1,
      position: 'Software Engineer Intern',
      company: 'Google',
      period: 'June - August 2025',
      type: 'Internship',
      description: 'Working on cutting-edge software solutions and contributing to large-scale systems that impact millions of users worldwide. Collaborating with senior engineers on innovative projects using modern technologies and agile methodologies.',
      skills: ['Software Engineering', 'System Design', 'Java', 'Clean Code']
    },
    {
      id: 2,
      position: 'Data Analyst Intern',
      company: 'National Informatics Centre',
      period: 'July - September 2024',
      type: 'Internship',
      description: 'Built a comprehensive Django web application integrated with MS SQL Server, creating dynamic models, views, and templates to support advanced data visualization and analytics for government data systems.',
      skills: ['Django', 'MS SQL Server', 'Data Visualization', 'Python']
    },
    {
      id: 3,
      position: 'Student Ambassador',
      company: 'Bennett University',
      period: 'June 2024',
      type: 'Leadership',
      description: 'Led student outreach initiatives, counseling 200+ prospective students and boosting application inquiries by 25%. Successfully coordinated a 3-day summer school program for 100 high school students, increasing STEM interest by 40%.',
      skills: ['Leadership', 'Communication', 'Event Management', 'Mentoring']
    },
    {
      id: 4,
      position: 'Women Developer Lead',
      company: 'Google Developer Groups',
      period: 'January 2023 - March 2025',
      type: 'Leadership',
      description: 'Conducted multiple workshops to empower 300+ women in university',
      skills: ['Leadership', 'Public Speaking', 'Mentorship']
    },
    {
      id: 5,
      position: 'Tutor',
      company: 'Semesterly.in',
      period: 'May 2024 - February 2025',
      type: 'Teaching',
      description: 'Took online sessions for school and college students teaching Mathematics and DSA respectively',
      skills: ['Teaching', 'Communication', 'Mentorship']
    }
  ];

  private projects = [
    {
      id: 1,
      title: 'WhiteSpace - Collaborative Whiteboard for Teams',
      description: 'Real-time collaborative whiteboard built with Phoenix LiveView and Canvas API.',
      longDescription: 'Built with Phoenix LiveView and Canvas API, enabling real-time multi-user collaboration. Engineered backend with Elixir and Phoenix Channels using WebSockets; utilized PostgreSQL for data persistence.',
      technologies: ['Elixir', 'Phoenix LiveView', 'Canvas API', 'PostgreSQL', 'WebSockets'],
      category: 'web',
      date: '2025-01-01',
      githubUrl: 'https://github.com/KhyatiSatija/WhiteSpace-Collaborative-Whiteboard-for-Teams.git',
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
      featured: false
    },
    {
      id: 6,
      title: 'Autonomous Self-Driving Cars',
      description: 'Computer vision project inspired by Nvidia\'s 2016 paper on end-to-end learning.',
      longDescription: 'Developed a self-driving car system using computer vision and deep learning, trained using data from the Udacity simulator. Includes preprocessing and bias removal techniques.',
      technologies: ['Python', 'TensorFlow', 'OpenCV'],
      category: 'ml',
      date: '2023-09-01',
      githubUrl: 'https://github.com/KhyatiSatija/Autonomous_Self_Driving_Cars',
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
      featured: false
    }
  ];

  private skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'Elixir', 'SQL']
    },
    {
      title: 'Web Development',
      skills: ['React.js', 'Node.js', 'Express.js', 'TailwindCSS', 'Django', 'Spring Boot', 'React Native', 'Phoenix']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'Firebase', 'MS SQL Server']
    },
    {
      title: 'Machine Learning',
      skills: ['TensorFlow', 'Pandas', 'NumPy', 'Keras', 'Scikit-Learn', 'OpenCV']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'Linux', 'VS Code', 'Google Cloud', 'Android Studio', 'Jupyter', 'MATLAB']
    },
    {
      title: 'Soft Skills',
      skills: ['Problem Solving', 'Self Learning', 'Project Management', 'Leadership']
    }
  ];

  private socialLinks = {
    github: 'https://github.com/KhyatiSatija',
    linkedin: 'https://linkedin.com/in/khyati-satija-computer-science/',
    email: 'satijakhyati2003@gmail.com',
    youtube: 'https://www.youtube.com/@KhyatiSatija',
    instagram: 'https://www.instagram.com/khyatisatija443/'
  };

  ngAfterViewInit() {
    this.focusInput();
    this.addLine('output', 'Welcome to Khyati\'s Portfolio Terminal! 🚀');
    this.addLine('output', 'Type "help" to see available commands.');
    this.updateCursorPosition();
  }
  updateCursorPosition() {
    setTimeout(() => {
      // Get the bounding rectangles
      const promptRect = this.promptRef.nativeElement.getBoundingClientRect();
      const containerRect = this.inputTextRef.nativeElement.parentElement!.getBoundingClientRect();
      const inputTextRect = this.inputTextRef.nativeElement.getBoundingClientRect();

      // Calculate position relative to the container
      const promptWidth = promptRect.width;
      const inputTextWidth = inputTextRect.width;

      // Position cursor exactly at the end of the text
      this.cursorRef.nativeElement.style.left = `${promptWidth + inputTextWidth - 210}px`;
    }, 0);
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.focusInput();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.navigateHistory('up');
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.navigateHistory('down');
    }
  }

  focusInput() {
    setTimeout(() => {
      this.terminalInput?.nativeElement?.focus();
    }, 0);
  }

  onInputKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.executeCommand();
    } else if (event.key === 'Tab') {
      event.preventDefault();
      this.autoComplete();
    }
    setTimeout(() => this.updateCursorPosition(), 0);
  }

  executeCommand() {
    const command = this.currentInput.trim().toLowerCase();
    
    if (command) {
      this.addLine('input', `${this.userName}@portfolio:${this.currentPath}$ ${this.currentInput}`);
      this.commandHistory.unshift(this.currentInput);
      this.historyIndex = -1;
      
      this.processCommand(command);
    }
    
    this.currentInput = '';
    this.scrollToBottom();
  }

  processCommand(command: string) {
    const [cmd, ...args] = command.split(' ');
    
    switch (cmd) {
      case 'help':
        this.showHelp();
        break;
      case 'about-me':
      case 'about':
        this.showAbout();
        break;
      case 'experiences':
      case 'exp':
      case 'work':
        this.showExperiences();
        break;
      case 'projects':
        this.showProjects();
        break;
      case 'get-projects':
        this.showProjectsByCategory(args[0]);
        break;
      case 'skills':
        this.showSkills();
        break;
      case 'education':
      case 'edu':
        this.showEducation();
        break;
      case 'achievements':
        this.showAchievements();
        break;
      case 'extracurriculars':
      case 'extra':
        this.showExtracurriculars();
        break;
      case 'get-github':
      case 'github':
        this.openLink(this.socialLinks.github, 'GitHub');
        break;
      case 'get-linkedin':
      case 'linkedin':
        this.openLink(this.socialLinks.linkedin, 'LinkedIn');
        break;
      case 'get-youtube':
      case 'youtube':
        this.openLink(this.socialLinks.youtube, 'YouTube');
        break;
      case 'get-instagram':
      case 'instagram':
        this.openLink(this.socialLinks.instagram, 'Instagram');
        break;
      case 'get-email':
      case 'email':
        this.addLine('output', `📧 Email: ${this.socialLinks.email}`);
        break;
      case 'get-resume':
      case 'resume':
        this.downloadResume();
        break;
      case 'clear':
        this.clearTerminal();
        break;
      case 'whoami':
        this.addLine('output', this.userName);
        break;
      case 'pwd':
        this.addLine('output', this.currentPath);
        break;
      case 'date':
        this.addLine('output', new Date().toString());
        break;
      case 'echo':
        this.addLine('output', args.join(' '));
        break;
      default:
        this.addLine('error', `Command not found: ${cmd}. Type 'help' for available commands.`);
    }
  }

  showHelp() {
    this.addLine('output', '📋 Available Commands:');
    this.addLine('output', '');
    this.commands.forEach(cmd => {
      const aliases = cmd.aliases ? ` (${cmd.aliases.join(', ')})` : '';
      this.addLine('output', `  ${cmd.name}${aliases} - ${cmd.description}`);
    });
  }

  showAbout() {
    this.addLine('output', `👋 Hi! I'm ${this.personalInfo.name}`);
    this.addLine('output', '');
    this.addLine('output', '🚀 Roles:');
    this.personalInfo.roles.forEach(role => {
      this.addLine('output', `  • ${role}`);
    });
    this.addLine('output', '');
    this.addLine('output', '📝 About:');
    this.addLine('output', `  ${this.personalInfo.description}`);
  }

  showExperiences() {
    this.addLine('output', '💼 Work Experiences:');
    this.addLine('output', '');
    this.experiences.forEach(exp => {
      this.addLine('output', `🏢 ${exp.position} at ${exp.company}`);
      this.addLine('output', `   📅 ${exp.period} | ${exp.type}`);
      this.addLine('output', `   📝 ${exp.description}`);
      this.addLine('output', `   🛠️  Skills: ${exp.skills.join(', ')}`);
      this.addLine('output', '');
    });
  }

  showProjects() {
    this.addLine('output', '🚀 All Projects:');
    this.addLine('output', '');
    this.projects.forEach(project => {
      this.addLine('output', `${project.featured ? '⭐' : '📁'} ${project.title}`);
      this.addLine('output', `   📝 ${project.description}`);
      this.addLine('output', `   🏷️  Category: ${project.category}`);
      this.addLine('output', `   🛠️  Tech: ${project.technologies.join(', ')}`);
      if (project.githubUrl) {
        this.addLine('output', `   🔗 ${project.githubUrl}`);
      }
      this.addLine('output', '');
    });
    this.addLine('output', '💡 Use "get-projects <category>" to filter by category');
    this.addLine('output', '   Categories: web, ml, mobile, miscellaneous');
  }

  showProjectsByCategory(category?: string) {
    if (!category) {
      this.addLine('output', '📂 Project Categories:');
      this.addLine('output', '   • web - Web Development Projects');
      this.addLine('output', '   • ml - Machine Learning Projects');
      this.addLine('output', '   • mobile - Mobile App Projects');
      this.addLine('output', '   • miscellaneous - Other Projects');
      this.addLine('output', '');
      this.addLine('output', 'Usage: get-projects <category>');
      return;
    }

    const filteredProjects = this.projects.filter(p => p.category === category);
    
    if (filteredProjects.length === 0) {
      this.addLine('error', `No projects found in category: ${category}`);
      return;
    }

    this.addLine('output', `🗂️  ${category.toUpperCase()} Projects:`);
    this.addLine('output', '');
    filteredProjects.forEach(project => {
      this.addLine('output', `${project.featured ? '⭐' : '📁'} ${project.title}`);
      this.addLine('output', `   📝 ${project.longDescription}`);
      this.addLine('output', `   🛠️  Tech: ${project.technologies.join(', ')}`);
      if (project.githubUrl) {
        this.addLine('output', `   🔗 ${project.githubUrl}`);
      }
      this.addLine('output', '');
    });
  }

  showSkills() {
    this.addLine('output', '🛠️  Technical Skills:');
    this.addLine('output', '');
    this.skillCategories.forEach(category => {
      this.addLine('output', `📂 ${category.title}:`);
      this.addLine('output', `   ${category.skills.join(' • ')}`);
      this.addLine('output', '');
    });
  }

  showEducation() {
    this.addLine('output', '🎓 Education:');
    this.addLine('output', '');
    this.addLine('output', '📚 2022 - Present');
    this.addLine('output', '   B.Tech in Computer Science and Engineering');
    this.addLine('output', '   Bennett University, Greater Noida, Uttar Pradesh');
    this.addLine('output', '   CGPA: 9.7/10.0');
    this.addLine('output', '');
    this.addLine('output', '📚 2020 - 2022');
    this.addLine('output', '   High School');
    this.addLine('output', '   Rosary Senior Secondary School, North-West Delhi');
    this.addLine('output', '   12th: 97%');
    this.addLine('output', '   10th: 96.6%');
    this.addLine('output', '   Specialized in Physics, Chemistry, Maths and Biology');
  }

  showAchievements() {
    this.addLine('output', '🏆 Achievements & Awards:');
    this.addLine('output', '');
    this.addLine('output', '💰 Generation Google Scholar (APAC) - June 2024');
    this.addLine('output', '   Google | $2,500 Scholarship');
    this.addLine('output', '   Academic Excellence • Leadership • Diversity Commitment');
    this.addLine('output', '');
    this.addLine('output', '👩‍💻 Top 1% Women Engineers Program - April 2023 - March 2025');
    this.addLine('output', '   TalentSprint powered by Google');
    this.addLine('output', '   Top 220 out of 22,000 • 100% Scholarship • Elite Selection');
    this.addLine('output', '');
    this.addLine('output', '🏆 Smart India Hackathon Top 30 - 2022-2025');
    this.addLine('output', '   Government of India');
    this.addLine('output', '   Top 30 out of 250 • Prosthetic Arm Development • IoT & 3D Printing');
    this.addLine('output', '');
    this.addLine('output', '🌟 Four-time Dean\'s List Award - 2022 - 2025');
    this.addLine('output', '   University');
    this.addLine('output', '   CGPA 9.7 • Top 1% Ranking • 6x Consecutive Awards');
  }

  showExtracurriculars() {
    this.addLine('output', '🌟 Extracurricular Activities:');
    this.addLine('output', '');
    this.addLine('output', '👩‍💻 Women Tech Lead - August 2023 - Present');
    this.addLine('output', '   Google Developer Student Club');
    this.addLine('output', '   • Conducted technical workshops for 200+ women');
    this.addLine('output', '   • Focused on coding and skill development programs');
    this.addLine('output', '   • Built inclusive tech community and mentorship networks');
    this.addLine('output', '');
    this.addLine('output', '🚀 Include <her> Cohort 4.0 - August 2023 - November 2023');
    this.addLine('output', '   Microsoft Azure');
    this.addLine('output', '   • Explored OpenAI fundamentals and Generative AI principles');
    this.addLine('output', '   • Practical implementation of GPT-based chatbots');
    this.addLine('output', '   • DALLE 3 integration for image generation using Python and API');
    this.addLine('output', '');
    this.addLine('output', '🤖 Codess Cafe Mentee - September 2023 - Present');
    this.addLine('output', '   Machine Learning Cohort 1');
    this.addLine('output', '   • Selected for exclusive mentorship program');
    this.addLine('output', '   • Specialized Machine Learning cohort participation');
    this.addLine('output', '   • Supporting women in tech career development');
  }

  openLink(url: string, platform: string) {
    this.addLine('output', `🔗 Opening ${platform}: ${url}`);
    window.open(url, '_blank');
  }

downloadResume() {
  this.addLine('output', '📄 Downloading resume...');
  
    try {
      // Create a link element
      const link = document.createElement('a');

      link.href = 'Khyati_Satija_Resume.pdf';
      link.download = 'Khyati_Satija_Resume.pdf';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      this.addLine('output', '✅ Resume download initiated!');
    } catch (error) {
      this.addLine('error', '❌ Failed to download resume. Please try again.');
      console.error('Download error:', error);
    }
    }

  clearTerminal() {
    this.terminalLines = [];
  }

  navigateHistory(direction: 'up' | 'down') {
    if (direction === 'up' && this.historyIndex < this.commandHistory.length - 1) {
      this.historyIndex++;
      this.currentInput = this.commandHistory[this.historyIndex];
    } else if (direction === 'down' && this.historyIndex > -1) {
      this.historyIndex--;
      this.currentInput = this.historyIndex === -1 ? '' : this.commandHistory[this.historyIndex];
    }
  }

  autoComplete() {
    const input = this.currentInput.toLowerCase();
    const matches = this.commands.filter(cmd => 
      cmd.name.startsWith(input) || 
      (cmd.aliases && cmd.aliases.some(alias => alias.startsWith(input)))
    );
    
    if (matches.length === 1) {
      this.currentInput = matches[0].name;
    }
  }

  addLine(type: 'input' | 'output' | 'error', content: string) {
    this.terminalLines.push({
      type,
      content,
      timestamp: new Date()
    });
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.terminalContent) {
        this.terminalContent.nativeElement.scrollTop = this.terminalContent.nativeElement.scrollHeight;
      }
    }, 0);
  }

  getAsciiArt(): string {
    return `
  ██╗  ██╗██╗  ██╗██╗   ██╗ █████╗ ████████╗██╗
  ██║ ██╔╝██║  ██║╚██╗ ██╔╝██╔══██╗╚══██╔══╝██║
  █████╔╝ ███████║ ╚████╔╝ ███████║   ██║   ██║
  ██╔═██╗ ██╔══██║  ╚██╔╝  ██╔══██║   ██║   ██║
  ██║  ██╗██║  ██║   ██║   ██║  ██║   ██║   ██║
  ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚═╝

  Welcome to Khyati's Portfolio Terminal! 🚀
  Type "help" to see available commands.`;
  }
}