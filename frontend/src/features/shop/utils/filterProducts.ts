import { ProductCategory } from '../types';
import type { Product } from '../types';
import type { ShopChipCategoryId } from '../constants/shop.constants';

const CATEGORY_MAP: Readonly<Partial<Record<ShopChipCategoryId, ProductCategory>>> = {
  outerwear: ProductCategory.OUTERWEAR,
  knitwear:  ProductCategory.KNITWEAR,
  tops:      ProductCategory.TOPS,
  bottoms:   ProductCategory.BOTTOMS,
};

export function filterProducts(
  products: Product[],
  categoryId: ShopChipCategoryId,
): Product[] {
  if (categoryId === 'all') return products;
  const category = CATEGORY_MAP[categoryId];
  if (!category) return products;
  return products.filter((p) => p.category === category);
}
