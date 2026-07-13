'use client';

import { useState } from 'react';
import { MediaLoader } from './MediaLoader';

export interface HeroVideoProps {
  // Path to the video file (from /public directory).
  // When absent, this component renders nothing — the parent's
  // HeroPoster or section background serves as the visual.
  video?: string;
  // Poster frame path shown before the video plays.
  poster?: string;
  // Hint to the browser that this video should be fetched early.
  priority?: boolean;
  className?: string;
}

// Full-bleed hero video. Absolutely positioned — must be inside a
// MediaContainer (position:relative, overflow:hidden).
//
// ART_DIRECTION §7 requirements:
// - 8–16 seconds, seamlessly loopable
// - 24fps filmic quality
// - Slow, deliberate camera movement only
// - No text, no sound (muted)
//
// When `video` is not provided the component renders null and the parent's
// HeroPoster or section background is the visual. This keeps the hero
// production-ready while no video asset exists yet.
export function HeroVideo({ video, poster, className }: HeroVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (!video) return null;

  const showLoader = !isLoaded && !hasError;

  return (
    <>
      {showLoader && <MediaLoader />}
      <video
        src={video}
        poster={poster}
        autoPlay
        muted
        playsInline
        loop
        onLoadedData={() => setIsLoaded(true)}
        onError={() => {
          setIsLoaded(true);
          setHasError(true);
        }}
        className={className}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          opacity: isLoaded && !hasError ? 1 : 0,
          transition: 'opacity 600ms cubic-bezier(0.0, 0, 0.2, 1)',
        }}
      />
    </>
  );
}
