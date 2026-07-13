import Image from 'next/image';
import { MediaFallback } from './MediaFallback';

export interface CampaignImageProps {
  src?: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  dark?: boolean;
  className?: string;
}

// Editorial campaign image for brand story, craftsmanship, and editorial sections.
// Every image in a campaign set should share the same lighting setup and color grade
// per ART_DIRECTION §8 (Higgsfield Guidelines — Consistency Rules).
// When src is absent, renders a reserved editorial placeholder.
export function CampaignImage({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 900px) 100vw, 80vw',
  objectPosition = 'center',
  dark = false,
  className,
}: CampaignImageProps) {
  if (!src) {
    return (
      <MediaFallback
        dark={dark}
        sublabel="Reserved for Higgsfield Editorial Campaign"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      style={{ objectFit: 'cover', objectPosition }}
    />
  );
}
