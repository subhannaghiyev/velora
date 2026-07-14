export enum ProductCategory {
  OUTERWEAR = 'outerwear',
  KNITWEAR = 'knitwear',
  BOTTOMS = 'bottoms',
  TOPS = 'tops',
  ACCESSORIES = 'accessories',
}

export enum ProductSize {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
}

export type ProductSortKey = 'newest' | 'price-asc' | 'price-desc' | 'name-asc';

export type ProductImageAngle =
  | 'front'
  | 'back'
  | 'side-3q'
  | 'detail-shoulder'
  | 'detail-fabric'
  | 'flat';

export interface ProductImage {
  id: string;
  src: string;
  alt: string;
  angle: ProductImageAngle;
  colorway: string;
  width: number;
  height: number;
  isPrimary: boolean;
}

export interface ProductMaterial {
  id: string;
  name: string;
  slug: string;
  composition: string;
  careInstructions: string[];
}

export interface ProductColor {
  id: string;
  name: string;
  colorway: string;
  hex: string;
  isAvailable: boolean;
}

export interface ProductVariant {
  id: string;
  size: ProductSize;
  color: ProductColor;
  stockCount: number;
  isInStock: boolean;
  sku: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: 'USD';
  category: ProductCategory;
  collection: string;
  season: string;
  material: ProductMaterial;
  colors: ProductColor[];
  variants: ProductVariant[];
  images: ProductImage[];
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilter {
  category: ProductCategory | null;
  priceMin: number | null;
  priceMax: number | null;
  sizes: ProductSize[];
  collection: string | null;
}

export interface ProductSort {
  key: ProductSortKey;
  label: string;
}

export interface ProductCollection {
  id: string;
  slug: string;
  name: string;
  products: Product[];
  coverImage: ProductImage | null;
}

export interface ProductCardV2Props {
  product: Product;
  priority?: boolean;
}

export interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  emptyMessage?: string;
}
