'use client';

import { useCallback, useMemo } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { parseShopParams, buildShopParams } from '../utils/queryParams';
import type { ShopParams } from '../utils/queryParams';
import type { ShopChipCategoryId, ShopSortDisplay } from '../constants/shop.constants';

type NavigateMethod = 'push' | 'replace';

export function useShopQueryState() {
  const router   = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = useMemo(
    () => parseShopParams(searchParams),
    [searchParams],
  );

  // Core navigation primitive — merges partial state and navigates.
  // Calling router.push/replace is an external side-effect, not setState.
  const navigate = useCallback(
    (next: Partial<ShopParams>, method: NavigateMethod = 'push') => {
      const merged: ShopParams = { ...params, ...next };
      const qs = buildShopParams(merged);
      const url = qs ? `${pathname}?${qs}` : pathname;
      if (method === 'replace') {
        router.replace(url, { scroll: false });
      } else {
        router.push(url, { scroll: false });
      }
    },
    [params, router, pathname],
  );

  // ── Public handlers ──────────────────────────────────────────────────────

  // Category change creates a history entry and resets page.
  const setCategory = useCallback(
    (categoryId: ShopChipCategoryId) => navigate({ categoryId, page: 1 }),
    [navigate],
  );

  // Sort change creates a history entry but keeps the current page.
  const setSort = useCallback(
    (sort: ShopSortDisplay) => navigate({ sort }),
    [navigate],
  );

  // Search replaces the current history entry (avoid per-keystroke history spam).
  // Page resets to 1 so the user always sees the top of new results.
  const setSearch = useCallback(
    (searchQuery: string) => navigate({ searchQuery, page: 1 }, 'replace'),
    [navigate],
  );

  // Page change creates a history entry (intentional navigation).
  const setPage = useCallback(
    (page: number) => navigate({ page }),
    [navigate],
  );

  // Silent page correction — replaces current entry without adding to history.
  // Used when the stored page exceeds total available pages after filtering.
  const setPageSilent = useCallback(
    (page: number) => navigate({ page }, 'replace'),
    [navigate],
  );

  // Reset clears all params and pushes to the clean pathname.
  const reset = useCallback(
    () => router.push(pathname, { scroll: false }),
    [router, pathname],
  );

  return {
    categoryId:   params.categoryId,
    sort:         params.sort,
    searchQuery:  params.searchQuery,
    page:         params.page,
    setCategory,
    setSort,
    setSearch,
    setPage,
    setPageSilent,
    reset,
  };
}
