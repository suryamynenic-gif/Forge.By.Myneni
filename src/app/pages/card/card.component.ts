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
    return `BEGIN:VCARD
VERSION:3.0
FN:${c.name}
ORG:${this.config.companyName}
TEL:${c.phone}
EMAIL:${c.email}
ADR:;;${c.city};${c.country}
END:VCARD`;
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
}
