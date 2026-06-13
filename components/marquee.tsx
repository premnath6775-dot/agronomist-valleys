'use client';

import { useEffect, useRef } from 'react';

export function Marquee({ text }: { text: string }) {
  const repeatedText = text.repeat(4);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    
    const animation = scrollerRef.current.animate(
      [
        { transform: 'translateX(0%)' },
        { transform: 'translateX(-50%)' }
      ],
      {
        duration: 25000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    const onEnter = () => {
      animation.playbackRate = 0.2;
    };
    
    const onLeave = () => {
      animation.playbackRate = 1;
    };

    const parent = scrollerRef.current.parentElement;
    if (parent) {
      parent.addEventListener('mouseenter', onEnter);
      parent.addEventListener('mouseleave', onLeave);
    }

    return () => {
      if (parent) {
        parent.removeEventListener('mouseenter', onEnter);
        parent.removeEventListener('mouseleave', onLeave);
      }
      animation.cancel();
    };
  }, []);

  return (
    <div className="py-8 bg-[#bef264] overflow-hidden whitespace-nowrap flex border-y border-white/10 w-full relative group">
      <div
        ref={scrollerRef}
        className="flex shrink-0 w-max"
      >
        <span className="text-black font-extrabold text-[100px] md:text-[140px] leading-[0.85] tracking-[-0.04em] uppercase whitespace-nowrap">
          {repeatedText}
        </span>
        <span className="text-black font-extrabold text-[100px] md:text-[140px] leading-[0.85] tracking-[-0.04em] uppercase whitespace-nowrap">
          {repeatedText}
        </span>
      </div>
    </div>
  );
}
