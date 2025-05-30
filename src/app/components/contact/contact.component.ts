import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = {
    name: 'Khyati Satija',
    title: 'Software Engineer',
    phone: '+91 836859XXXX',
    email: 'satijakhyati2003@gmail.com',
    linkedin: 'LinkedIn',
    profileImage: 'khyati_head_shot.jpeg'
  };

  onPhoneClick() {
    window.open(`tel:${this.contactInfo.phone}`, '_self');
  }

  onEmailClick() {
    window.open(`mailto:${this.contactInfo.email}`, '_self');
  }

  onLinkedInClick() {
    window.open('https://www.linkedin.com/in/khyati-satija-computer-science/', '_blank');
  }
}