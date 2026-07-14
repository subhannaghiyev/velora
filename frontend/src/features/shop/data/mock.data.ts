import { ProductCategory, ProductSize } from '../types';
import type { Product, ProductColor, ProductMaterial } from '../types';

const LINEN_MATERIAL: ProductMaterial = {
  id:          'mat-linen',
  name:        'Linen',
  slug:        'linen',
  composition: '100% European Linen',
  careInstructions: [
    'Machine wash cold on gentle cycle',
    'Lay flat to dry',
    'Iron while slightly damp on medium heat',
    'Do not bleach',
  ],
};

const MERINO_MATERIAL: ProductMaterial = {
  id:          'mat-merino',
  name:        'Merino Wool',
  slug:        'merino-wool',
  composition: '100% Extra-Fine Merino Wool',
  careInstructions: [
    'Hand wash cold or machine wash on wool cycle',
    'Lay flat to dry — never hang',
    'Steam to remove wrinkles',
    'Do not tumble dry',
  ],
};

const SILK_MATERIAL: ProductMaterial = {
  id:          'mat-silk',
  name:        'Silk Blend',
  slug:        'silk-blend',
  composition: '72% Silk, 28% Cotton',
  careInstructions: [
    'Dry clean recommended',
    'Hand wash cold with silk-specific detergent',
    'Do not wring or twist',
    'Iron on lowest setting through a cloth',
  ],
};

const COTTON_MATERIAL: ProductMaterial = {
  id:          'mat-cotton',
  name:        'Cotton',
  slug:        'cotton',
  composition: '100% Organic Cotton',
  careInstructions: [
    'Machine wash cold',
    'Tumble dry low',
    'Iron on medium heat',
    'Do not bleach',
  ],
};

const COLOR_NATURAL: ProductColor = {
  id:          'col-natural',
  name:        'Natural',
  colorway:    'natural',
  hex:         '#D9C9A8',
  isAvailable: true,
};

const COLOR_CHARCOAL: ProductColor = {
  id:          'col-charcoal',
  name:        'Charcoal',
  colorway:    'charcoal',
  hex:         '#3A3A3A',
  isAvailable: true,
};

const COLOR_ECRU: ProductColor = {
  id:          'col-ecru',
  name:        'Ecru',
  colorway:    'ecru',
  hex:         '#F0EAD6',
  isAvailable: true,
};

const COLOR_IVORY: ProductColor = {
  id:          'col-ivory',
  name:        'Ivory',
  colorway:    'ivory',
  hex:         '#F8F4EC',
  isAvailable: true,
};

