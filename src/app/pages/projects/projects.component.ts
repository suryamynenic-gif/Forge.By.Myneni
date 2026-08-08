import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PROJECTS_CONFIG, ProjectItem } from '../../config/projects.config';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: ProjectItem[] = PROJECTS_CONFIG;
  categories: string[] = ['All', ...new Set(PROJECTS_CONFIG.map(p => p.category))];
  activeCategory = 'All';
  selectedProject: ProjectItem | null = null;
  lightboxImage: string | null = null;

  get filteredProjects() {
    if (this.activeCategory === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.activeCategory);
  }

  filterBy(category: string) {
    this.activeCategory = category;
  }

  openProject(project: ProjectItem) {
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
  }

  openLightbox(image: string) {
    this.lightboxImage = image;
  }

  closeLightbox() {
    this.lightboxImage = null;
  }
}
