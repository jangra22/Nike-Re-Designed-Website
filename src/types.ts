export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  formattedPrice: string;
  label: string;
  bgTone: string; // e.g. '#D9E7FF', '#C8FF3D', '#FF684C'
  textColor?: string;
  image: string;
  tag: 'Running' | 'Streetwear' | 'Football' | 'Basketball' | 'All Drops';
  isNew?: boolean;
  description: string;
}

export interface BagItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface ToastMessage {
  id: string;
  message: string;
}

export type CityKey = 'Mumbai' | 'Delhi' | 'Bengaluru';

export interface CityData {
  key: CityKey;
  tagline: string;
  coordinates: string;
  studioName: string;
  badge: string;
}
