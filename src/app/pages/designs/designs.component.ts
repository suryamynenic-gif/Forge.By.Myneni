import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DESIGNS_CONFIG, DESIGN_CATEGORIES, DesignPhoto } from '../../config/designs.config';

@Component({
  selector: 'app-designs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designs.component.html',
  styleUrl: './designs.component.scss',
})
export class DesignsComponent {
  photos: DesignPhoto[] = DESIGNS_CONFIG;
  categories: string[] = DESIGN_CATEGORIES;
  activeCategory = 'All';
  lightboxImage: string | null = null;
  lightboxAlt = '';

  get filteredPhotos(): DesignPhoto[] {
    if (this.activeCategory === 'All') return this.photos;
    return this.photos.filter(p => p.category === this.activeCategory);
  }

  filterBy(category: string) {
    this.activeCategory = category;
  }

  openLightbox(photo: DesignPhoto) {
    this.lightboxImage = photo.src;
    this.lightboxAlt = photo.alt;
  }

  closeLightbox() {
    this.lightboxImage = null;
  }
}
