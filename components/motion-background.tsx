'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export function MotionBackground() {
  const { scrollYProgress } = useScroll();

  // Parallax: the entire background container moves up slightly as we scroll down
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  // Image 0 (Header/Hero Image): 0 to 0.2 fades out
  const opacity0 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);

  // Image 1 (Green Lush): Fades in at 0.15, fades out at 0.5
  const opacity1 = useTransform(scrollYProgress, [0.15, 0.25, 0.4, 0.5], [0, 1, 1, 0]);

  // Image 2 (Veggie Crates): Fades in at 0.4, fades out at 0.8
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.5, 0.7, 0.8], [0, 1, 1, 0]);

  // Image 3 (Dark Harvest Footer): Fades in at 0.7
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);

  // Slight zoom effect to make it feel more immersive
  const scale = 1.15;

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#020502]">
      <motion.div 
        style={{ y: yParallax, scale }} 
        className="absolute inset-0 w-full h-[115%] origin-top opacity-80"
      >
        {/* Image 0: Original Sweeping Valley Hero */}
        <motion.div style={{ opacity: opacity0 }} className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/hero-vegetables-dark-marble.png" 
            alt="Organic Farm Valley" 
            fill 
            className="object-cover object-bottom"
            priority
            quality={100}
            unoptimized
          />
        </motion.div>

        {/* Image 1: Lush Farm Vegetables */}
        <motion.div style={{ opacity: opacity1 }} className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/farm-bg-1.png" 
            alt="Lush Farm Vegetables" 
            fill 
            className="object-cover"
            quality={100}
            unoptimized
          />
        </motion.div>

        {/* Image 2: Mid Section Veggies */}
        <motion.div style={{ opacity: opacity2 }} className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/farm-bg-2.png" 
            alt="Fresh Veggie Crates" 
            fill 
            className="object-cover"
            quality={100}
            unoptimized
          />
        </motion.div>

        {/* Image 3: Footer Harvest */}
        <motion.div style={{ opacity: opacity3 }} className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/farm-bg-3.png" 
            alt="Bountiful Harvest" 
            fill 
            className="object-cover"
            quality={100}
            unoptimized
          />
        </motion.div>
      </motion.div>
      
      {/* Seamless gradient overlay to ensure text remains readable but colors pop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020502]/10 via-[#020502]/40 to-[#020502]/70 pointer-events-none mix-blend-multiply" />
    </div>
  );
}
