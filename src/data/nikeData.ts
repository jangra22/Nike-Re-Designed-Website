import { Product, CityData } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'pegasus-41',
    name: 'Pegasus 41',
    category: 'Road running shoes',
    price: 11895,
    formattedPrice: '₹11,895',
    label: 'Run ready',
    bgTone: '#D9E7FF',
    textColor: '#07111C',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop',
    tag: 'Running',
    isNew: true,
    description: 'Responsive cushioning in the Pegasus delivers an energized ride for everyday road running.'
  },
  {
    id: 'bridgeway',
    name: 'Bridgeway',
    category: 'Streetwear layers',
    price: 8495,
    formattedPrice: '₹8,495',
    label: 'City form',
    bgTone: '#C8FF3D',
    textColor: '#07111C',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop',
    tag: 'Streetwear',
    isNew: true,
    description: 'Lightweight weather-resistant jacket designed for fast-paced urban transitions.'
  },
  {
    id: 'field-general',
    name: 'Field General',
    category: 'Vintage football energy',
    price: 9695,
    formattedPrice: '₹9,695',
    label: 'New drop',
    bgTone: '#FF684C',
    textColor: '#07111C',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format&fit=crop',
    tag: 'Football',
    isNew: true,
    description: 'Rooted in American gridiron heritage, reimagined for modern Mumbai street style.'
  },
  {
    id: 'vaporfly-3',
    name: 'ZoomX Vaporfly 3',
    category: 'Marathon racing shoe',
    price: 20695,
    formattedPrice: '₹20,695',
    label: 'Race day',
    bgTone: '#1648FF',
    textColor: '#F2F3EE',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
    tag: 'Running',
    isNew: false,
    description: 'Catch ’em if you can. Vaporfly 3 is built for speed chasers from Marine Drive to Delhi nights.'
  },
  {
    id: 'tech-fleece-mumbai',
    name: 'Tech Fleece India Edition',
    category: 'Full-zip hoodie',
    price: 9995,
    formattedPrice: '₹9,995',
    label: 'Member exclusive',
    bgTone: '#F2F3EE',
    textColor: '#07111C',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop',
    tag: 'Streetwear',
    isNew: true,
    description: 'Premium lightweight warmth with reflective monsoon accents and streamlined zip pockets.'
  },
  {
    id: 'air-jordan-1-low',
    name: 'Air Jordan 1 Low Craft',
    category: 'Men\'s Shoes',
    price: 10295,
    formattedPrice: '₹10,295',
    label: 'Iconic',
    bgTone: '#9DC7FF',
    textColor: '#07111C',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1000&auto=format&fit=crop',
    tag: 'Basketball',
    isNew: false,
    description: 'Classic Jordan profile enhanced with rich tactile suedes and exposed edge stitching.'
  }
];

export const CITY_DATA: Record<string, CityData> = {
  Mumbai: {
    key: 'Mumbai',
    tagline: 'Sea Breeze & Monsoon Speed',
    coordinates: '18.9220° N, 72.8347° E',
    studioName: 'Colaba Custom Lab',
    badge: 'Bandra Night Edition'
  },
  Delhi: {
    key: 'Delhi',
    tagline: 'Capitol Concrete & Cyber Street',
    coordinates: '28.6139° N, 77.2090° E',
    studioName: 'Connaught Place Studio',
    badge: 'NCR Stealth Edition'
  },
  Bengaluru: {
    key: 'Bengaluru',
    tagline: 'High-Altitude Garden Tempo',
    coordinates: '12.9716° N, 77.5946° E',
    studioName: 'Indiranagar Nike Lab',
    badge: 'Silicon Pulse Edition'
  }
};
