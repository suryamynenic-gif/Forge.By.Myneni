import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../config/site.config';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-widget.component.html',
  styleUrl: './chat-widget.component.scss',
})
export class ChatWidgetComponent {
  config = SITE_CONFIG;
  isOpen = false;

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  openWhatsApp() {
    const message = encodeURIComponent('Hi! I\'m interested in your interior design services.');
    window.open(`https://wa.me/${this.config.contact.whatsappNumber}?text=${message}`, '_blank');
    this.isOpen = false;
  }

  openEmail() {
    const email = this.config.contact.email || 'hello@forgebymyneni.com';
    const subject = encodeURIComponent('Inquiry - Interior Design Services');
    const body = encodeURIComponent('Hi,\n\nI\'m interested in your interior design services. Could you please share more details?\n\nThank you.');
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_self');
    this.isOpen = false;
  }
}
