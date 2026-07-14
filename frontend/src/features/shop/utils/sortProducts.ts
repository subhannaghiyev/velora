import type { Product } from '../types';
import type { ShopSortDisplay } from '../constants/shop.constants';

export function sortProducts(
  products: Product[],
  sort: ShopSortDisplay,
): Product[] {
  const items = [...products];

  switch (sort) {
    case 'Featured':
      return items;

    case 'Newest':
      return items.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );

    case 'Price: low to high':
      return items.sort((a, b) => a.price - b.price);

    case 'Price: high to low':
      return items.sort((a, b) => b.price - a.price);

    case 'Name: A → Z':
      return items.sort((a, b) => a.name.localeCompare(b.name));

    case 'Name: Z → A':
      return items.sort((a, b) => b.name.localeCompare(a.name));

    default:
      return items;
  }
}
