import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ABOUT_CONFIG } from '../../config/about.config';
import { SITE_CONFIG } from '../../config/site.config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  about = ABOUT_CONFIG;
  siteConfig = SITE_CONFIG;
}
