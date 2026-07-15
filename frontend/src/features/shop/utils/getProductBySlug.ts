import { SS26_PRODUCTS } from '../data/mock.data';
import type { Product } from '../types';

export function getProductBySlug(slug: string): Product | undefined {
  return SS26_PRODUCTS.find((product) => product.slug === slug);
}
