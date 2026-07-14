import { SHOP_CHIP_CATEGORIES } from '../constants/shop.constants';
import type { ShopChipCategoryId, ShopSortDisplay } from '../constants/shop.constants';

// ─── Defaults ────────────────────────────────────────────────────────────────

export const DEFAULT_CATEGORY: ShopChipCategoryId = 'all';
export const DEFAULT_SORT: ShopSortDisplay = 'Featured';
export const DEFAULT_PAGE = 1;

// ─── Sort serialization ───────────────────────────────────────────────────────

export const SORT_TO_URL: Readonly<Record<ShopSortDisplay, string>> = {
  'Featured':          'featured',
  'Newest':            'newest',
  'Price: low to high': 'price-asc',
  'Price: high to low': 'price-desc',
  'Name: A → Z':       'name-asc',
  'Name: Z → A':       'name-desc',
};

const URL_TO_SORT: Readonly<Record<string, ShopSortDisplay>> = Object.fromEntries(
  (Object.entries(SORT_TO_URL) as [ShopSortDisplay, string][]).map(([display, url]) => [url, display]),
);

// ─── Category validation ─────────────────────────────────────────────────────

const VALID_CATEGORY_IDS = new Set<string>(SHOP_CHIP_CATEGORIES.map((c) => c.id));

function isValidCategoryId(value: string): value is ShopChipCategoryId {
  return VALID_CATEGORY_IDS.has(value);
}

// ─── Shared state shape ───────────────────────────────────────────────────────

export interface ShopParams {
  categoryId: ShopChipCategoryId;
  sort: ShopSortDisplay;
  searchQuery: string;
  page: number;
}

// ─── Parse ───────────────────────────────────────────────────────────────────

type ReadableParams = Pick<URLSearchParams, 'get'>;

export function parseShopParams(params: ReadableParams): ShopParams {
  const rawCategory = params.get('category') ?? '';
  const rawSort = params.get('sort') ?? '';
  const rawSearch = params.get('search') ?? '';
  const rawPage = params.get('page') ?? '';

  const categoryId: ShopChipCategoryId = isValidCategoryId(rawCategory)
    ? rawCategory
    : DEFAULT_CATEGORY;

  const sort: ShopSortDisplay = URL_TO_SORT[rawSort] ?? DEFAULT_SORT;

  const searchQuery = rawSearch.trim();

  const parsedPage = parseInt(rawPage, 10);
  const page = Number.isFinite(parsedPage) && parsedPage >= 1 ? parsedPage : DEFAULT_PAGE;

  return { categoryId, sort, searchQuery, page };
}

// ─── Serialize ───────────────────────────────────────────────────────────────

export function buildShopParams(state: ShopParams): string {
  const p = new URLSearchParams();

  if (state.categoryId !== DEFAULT_CATEGORY) {
    p.set('category', state.categoryId);
  }
  if (state.searchQuery) {
    p.set('search', state.searchQuery);
  }
  if (state.sort !== DEFAULT_SORT) {
    p.set('sort', SORT_TO_URL[state.sort]);
  }
  if (state.page > DEFAULT_PAGE) {
    p.set('page', String(state.page));
  }

  return p.toString();
}
