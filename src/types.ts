export type SizeOption = 'P' | 'M' | 'G' | 'GG' | 'XGG';

export type ProductCategory = 
  | 'todos'
  | 'brasileirao'
  | 'europeias'
  | 'selecoes'
  | 'retro'
  | 'mais-vendidas';

export interface Product {
  id: string;
  name: string;
  team: string;
  league: string;
  category: ProductCategory[];
  price: number;
  originalPrice?: number;
  image: string;
  secondaryImage?: string;
  sizes: SizeOption[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  badge?: string;
  description: string;
  version: 'Torcedor' | 'Jogador 1:1' | 'Retrô Clássica';
  year: string;
  details?: {
    fabric: string;
    shield: string;
    origin: string;
  };
}

export interface StoreConfig {
  name: string;
  tagline: string;
  subtagline: string;
  brandColor?: string; // Hex color for custom brand accent
  instagramHandle: string;
  instagramUrl: string;
  whatsappNumber: string; // digits only e.g. "5551998765432"
  whatsappDisplay: string; // e.g. "(51) 99876-5432"
  city: string;
  state: string;
  pixDiscountPercent: number;
  announcementText: string;
  defaultWhatsAppGreeting: string;
}

export interface Testimonial {
  id: string;
  author: string;
  handle?: string;
  location: string;
  text: string;
  rating: number;
  jerseyBought: string;
  date: string;
  avatar?: string;
  verified: boolean;
}

export interface SizeMeasurement {
  size: SizeOption;
  chest: string;
  length: string;
  weight: string;
  height: string;
}
