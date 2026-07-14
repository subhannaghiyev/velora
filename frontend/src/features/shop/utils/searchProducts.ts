import type { Product } from '../types';

export function searchProducts(products: Product[], query: string): Product[] {
  const term = query.trim().toLowerCase();
  if (!term) return products;
  return products.filter((p) => p.name.toLowerCase().includes(term));
}
