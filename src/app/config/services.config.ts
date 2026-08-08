export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
}

export const SERVICES_CONFIG: ServiceItem[] = [
  {
    id: 'interior-design',
    title: 'Interior Design & Space Planning',
    shortDescription: 'Smart design solutions that turn empty spaces into inspiring places.',
    fullDescription: 'We create thoughtful interior layouts that maximize space utilization while reflecting your personal style. Our design process ensures every corner of your space is both functional and aesthetically pleasing.',
    icon: 'fas fa-drafting-compass',
    image: 'assets/services/interior-design.jpg',
  },
  {
    id: 'residential-commercial',
    title: 'Residential & Commercial Interiors',
    shortDescription: 'Elegant and functional styles that fit your lifestyle perfectly.',
    fullDescription: 'From cozy homes to dynamic offices, we craft interiors that truly reflect your identity. Our approach blends comfort with sophistication for spaces you love spending time in.',
    icon: 'fas fa-building',
    image: 'assets/services/residential.jpg',
  },
  {
    id: 'turnkey-fitout',
    title: 'Turnkey Fit-out Works & Execution',
    shortDescription: 'Complete turnkey fit-outs, handled with precision.',
    fullDescription: 'End-to-end execution of your interiors — from demolition to finishing touches. We manage every trade, every timeline, and every detail so you can move in stress-free.',
    icon: 'fas fa-hard-hat',
    image: 'assets/services/turnkey.jpg',
  },
  {
    id: 'custom-joinery',
    title: 'Custom Joinery & Furniture Solutions',
    shortDescription: 'Custom-made furniture and joinery crafted to perfection.',
    fullDescription: 'Crafted with precision, designed to transform your space into a masterpiece of style and functionality. Every piece is tailored to your exact specifications.',
    icon: 'fas fa-couch',
    image: 'assets/services/joinery.jpg',
  },
  {
    id: 'landscaping',
    title: 'Landscaping & Outdoor Design',
    shortDescription: 'Transforming outdoor spaces with expert landscaping.',
    fullDescription: 'Beautiful outdoor living areas that extend your home into nature. We design gardens, patios, and outdoor entertainment spaces that complement your interiors.',
    icon: 'fas fa-leaf',
    image: 'assets/services/landscaping.jpg',
  },
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen Design',
    shortDescription: 'Modern kitchens designed for efficiency and elegance.',
    fullDescription: 'Functional modular kitchens that combine smart storage, premium materials, and contemporary design. Built to make cooking a pleasure.',
    icon: 'fas fa-utensils',
    image: 'assets/services/kitchen.jpg',
  },
  {
    id: 'decor-styling',
    title: 'Decor & Styling',
    shortDescription: 'Transforming spaces with creative decor and styling.',
    fullDescription: 'The finishing touches that bring a space to life. From art placement to textile selection, we curate every element to create a cohesive, stunning environment.',
    icon: 'fas fa-palette',
    image: 'assets/services/decor.jpg',
  },
  {
    id: 'project-management',
    title: 'Project Management & Delivery',
    shortDescription: 'Expert oversight ensuring smooth delivery of projects.',
    fullDescription: 'Professional project management from start to finish. We coordinate all stakeholders, manage timelines, and ensure quality at every stage of your project.',
    icon: 'fas fa-tasks',
    image: 'assets/services/management.jpg',
  },
];
