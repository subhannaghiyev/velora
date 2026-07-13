import Image from 'next/image';
import { MediaFallback } from './MediaFallback';

export interface HeroPosterProps {
  src?: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  dark?: boolean;
  className?: string;
}

// Full-bleed editorial still image.
// Used as hero background and video poster frame.
// When src is absent, renders MediaFallback so the space remains intentional.
export function HeroPoster({
  src,
  alt,
  priority = false,
  sizes = '100vw',
  dark = false,
  className,
}: HeroPosterProps) {
  if (!src) {
    return <MediaFallback dark={dark} sublabel="Reserved for Hero Campaign" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      style={{ objectFit: 'cover', objectPosition: 'center' }}
    />
  );
}
