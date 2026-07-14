import type { Product } from '../types';

export interface PaginateResult {
  items: Product[];
  totalPages: number;
  totalCount: number;
}

export function paginateProducts(
  products: Product[],
  page: number,
  pageSize: number,
): PaginateResult {
  const totalCount = products.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  const items = products.slice(start, start + pageSize);
  return { items, totalPages, totalCount };
}
