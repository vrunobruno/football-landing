import { StoreConfig, Product, Testimonial, SizeMeasurement } from '../types';

export const defaultStoreConfig: StoreConfig = {
  name: 'MANTO FC',
  tagline: 'VISTA A CAMISA.',
  subtagline: 'Camisas de futebol para quem vive o jogo. Mantos 2025/2026, internacionais e clássicos retrô com envio rápido para todo o Brasil.',
  brandColor: '#111111',
  instagramHandle: '@mantofc.store',
  instagramUrl: 'https://instagram.com',
  whatsappNumber: '5551998765432',
  whatsappDisplay: '(51) 99876-5432',
  city: 'Porto Alegre',
  state: 'RS',
  pixDiscountPercent: 5,
  announcementText: 'FRETE GRÁTIS nas compras acima de 2 mantos • 5% OFF no Pix • Envio com código de rastreio',
  defaultWhatsAppGreeting: 'Olá! Vim pelo catálogo e gostaria de consultar a disponibilidade de camisas.',
};

export const sizeGuideData: SizeMeasurement[] = [
  { size: 'P', chest: '49 - 51 cm', length: '69 - 71 cm', weight: '50 - 65 kg', height: '1,60 - 1,70 m' },
  { size: 'M', chest: '52 - 54 cm', length: '72 - 74 cm', weight: '65 - 78 kg', height: '1,70 - 1,78 m' },
  { size: 'G', chest: '55 - 57 cm', length: '75 - 77 cm', weight: '78 - 90 kg', height: '1,78 - 1,86 m' },
  { size: 'GG', chest: '58 - 61 cm', length: '78 - 80 cm', weight: '90 - 105 kg', height: '1,85 - 1,93 m' },
  { size: 'XGG', chest: '62 - 65 cm', length: '81 - 83 cm', weight: '105 - 120 kg', height: '1,90 - 2,00 m' },
];

