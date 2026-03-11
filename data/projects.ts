export interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  category: 'residential' | 'commercial' | 'renovation';
  description: string;
  longDescription?: string;
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  materials?: string[];
  credits?: {
    architect?: string;
    photographer?: string;
    builder?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'at-house',
    title: 'AT HOUSE',
    location: 'Indonesia',
    year: 2024,
    category: 'residential',
    description: 'Contemporary residential design with modern aesthetics and functional spaces',
    longDescription:
      'AT HOUSE showcases contemporary interior design principles combined with practical functionality. Every room has been thoughtfully designed to maximize space and comfort while maintaining aesthetic harmony throughout the residence.',
    images: [
      '/AT HOUSE/1.jfif',
      '/AT HOUSE/2.jfif',
      '/AT HOUSE/3.jfif',
      '/AT HOUSE/4.jfif',
      '/AT HOUSE/5.jfif',
      '/AT HOUSE/6.jfif',
      '/AT HOUSE/7.jfif',
      '/AT HOUSE/8.jpeg',
      '/AT HOUSE/9.jpeg',
      '/AT HOUSE/10.jpeg',
      '/AT HOUSE/11.jpeg',
    ],
    materials: ['Modern Finishes', 'Quality Flooring', 'Contemporary Fixtures', 'Smart Lighting'],
    credits: {
      architect: 'AT House Design Team',
      photographer: 'Professional Photography',
      builder: 'Construction Partners',
    },
  },
  {
    id: 'ika-jakarta',
    title: 'IKA JAKARTA',
    location: 'Jakarta, Indonesia',
    year: 2024,
    category: 'residential',
    description: 'Urban residential design combining modern comfort with Jakarta lifestyle',
    longDescription:
      'IKA JAKARTA is an urban residential project that seamlessly integrates modern design with the vibrant lifestyle of Jakarta. The space balances contemporary aesthetics with practical living needs.',
    images: [
      '/IKA JAKARTA/1.jfif',
      '/IKA JAKARTA/2.jfif',
      '/IKA JAKARTA/3.jfif',
      '/IKA JAKARTA/4.jfif',
      '/IKA JAKARTA/5.jfif',
      '/IKA JAKARTA/6.jfif',
      '/IKA JAKARTA/7.jfif',
      '/IKA JAKARTA/8.jfif',
      '/IKA JAKARTA/9.jfif',
      '/IKA JAKARTA/10.jfif',
    ],
    materials: ['Urban Materials', 'Modern Fixtures', 'Quality Finishes', 'Contemporary Design'],
    credits: {
      architect: 'IKA Design Studio',
      photographer: 'Professional Photography',
      builder: 'Jakarta Contractors',
    },
  },
  {
    id: 'pm-house-bandung',
    title: 'PM HOUSE BANDUNG',
    location: 'Bandung, Indonesia',
    year: 2024,
    category: 'residential',
    description: 'Modern residential design tailored for Bandung mountain lifestyle',
    longDescription:
      'PM HOUSE BANDUNG brings together modern design principles with the serene mountain environment of Bandung. The project emphasizes natural lighting, open spaces, and seamless indoor-outdoor living.',
    images: [
      '/PM HOUSE BANDUNG/1.jfif',
      '/PM HOUSE BANDUNG/2.jfif',
      '/PM HOUSE BANDUNG/3.jfif',
      '/PM HOUSE BANDUNG/4.jfif',
      '/PM HOUSE BANDUNG/5.jfif',
      '/PM HOUSE BANDUNG/6.jfif',
      '/PM HOUSE BANDUNG/7.jfif',
      '/PM HOUSE BANDUNG/8.jfif',
      '/PM HOUSE BANDUNG/9.jfif',
    ],
    materials: ['Mountain Stone', 'Natural Wood', 'Modern Fixtures', 'Sustainable Materials'],
    credits: {
      architect: 'PM Design Team',
      photographer: 'Professional Photography',
      builder: 'Bandung Builders',
    },
  },
  {
    id: 'artaindo',
    title: 'ARTAINDO',
    location: 'Indonesia',
    year: 2024,
    category: 'commercial',
    description: 'Elegant commercial and residential space design',
    longDescription:
      'ARTAINDO demonstrates expertly crafted commercial and residential design. This project showcases refined aesthetics, careful material selection, and thoughtful spatial composition creating an inviting and functional environment.',
    images: [
      '/ARTAINDO/1.jfif',
      '/ARTAINDO/2.jfif',
      '/ARTAINDO/3.jfif',
      '/ARTAINDO/4.jfif',
      '/ARTAINDO/5.jfif',
      '/ARTAINDO/6.jfif',
      '/ARTAINDO/7.jfif',
      '/ARTAINDO/8.jfif',
      '/ARTAINDO/9.jfif',
    ],
    materials: ['Premium Finishes', 'Elegant Fixtures', 'Quality Materials', 'Refined Details'],
    credits: {
      architect: 'ARTAINDO Design Team',
      photographer: 'Professional Photography',
      builder: 'Expert Craftsmen',
    },
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 3);
}