export const SS26_PRODUCTS: Product[] = [
  {
    id:         'prod-001',
    slug:       'tailored-linen-jacket',
    name:       'Tailored Linen Jacket',
    description:
      'A structured linen jacket cut with a clean, extended shoulder. The fabric is heavyweight European linen that softens with wear without losing its shape. Patch pockets. Single-button closure. Fully unlined for breathability.',
    price:      420,
    currency:   'USD',
    category:   ProductCategory.OUTERWEAR,
    collection: 'ss26',
    season:     'Spring/Summer 2026',
    material:   LINEN_MATERIAL,
    colors:     [COLOR_NATURAL],
    variants: [
      {
        id:         'var-001-xs',
        size:       ProductSize.XS,
        color:      COLOR_NATURAL,
        stockCount: 4,
        isInStock:  true,
        sku:        'VLR-SS26-LJ-NAT-XS',
      },
      {
        id:         'var-001-s',
        size:       ProductSize.S,
        color:      COLOR_NATURAL,
        stockCount: 8,
        isInStock:  true,
        sku:        'VLR-SS26-LJ-NAT-S',
      },
      {
        id:         'var-001-m',
        size:       ProductSize.M,
        color:      COLOR_NATURAL,
        stockCount: 10,
        isInStock:  true,
        sku:        'VLR-SS26-LJ-NAT-M',
      },
      {
        id:         'var-001-l',
        size:       ProductSize.L,
        color:      COLOR_NATURAL,
        stockCount: 7,
        isInStock:  true,
        sku:        'VLR-SS26-LJ-NAT-L',
      },
      {
        id:         'var-001-xl',
        size:       ProductSize.XL,
        color:      COLOR_NATURAL,
        stockCount: 3,
        isInStock:  true,
        sku:        'VLR-SS26-LJ-NAT-XL',
      },
    ],
    images: [
      {
        id:        'img-001-front',
        src:       '/images/products/velora_ss26_linen-jacket_front_natural_v1.webp',
        alt:       'Tailored Linen Jacket — front view in natural colorway',
        angle:     'front',
        colorway:  'natural',
        width:     1800,
        height:    2400,
        isPrimary: true,
      },
    ],
    isAvailable: true,
    createdAt:   '2026-07-01T00:00:00.000Z',
    updatedAt:   '2026-07-13T00:00:00.000Z',
  },

  {
    id:         'prod-002',
    slug:       'merino-knit-pullover',
    name:       'Merino Knit Pullover',
    description:
      'A mid-weight crew-neck pullover in extra-fine merino. Ribbed cuffs and hem. Dropped shoulder seam sits slightly past the natural shoulder point for a relaxed silhouette that still reads as tailored.',
    price:      280,
    currency:   'USD',
    category:   ProductCategory.KNITWEAR,
    collection: 'ss26',
    season:     'Spring/Summer 2026',
    material:   MERINO_MATERIAL,
    colors:     [COLOR_CHARCOAL],
    variants: [
      {
        id:         'var-002-s',
        size:       ProductSize.S,
        color:      COLOR_CHARCOAL,
        stockCount: 6,
        isInStock:  true,
        sku:        'VLR-SS26-MKP-CHA-S',
      },
      {
        id:         'var-002-m',
        size:       ProductSize.M,
        color:      COLOR_CHARCOAL,
        stockCount: 12,
        isInStock:  true,
        sku:        'VLR-SS26-MKP-CHA-M',
      },
      {
        id:         'var-002-l',
        size:       ProductSize.L,
        color:      COLOR_CHARCOAL,
        stockCount: 9,
        isInStock:  true,
        sku:        'VLR-SS26-MKP-CHA-L',
      },
      {
        id:         'var-002-xl',
        size:       ProductSize.XL,
        color:      COLOR_CHARCOAL,
        stockCount: 5,
        isInStock:  true,
        sku:        'VLR-SS26-MKP-CHA-XL',
      },
    ],
    images:      [],
    isAvailable: true,
    createdAt:   '2026-07-01T00:00:00.000Z',
    updatedAt:   '2026-07-13T00:00:00.000Z',
  },

  {
    id:         'prod-003',
    slug:       'wide-leg-trousers',
    name:       'Wide-Leg Trousers',
    description:
      'High-rise trousers in a relaxed wide-leg cut. Organic cotton with a slight canvas weight that holds the silhouette without stiffness. Side zip closure. Two front slash pockets, one back welt pocket.',
    price:      195,
    currency:   'USD',
    category:   ProductCategory.BOTTOMS,
    collection: 'ss26',
    season:     'Spring/Summer 2026',
    material:   COTTON_MATERIAL,
    colors:     [COLOR_ECRU],
    variants: [
      {
        id:         'var-003-xs',
        size:       ProductSize.XS,
        color:      COLOR_ECRU,
        stockCount: 3,
        isInStock:  true,
        sku:        'VLR-SS26-WLT-ECR-XS',
      },
      {
        id:         'var-003-s',
        size:       ProductSize.S,
        color:      COLOR_ECRU,
        stockCount: 7,
        isInStock:  true,
        sku:        'VLR-SS26-WLT-ECR-S',
      },
      {
        id:         'var-003-m',
        size:       ProductSize.M,
        color:      COLOR_ECRU,
        stockCount: 11,
        isInStock:  true,
        sku:        'VLR-SS26-WLT-ECR-M',
      },
      {
        id:         'var-003-l',
        size:       ProductSize.L,
        color:      COLOR_ECRU,
        stockCount: 8,
        isInStock:  true,
        sku:        'VLR-SS26-WLT-ECR-L',
      },
    ],
    images:      [],
    isAvailable: true,
    createdAt:   '2026-07-01T00:00:00.000Z',
    updatedAt:   '2026-07-13T00:00:00.000Z',
  },

  {
    id:         'prod-004',
    slug:       'silk-blend-shirt',
    name:       'Silk Blend Shirt',
    description:
      'A fluid, relaxed shirt in silk-cotton blend. The fabric moves with the body. Band collar. Concealed button placket. Slightly longer back hem. Works as a standalone piece or as a layering element under the linen jacket.',
    price:      310,
    currency:   'USD',
    category:   ProductCategory.TOPS,
    collection: 'ss26',
    season:     'Spring/Summer 2026',
    material:   SILK_MATERIAL,
    colors:     [COLOR_IVORY],
    variants: [
      {
        id:         'var-004-xs',
        size:       ProductSize.XS,
        color:      COLOR_IVORY,
        stockCount: 4,
        isInStock:  true,
        sku:        'VLR-SS26-SBS-IVO-XS',
      },
      {
        id:         'var-004-s',
        size:       ProductSize.S,
        color:      COLOR_IVORY,
        stockCount: 9,
        isInStock:  true,
        sku:        'VLR-SS26-SBS-IVO-S',
      },
      {
        id:         'var-004-m',
        size:       ProductSize.M,
        color:      COLOR_IVORY,
        stockCount: 13,
        isInStock:  true,
        sku:        'VLR-SS26-SBS-IVO-M',
      },
      {
        id:         'var-004-l',
        size:       ProductSize.L,
        color:      COLOR_IVORY,
        stockCount: 6,
        isInStock:  true,
        sku:        'VLR-SS26-SBS-IVO-L',
      },
      {
        id:         'var-004-xl',
        size:       ProductSize.XL,
        color:      COLOR_IVORY,
        stockCount: 2,
        isInStock:  true,
        sku:        'VLR-SS26-SBS-IVO-XL',
      },
    ],
    images:      [],
    isAvailable: true,
    createdAt:   '2026-07-01T00:00:00.000Z',
    updatedAt:   '2026-07-13T00:00:00.000Z',
  },
];