export const productsData: Product[] = [
  {
    id: 'gremio-home-2026',
    name: 'Grêmio Home 2025/26 Tricolor',
    team: 'Grêmio',
    league: 'Brasileirão Série A',
    category: ['brasileirao', 'mais-vendidas'],
    price: 119.90,
    originalPrice: 159.90,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=800&auto=format&fit=crop',
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    isFeatured: true,
    isBestSeller: true,
    badge: 'Mais Vendida',
    description: 'A clássica tricolor dos pampas com tecnologia de respiração avançada, detalhes bordados em alta definição e acabamento premium 1:1.',
    version: 'Torcedor',
    year: '2025/26',
    details: {
      fabric: '100% Poliéster Reciclado Dry-Cell',
      shield: 'Bordado em alto relevo',
      origin: 'Importada Qualidade Tailandesa 1:1'
    }
  },
  {
    id: 'flamengo-home-2026',
    name: 'Flamengo Home 2025/26 Rubro-Negra',
    team: 'Flamengo',
    league: 'Brasileirão Série A',
    category: ['brasileirao', 'mais-vendidas'],
    price: 119.90,
    originalPrice: 149.90,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop',
    sizes: ['P', 'M', 'G', 'GG'],
    isFeatured: true,
    isBestSeller: true,
    badge: 'Lançamento',
    description: 'Listras tradicionais rubro-negras com textura geométrica exclusiva. Manto oficial de jogo com caimento atlético perfeito.',
    version: 'Torcedor',
    year: '2025/26',
    details: {
      fabric: 'AEROREADY antissuor',
      shield: 'Escudo CRF bordado',
      origin: 'Importada Qualidade Tailandesa 1:1'
    }
  },
  {
    id: 'brasil-amarela-2026',
    name: 'Brasil Seleção Canarinho 2026',
    team: 'Brasil',
    league: 'Seleções Mundiais',
    category: ['selecoes', 'mais-vendidas'],
    price: 129.90,
    originalPrice: 169.90,
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop',
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    isFeatured: true,
    isBestSeller: true,
    badge: 'Edição Especial',
    description: 'O lendário amarelo canarinho com detalhes inspirados na fauna brasileira. Tecido Dri-FIT ultra leve para jogo ou uso casual.',
    version: 'Jogador 1:1',
    year: '2026',
    details: {
      fabric: 'Dri-FIT ADV Ultra respirável',
      shield: 'Escudo CBF emborrachado termossoldado',
      origin: 'Importada Padrão Atleta'
    }
  },
  {
    id: 'real-madrid-home-2026',
    name: 'Real Madrid Home 2025/26 White Gold',
    team: 'Real Madrid',
    league: 'La Liga / Europa',
    category: ['europeias', 'mais-vendidas'],
    price: 124.90,
    originalPrice: 159.90,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop',
    sizes: ['P', 'M', 'G', 'GG'],
    isFeatured: true,
    isBestSeller: true,
    badge: 'Top Europa',
    description: 'O branco imponente dos Reis da Europa com sutis detalhes dourados. Elegância pura dentro e fora das quatro linhas.',
    version: 'Torcedor',
    year: '2025/26',
    details: {
      fabric: 'HEAT.RDY tecnológico',
      shield: 'Bordado com coroa imperial',
      origin: 'Importada Qualidade Tailandesa 1:1'
    }
  },
  {
    id: 'corinthians-home-2026',
    name: 'Corinthians Home 2025/26 Branca',
    team: 'Corinthians',
    league: 'Brasileirão Série A',
    category: ['brasileirao'],
    price: 119.90,
    originalPrice: 149.90,
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=800&auto=format&fit=crop',
    sizes: ['P', 'M', 'G', 'GG'],
    badge: 'Pronta Entrega',
    description: 'O manto alvinegro do Timão com estilo minimalista e imponente. Gola reforçada e costuras duplas de alta durabilidade.',
    version: 'Torcedor',
    year: '2025/26',
    details: {
      fabric: 'Dri-FIT respirável',
      shield: 'Bordado CP 1910',
      origin: 'Importada 1:1'
    }
  },
  {
    id: 'palmeiras-home-2026',
    name: 'Palmeiras Home 2025/26 Verde Alviverde',
    team: 'Palmeiras',
    league: 'Brasileirão Série A',
    category: ['brasileirao'],
    price: 119.90,
    originalPrice: 149.90,
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800&auto=format&fit=crop',
    sizes: ['P', 'M', 'G', 'GG'],
    badge: 'Destaque',
    description: 'Verde esmeralda com textura jacquard floral e detalhes dourados celebrando as glórias da Academia de Futebol.',
    version: 'Torcedor',
    year: '2025/26',
    details: {
      fabric: 'DryCell Performance',
      shield: 'Bordado em cetim com relevo',
      origin: 'Importada 1:1'
    }
  },
  {
    id: 'barcelona-home-2026',
    name: 'Barcelona Home 2025/26 Blaugrana',
    team: 'Barcelona',
    league: 'La Liga / Europa',
    category: ['europeias'],
    price: 124.90,
    originalPrice: 159.90,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800&auto=format&fit=crop',
    sizes: ['P', 'M', 'G', 'GG'],
    badge: 'Mais Pedida',
    description: 'As lendárias cores azul e grená em divisão clássica de meio a meio com escudo centralizado comemorativo.',
    version: 'Torcedor',
    year: '2025/26',
    details: {
      fabric: 'Dri-FIT microperfurado',
      shield: 'Escudo Barça bordado',
      origin: 'Importada 1:1'
    }
  },
  {
    id: 'inter-home-2026',
    name: 'Internacional Home 2025/26 Vermelha',
    team: 'Internacional',
    league: 'Brasileirão Série A',
    category: ['brasileirao'],
    price: 119.90,
    originalPrice: 149.90,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    badge: 'Colorado',
    description: 'O vermelho vibrante do Gigante da Beira-Rio com detalhes em branco e textura em relevo no peito.',
    version: 'Torcedor',
    year: '2025/26',
    details: {
      fabric: 'AEROREADY tecido leve',
      shield: 'Bordado SCI clássico',
      origin: 'Importada 1:1'
    }
  },
  {
    id: 'mancity-home-2026',
    name: 'Manchester City Home 2025/26 Sky Blue',
    team: 'Manchester City',
    league: 'Premier League / Europa',
    category: ['europeias'],
    price: 124.90,
    originalPrice: 159.90,
    image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=800&auto=format&fit=crop',
    sizes: ['P', 'M', 'G', 'GG'],
    badge: 'Premier League',
    description: 'Azul celeste celestial com detalhes nas mangas em homenagem ao código postal 0161 de Manchester.',
    version: 'Torcedor',
    year: '2025/26',
    details: {
      fabric: 'ULTRAWEAVE ultra leve',
      shield: 'Escudo City bordado',
      origin: 'Importada 1:1'
    }
  },
  {
    id: 'sao-paulo-home-2026',
    name: 'São Paulo Home 2025/26 Tradicional',
    team: 'São Paulo',
    league: 'Brasileirão Série A',
    category: ['brasileirao'],
    price: 119.90,
    originalPrice: 149.90,
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop',
    sizes: ['P', 'M', 'G', 'GG'],
    badge: 'Tricolor Paulista',
    description: 'O tradicional manto são-paulino com as faixas horizontais no peito e as 5 estrelas bordadas com perfeição.',
    version: 'Torcedor',
    year: '2025/26',
    details: {
      fabric: 'Tecido respirável New Balance',
      shield: 'Escudo SPFC bordado',
      origin: 'Importada 1:1'
    }
  },
  {
    id: 'brasil-retro-1994',
    name: 'Brasil Retrô 1994 Tetra Mundial',
    team: 'Brasil Retrô',
    league: 'Coleção Histórica',
    category: ['retro', 'selecoes', 'mais-vendidas'],
    price: 139.90,
    originalPrice: 179.90,
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800&auto=format&fit=crop',
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    badge: 'Relíquia Retrô',
    description: 'A histórica camisa do Tetra de 1994 com as marcas d’água da CBF espalhadas pelo tecido e gola pólo clássica.',
    version: 'Retrô Clássica',
    year: '1994 Tetra',
    details: {
      fabric: 'Poliéster vintage brilhoso de época',
      shield: 'Escudo CBF 3 estrelas aveludado',
      origin: 'Réplica Retrô Premium Fiel'
    }
  },
  {
    id: 'argentina-retro-1986',
    name: 'Argentina Retrô 1986 Maradona Le Coq',
    team: 'Argentina Retrô',
    league: 'Coleção Histórica',
    category: ['retro', 'selecoes'],
    price: 139.90,
    originalPrice: 179.90,
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop',
    sizes: ['P', 'M', 'G', 'GG'],
    badge: 'Clássico Eterno',
    description: 'A lendária camisa albiceleste usada por Diego Maradona na Copa de 1986. Tecido de época com toque impecável.',
    version: 'Retrô Clássica',
    year: '1986 Campeão',
    details: {
      fabric: 'Tecido estilo vintage 80s',
      shield: 'Escudo AFA em veludo termoaplicado',
      origin: 'Réplica Retrô Premium Fiel'
    }
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Matheus Fontoura',
    handle: '@fontoura_m9',
    location: 'Porto Alegre, RS',
    jerseyBought: 'Grêmio Home 2025/26 (Tamanho G)',
    rating: 5,
    date: 'Há 3 dias',
    text: 'Chegou em 4 dias úteis aqui em POA! O acabamento é impecável, escudo bordado perfeito e tecido levíssimo.',
    verified: true
  },
  {
    id: 'test-2',
    author: 'Gabriel Silveira',
    handle: '@gabriel.silva94',
    location: 'São Paulo, SP',
    jerseyBought: 'Real Madrid Home 25/26 (Tamanho M)',
    rating: 5,
    date: 'Há 5 dias',
    text: 'Atendimento pelo WhatsApp foi nota 10, enviaram foto da camisa antes de postar e mandaram o rastreio na hora.',
    verified: true
  },
  {
    id: 'test-3',
    author: 'Lucas Medeiros',
    handle: '@lucas_medeiros',
    location: 'Rio de Janeiro, RJ',
    jerseyBought: 'Flamengo Home 25/26 (Tamanho GG)',
    rating: 5,
    date: 'Há 1 semana',
    text: 'Qualidade idêntica à de loja oficial. Pagamento via Pix com 5% de desconto e entrega rápida sem dor de cabeça.',
    verified: true
  }
];

export function formatBRL(amount: number): string {
  return amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function buildWhatsAppLink(
  whatsappNumber: string,
  product?: { name: string; price: number },
  size?: string,
  customNote?: string
): string {
  const cleanNumber = whatsappNumber.replace(/\D/g, '');
  
  let message = '';
  if (product && size) {
    message = `Olá! Gostaria de pedir a camisa *${product.name}*, tamanho *${size}* (${formatBRL(product.price)}). Está disponível para envio?`;
  } else if (product) {
    message = `Olá! Gostaria de saber a disponibilidade da camisa *${product.name}* (${formatBRL(product.price)}).`;
  } else if (customNote) {
    message = customNote;
  } else {
    message = 'Olá! Vim pelo site e gostaria de consultar os mantos disponíveis e prazos de entrega.';
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
