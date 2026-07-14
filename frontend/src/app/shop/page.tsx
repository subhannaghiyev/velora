import type { Metadata } from 'next';
import { MainLayout } from '@/components/layout/MainLayout';
import { ShopHero } from '@/features/shop/components/ShopHero';
import { ShopGrid } from '@/features/shop/components/ShopGrid';
import { ShopClosing } from '@/features/shop/components/ShopClosing';
import { SS26_PRODUCTS } from '@/features/shop';

export const metadata: Metadata = {
  title: 'Shop — Velora',
  description: 'Spring/Summer 2026 collection. Four garments designed to be worn together or apart.',
};

export default function ShopPage() {
  return (
    <MainLayout>
      <ShopHero />
      <ShopGrid products={SS26_PRODUCTS} />
      <ShopClosing />
    </MainLayout>
  );
}
