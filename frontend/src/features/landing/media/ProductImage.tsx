import Image from 'next/image';
import { MediaFallback } from './MediaFallback';

export interface ProductImageProps {
  src?: string;
  alt: string;
  priority?: boolean;
  // Default sizes matches 4-col desktop / 2-col mobile product grid.
  // Override when used in a different layout context.
  sizes?: string;
  className?: string;
}

// Product photography component — 3:4 portrait format (fashion standard).
// Parent MediaContainer must set aspectRatio: '3/4' for correct rendering.
// Images follow ART_DIRECTION §6: editorial crop, directional lighting, no white sweep.
// When src is absent, renders a clean editorial placeholder (not a loading skeleton).
export function ProductImage({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 900px) 50vw, 25vw',
  className,
}: ProductImageProps) {
  if (!src) {
    return <MediaFallback />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      style={{ objectFit: 'cover', objectPosition: 'center top' }}
    />
  );
}
