import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../config/site.config';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  config = SITE_CONFIG;

  get vcfData(): string {
    const c = this.config.contact;
    return `BEGIN:VCARD\nVERSION:3.0\nFN:${c.name}\nORG:${this.config.companyName}\nTEL:${c.phone}\nEMAIL:${c.email}\nADR:;;Hyderabad;Telangana;;India\nEND:VCARD`;
  }

  saveContact() {
    const blob = new Blob([this.vcfData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Forge_By_Myneni.vcf';
    a.click();
    URL.revokeObjectURL(url);
  }

  printCard() {
    window.print();
  }

  shareCard() {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: 'Forge By Myneni', text: 'Interior Design & Execution', url });
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  }
}
