import { SizeMeasurement } from '../types';
import { mantoPrimeConfig } from '../stores/manto-prime/config';
import { mantoPrimeProducts } from '../stores/manto-prime/products';

export const defaultStoreConfig = mantoPrimeConfig;
export const productsData = mantoPrimeProducts;

export const sizeGuideData: SizeMeasurement[] = [
  { size: 'P', chest: '49 - 51 cm', length: '69 - 71 cm', weight: '50 - 65 kg', height: '1,60 - 1,70 m' },
  { size: 'M', chest: '52 - 54 cm', length: '72 - 74 cm', weight: '65 - 78 kg', height: '1,70 - 1,78 m' },
  { size: 'G', chest: '55 - 57 cm', length: '75 - 77 cm', weight: '78 - 90 kg', height: '1,78 - 1,86 m' },
  { size: 'GG', chest: '58 - 61 cm', length: '78 - 80 cm', weight: '90 - 105 kg', height: '1,85 - 1,93 m' },
  { size: 'XGG', chest: '62 - 65 cm', length: '81 - 83 cm', weight: '105 - 120 kg', height: '1,90 - 2,00 m' },
];

export const buildWhatsAppLink = (phoneNumber: string, message?: string): string => {
  const encodedMessage = encodeURIComponent(
    message || defaultStoreConfig.defaultWhatsAppGreeting
  );
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
