import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = {
    name: 'Andre Jilderda',
    title: 'Freelance front-end developer',
    phone: '+316 208 42 105',
    email: 'mail@andrejilderda.nl',
    linkedin: 'LinkedIn',
    profileImage: 'assets/images/profile.jpg'
  };

  onPhoneClick() {
    window.open(`tel:${this.contactInfo.phone}`, '_self');
  }

  onEmailClick() {
    window.open(`mailto:${this.contactInfo.email}`, '_self');
  }

  onLinkedInClick() {
    window.open('https://linkedin.com/in/andrejilderda', '_blank');
  }
}