'use client';

import { useState, useCallback, useRef, useId } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { rawColors, duration, easing, radius } from '@/theme';
import type { Product } from '../types';

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const { images, name, season } = product;

  // ── All hooks must run unconditionally ────────────────────────────────────

  const initialIndex = Math.max(0, images.findIndex((img) => img.isPrimary));
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const panelId = useId();
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const navigate = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(images.length - 1, index));
      setActiveIndex(clamped);
      thumbRefs.current[clamped]?.focus();
    },
    [images.length],
  );

  // ── Graceful no-image state (after all hooks) ─────────────────────────────

  if (images.length === 0) {
    return (
      <Box
        component="figure"
        sx={{ m: 0 }}
        aria-label={`${name} — product photography`}
      >
        <Box
          sx={{
            aspectRatio:    '3 / 4',
            bgcolor:        rawColors.neutral[100],
            border:         `1px solid ${rawColors.neutral[200]}`,
            borderRadius:   `${radius.xs}px`,
            display:        'flex',
            flexDirection:  'column',
            alignItems:     'center',
            justifyContent: 'center',
            gap:            2,
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize:      '0.6875rem',
              fontWeight:    600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color:         rawColors.neutral[400],
            }}
          >
            {name}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize:      '0.5625rem',
              fontWeight:    500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color:         rawColors.neutral[300],
            }}
          >
            {season}
          </Typography>
        </Box>
      </Box>
    );
  }

  // ── Keyboard navigation handler ───────────────────────────────────────────

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (images.length <= 1) return;
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        navigate(activeIndex - 1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        navigate(activeIndex + 1);
        break;
      case 'Home':
        e.preventDefault();
        navigate(0);
        break;
      case 'End':
        e.preventDefault();
        navigate(images.length - 1);
        break;
    }
  }

  const activeImage = images[activeIndex];

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <Box
      component="figure"
      sx={{ m: 0 }}
      aria-label={`${name} — product photography`}
    >
      {/*
       * Primary image — keyed on activeIndex so React remounts on change.
       * The CSS @keyframes fade-in fires on each remount, producing a smooth
       * opacity transition without JavaScript timing code.
       */}
      <Box
        key={activeIndex}
        id={panelId}
        role="img"
        aria-label={activeImage.alt}
        sx={{
          '@keyframes galleryFadeIn': {
            from: { opacity: 0 },
            to:   { opacity: 1 },
          },
          animation:    `galleryFadeIn ${duration.normal}ms ${easing.enter}`,
          position:     'relative',
          aspectRatio:  '3 / 4',
          overflow:     'hidden',
          borderRadius: `${radius.xs}px`,
          bgcolor:      rawColors.neutral[100],
        }}
      >
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, (max-width: 1440px) 55vw, 792px"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </Box>

      {/* Thumbnail strip — hidden when only one image exists */}
      {images.length > 1 && (
        <Box
          role="tablist"
          aria-label="Select product image"
          onKeyDown={handleKeyDown}
          sx={{
            display:        'flex',
            gap:            1.5,
            mt:             2,
            overflowX:      'auto',
            pb:             0.5,
            scrollSnapType: 'x mandatory',
          }}
        >
          {images.map((img, i) => (
            <ButtonBase
              key={img.id}
              role="tab"
              type="button"
              aria-selected={i === activeIndex}
              aria-controls={panelId}
              aria-label={img.alt}
              tabIndex={i === activeIndex ? 0 : -1}
              disableRipple
              onClick={() => navigate(i)}
              ref={(el) => {
                thumbRefs.current[i] = el as HTMLButtonElement | null;
              }}
              sx={{
                position:        'relative',
                width:           72,
                flexShrink:      0,
                aspectRatio:     '3 / 4',
                overflow:        'hidden',
                borderRadius:    `${radius.xs}px`,
                bgcolor:         rawColors.neutral[100],
                scrollSnapAlign: 'start',
                outline:         'none',
                display:         'block',
                transition:      `box-shadow ${duration.fast}ms ${easing.standard}`,
                boxShadow:
                  i === activeIndex
                    ? `0 0 0 2px ${rawColors.gold[400]}`
                    : `0 0 0 1px ${rawColors.neutral[200]}`,
                '&:hover': {
                  boxShadow:
                    i === activeIndex
                      ? `0 0 0 2px ${rawColors.gold[400]}`
                      : `0 0 0 1px ${rawColors.neutral[400]}`,
                },
                '&:focus-visible': {
                  outline:       `2px solid ${rawColors.gold[400]}`,
                  outlineOffset: 2,
                  boxShadow:     'none',
                },
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="72px"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </ButtonBase>
          ))}
        </Box>
      )}
    </Box>
  );
}
