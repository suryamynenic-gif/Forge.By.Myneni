import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SITE_CONFIG } from '../../config/site.config';
import { SERVICES_CONFIG } from '../../config/services.config';
import { ABOUT_CONFIG } from '../../config/about.config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  siteConfig = SITE_CONFIG;
  services = SERVICES_CONFIG.slice(0, 6);
  about = ABOUT_CONFIG;

  heroSlides = [
    {
      title: 'Interior Design & Space Planning',
      subtitle: 'Give your home a new look with interior design ideas curated for you',
      cta: 'Explore Now',
      link: '/about',
      image: 'assets/hero/slide-1.jpg',
    },
    {
      title: 'Residential & Commercial Interiors',
      subtitle: 'Elegant and functional styles that fit your lifestyle perfectly',
      cta: 'Explore Now',
      link: '/services',
      image: 'assets/hero/slide-2.jpg',
    },
    {
      title: 'Custom Joinery & Furniture Solutions',
      subtitle: 'Crafted with precision, designed to transform your space into a masterpiece',
      cta: 'Get Started',
      link: '/contact',
      image: 'assets/hero/slide-3.jpg',
    },
  ];

  currentSlide = 0;
  private slideInterval: any;

  ngOnInit() {
    this.startSlideshow();
  }

  ngOnDestroy() {
    this.stopSlideshow();
  }

  startSlideshow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopSlideshow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopSlideshow();
    this.startSlideshow();
  }
}
