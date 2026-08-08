export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  year: string;
  coverImage: string;
  images: string[];
}

// Add your projects here. For each project:
// 1. Create a folder under src/assets/projects/<project-id>/
// 2. Add your photos there (cover.jpg, 1.jpg, 2.jpg, etc.)
// 3. Add an entry below

export const PROJECTS_CONFIG: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Modern Villa Interior',
    category: 'Residential',
    description: 'A complete interior transformation of a modern villa featuring contemporary design elements, custom furniture, and premium finishes throughout.',
    location: 'Hyderabad, India',
    year: '2025',
    coverImage: 'assets/projects/project-1/cover.jpg',
    images: [
      'assets/projects/project-1/1.jpg',
      'assets/projects/project-1/2.jpg',
      'assets/projects/project-1/3.jpg',
      'assets/projects/project-1/4.jpg',
      'assets/projects/project-1/5.jpg',
      'assets/projects/project-1/6.jpg',
    ],
  },
  {
    id: 'project-2',
    title: 'Contemporary Apartment',
    category: 'Residential',
    description: 'Elegant apartment interiors blending functionality with luxury. Features include modular kitchen, custom wardrobes, and designer lighting.',
    location: 'Hyderabad, India',
    year: '2025',
    coverImage: 'assets/projects/project-2/cover.jpg',
    images: [
      'assets/projects/project-2/1.jpg',
      'assets/projects/project-2/2.jpg',
      'assets/projects/project-2/3.jpg',
      'assets/projects/project-2/4.jpg',
      'assets/projects/project-2/5.jpg',
      'assets/projects/project-2/6.jpg',
    ],
  },
  {
    id: 'project-3',
    title: 'Office Space Redesign',
    category: 'Commercial',
    description: 'A professional workspace designed to boost productivity and reflect brand identity. Open layouts, ergonomic furniture, and collaborative zones.',
    location: 'Hyderabad, India',
    year: '2025',
    coverImage: 'assets/projects/project-3/cover.jpg',
    images: [
      'assets/projects/project-3/1.jpg',
    ],
  },
];
