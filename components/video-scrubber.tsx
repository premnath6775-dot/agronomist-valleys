"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "motion/react";

export function VideoScrubber({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  // Track the scroll progress through this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    restDelta: 0.001,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    if (video.readyState >= 1) {
      setDuration(video.duration);
    } else {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (videoRef.current && duration > 0) {
      videoRef.current.currentTime = latest * duration;
    }
  });

  return (
    <div ref={containerRef} className="relative w-full isolate">
      {/* Background scrubbing video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <video
            ref={videoRef}
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Target sections mapped inside */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
