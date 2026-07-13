import { MainLayout } from '@/components/layout/MainLayout';
import { HeroSection } from '@/features/landing/components/HeroSection';
import { BrandStorySection } from '@/features/landing/components/BrandStorySection';
import { CraftsmanshipSection } from '@/features/landing/components/CraftsmanshipSection';
import { DesignerPreviewSection } from '@/features/landing/components/DesignerPreviewSection';
import { FeaturedCollectionSection } from '@/features/landing/components/FeaturedCollectionSection';
import { FinalCtaSection } from '@/features/landing/components/FinalCtaSection';

export default function HomePage() {
  return (
    <MainLayout heroLayout>
      <HeroSection />
      <BrandStorySection />
      <CraftsmanshipSection />
      <DesignerPreviewSection />
      <FeaturedCollectionSection />
      <FinalCtaSection />
    </MainLayout>
  );
}
