import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SITE_CONFIG } from '../../config/site.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  config = SITE_CONFIG;

  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  };

  submitted = false;

  onSubmit() {
    const subject = encodeURIComponent(`Inquiry from ${this.formData.name} - ${this.formData.service || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\nEmail: ${this.formData.email}\nPhone: ${this.formData.phone}\nService: ${this.formData.service}\n\nMessage:\n${this.formData.message}`
    );
    const email = this.config.contact.email || 'hello@forgebymyneni.com';
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_self');
    this.submitted = true;
  }

  openWhatsApp() {
    const message = encodeURIComponent(
      `Hi! I'm ${this.formData.name || 'interested'}. I'd like to discuss ${this.formData.service || 'interior design services'}.`
    );
    window.open(`https://wa.me/${this.config.contact.whatsappNumber}?text=${message}`, '_blank');
  }
}
