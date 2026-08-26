import { SizeMeasurement, Product, SizeOption } from '../types';
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

export const formatBRL = (value: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export const getProductImages = (product: Product): string[] => {
  if (product.images && product.images.length > 0) return product.images;
  if (product.image) return [product.image];
  if (product.secondaryImage) return [product.secondaryImage];
  return [];
};

type ProductMessage = { name: string; price: number };

export const buildWhatsAppLink = (
  phoneNumber: string,
  message?: string | ProductMessage,
  size?: SizeOption,
  customMessage?: string,
): string => {
  let text = defaultStoreConfig.defaultWhatsAppGreeting;

  if (customMessage) {
    text = customMessage;
  } else if (typeof message === 'string') {
    text = message;
  } else if (message && typeof message === 'object') {
    text = `Olá! Tenho interesse na camisa ${message.name}${size ? `, tamanho ${size}` : ''}, por ${formatBRL(message.price)}. Ainda está disponível?`;
  }

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
};
