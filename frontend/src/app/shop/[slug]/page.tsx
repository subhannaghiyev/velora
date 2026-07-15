import { notFound } from 'next/navigation';
import Box from '@mui/material/Box';
import { MainLayout } from '@/components/layout/MainLayout';
import { SS26_PRODUCTS } from '@/features/shop';
import { getProductBySlug } from '@/features/shop/utils/getProductBySlug';
import { ProductBreadcrumb } from '@/features/shop/components/ProductBreadcrumb';
import { ProductDetailsLayout } from '@/features/shop/components/ProductDetailsLayout';
import { ProductGallery } from '@/features/shop/components/ProductGallery';
import { ProductInformation } from '@/features/shop/components/ProductInformation';

interface ProductPageParams {
  slug: string;
}

export function generateStaticParams() {
  return SS26_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<ProductPageParams>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <MainLayout>
      <Box
        component="article"
        aria-labelledby="product-name"
        sx={{
          pt: { xs: 10, md: 12 },
          pb: { xs: 16, md: 24 },
          px: { xs: 3, md: 6, lg: 10 },
          maxWidth: 1440,
          mx: 'auto',
        }}
      >
        <ProductBreadcrumb product={product} />
        <ProductDetailsLayout
          gallery={<ProductGallery product={product} />}
          information={<ProductInformation product={product} />}
        />
      </Box>
    </MainLayout>
  );
}
