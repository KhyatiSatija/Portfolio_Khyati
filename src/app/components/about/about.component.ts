import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title = 'ABOUT ME';
  headline = 'Hi, I\'m Khyati Satija';
  subheadline = 'Software Developer / Content Creator / Dreamer';
  description = 'Pre-Final Year Undergraduate in Computer Science Engineering with a passion for building innovative solutions. I focus on creating high-quality digital experiences through clean code and creative problem-solving.';
}