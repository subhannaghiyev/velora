import { ProductCategory, ProductSize } from '../types';
import type { ProductFilter, ProductSort } from '../types';

export const PRODUCT_CATEGORY_LABELS: Record<ProductCategory, string> = {
  [ProductCategory.OUTERWEAR]:   'Outerwear',
  [ProductCategory.KNITWEAR]:    'Knitwear',
  [ProductCategory.BOTTOMS]:     'Bottoms',
  [ProductCategory.TOPS]:        'Tops',
  [ProductCategory.ACCESSORIES]: 'Accessories',
};

export const PRODUCT_SIZE_ORDER: ProductSize[] = [
  ProductSize.XS,
  ProductSize.S,
  ProductSize.M,
  ProductSize.L,
  ProductSize.XL,
  ProductSize.XXL,
];

export const PRODUCT_SORT_OPTIONS: ProductSort[] = [
  { key: 'newest',     label: 'Newest' },
  { key: 'price-asc',  label: 'Price: low to high' },
  { key: 'price-desc', label: 'Price: high to low' },
  { key: 'name-asc',   label: 'Name: A–Z' },
];

export const DEFAULT_SORT: ProductSort = PRODUCT_SORT_OPTIONS[0];

export const PRICE_RANGE = {
  MIN: 0,
  MAX: 2000,
} as const;

export const DEFAULT_FILTER: ProductFilter = {
  category:   null,
  priceMin:   null,
  priceMax:   null,
  sizes:      [],
  collection: null,
};

export const SHOP_PAGE_SIZE = 12;
