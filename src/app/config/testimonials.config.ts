export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS_CONFIG: Testimonial[] = [
  {
    name: 'Rajesh & Priya Kumar',
    location: 'Hyderabad',
    text: 'Forge By Myneni transformed our 3BHK into a stunning modern home. Surya understood our vision perfectly and delivered beyond expectations. The attention to detail was remarkable.',
    rating: 5,
  },
  {
    name: 'Anil Reddy',
    location: 'Hyderabad',
    text: 'Professional, punctual, and creative. They managed our office redesign seamlessly while we continued working. The new space has genuinely boosted our team morale.',
    rating: 5,
  },
  {
    name: 'Sneha Venkatesh',
    location: 'Hyderabad',
    text: 'From the modular kitchen to the living room, everything was done with precision. They stayed within budget and delivered on time. Highly recommend!',
    rating: 5,
  },
];

export const PROCESS_CONFIG = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We discuss your vision, requirements, and budget. Free initial consultation to understand your space and lifestyle.',
    icon: 'fas fa-comments',
  },
  {
    step: '02',
    title: 'Design & Planning',
    description: 'Our team creates detailed 3D designs, material selections, and a comprehensive project plan for your approval.',
    icon: 'fas fa-pencil-ruler',
  },
  {
    step: '03',
    title: 'Execution',
    description: 'Our skilled craftsmen bring the designs to life with premium materials and meticulous attention to detail.',
    icon: 'fas fa-hammer',
  },
  {
    step: '04',
    title: 'Handover',
    description: 'Final inspection, finishing touches, and handover of your beautifully transformed space — ready to move in.',
    icon: 'fas fa-key',
  },
];
