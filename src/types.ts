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
  /** Legacy single-image field, retained for existing product records. */
  image?: string;
  /** Preferred gallery field for new product records. */
  images?: string[];
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
  brandColor?: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  city: string;
  state: string;
  pixDiscountPercent: number;
  announcementText: string;
  defaultWhatsAppGreeting: string;
  logoUrl?: string;
  heroImage?: string;
  heroProductName?: string;
  heroProductMeta?: string;
  heroProductPrice?: number;
}

export interface SizeMeasurement {
  size: SizeOption;
  chest: string;
  length: string;
  weight: string;
  height: string;
}
