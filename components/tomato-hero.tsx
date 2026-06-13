'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function TomatoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // BACKGROUND OPACITIES
  // Greenhouse: 0.0 to 0.25
  const greenhouseOpacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const greenhouseY = useTransform(scrollYProgress, [0, 0.25], ["0%", "-30%"]);

  // Lorry: 0.25 to 0.50
  const lorryOpacity = useTransform(scrollYProgress, [0.2, 0.25, 0.45, 0.5], [0, 1, 1, 0]);
  const lorryY = useTransform(scrollYProgress, [0.25, 0.5], ["0%", "-30%"]);

  // Board: 0.50 to 0.70
  const boardOpacity = useTransform(scrollYProgress, [0.45, 0.5, 0.65, 0.7], [0, 1, 1, 0]);
  const boardY = useTransform(scrollYProgress, [0.5, 0.7], ["0%", "-10%"]);

  // Pan: 0.70 to 1.0
  const panOpacity = useTransform(scrollYProgress, [0.65, 0.7, 1.0], [0, 1, 1]);
  // Slight zoom effect for pan
  const panScale = useTransform(scrollYProgress, [0.7, 1.0], [1, 1.05]);

  // TOMATO LOGIC
  // Whole Tomato Opacity: visible until 0.55 (chopped on board)
  const wholeTomatoOpacity = useTransform(scrollYProgress, [0.53, 0.55], [1, 0]);
  // Chopped Tomato Opacity: appears at 0.55
  const choppedTomatoOpacity = useTransform(scrollYProgress, [0.53, 0.55], [0, 1]);

  // Whole tomato scale: slightly pulses or scales to simulate falling/landing
  const wholeTomatoScale = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 0.9, 1]);

  // Chopped Tomato movement
  // X movement: moves right from 0.65 to 0.75
  const choppedTomatoX = useTransform(scrollYProgress, [0.65, 0.75], ["0vw", "15vw"]);
  // Y movement: drops down from 0.75 to 0.85
  const choppedTomatoY = useTransform(scrollYProgress, [0.75, 0.85], ["0vh", "25vh"]);
  const choppedTomatoScale = useTransform(scrollYProgress, [0.75, 0.85], [1, 0.7]);

  // HEADER TEXT REVEAL
  // Appears from 0.85 to 1.0
  const headerOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[500vh] bg-[#050505]">
      {/* Sticky Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* === BACKGROUNDS === */}
        {/* 1. Greenhouse */}
        <motion.div 
          style={{ opacity: greenhouseOpacity, y: greenhouseY }} 
          className="absolute inset-0 w-full h-[130%] -top-[15%] pointer-events-none"
        >
          <Image src="/images/bg-greenhouse.png" alt="Greenhouse" fill className="object-cover opacity-60" priority />
        </motion.div>

        {/* 2. Lorry */}
        <motion.div 
          style={{ opacity: lorryOpacity, y: lorryY }} 
          className="absolute inset-0 w-full h-[130%] -top-[15%] pointer-events-none"
        >
          <Image src="/images/bg-lorry.png" alt="Lorry" fill className="object-cover opacity-60" />
        </motion.div>

        {/* 3. Chopping Board */}
        <motion.div 
          style={{ opacity: boardOpacity, y: boardY }} 
          className="absolute inset-0 w-full h-[110%] -top-[5%] pointer-events-none"
        >
          <Image src="/images/bg-board.png" alt="Chopping Board" fill className="object-cover opacity-70" />
        </motion.div>

        {/* 4. Pan */}
        <motion.div 
          style={{ opacity: panOpacity, scale: panScale }} 
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <Image src="/images/bg-pan.png" alt="Cooking Pan" fill className="object-cover opacity-60" />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </motion.div>

        {/* === FOREGROUND TOMATO === */}
        <div className="absolute z-10 flex items-center justify-center pointer-events-none">
          {/* Whole Tomato */}
          <motion.div 
            style={{ opacity: wholeTomatoOpacity, scale: wholeTomatoScale }}
            className="absolute w-48 h-48 md:w-64 md:h-64"
          >
            <Image src="/images/tomato.png" alt="Fresh Tomato" fill className="object-contain drop-shadow-2xl" />
          </motion.div>

          {/* Chopped Tomato */}
          <motion.div 
            style={{ 
              opacity: choppedTomatoOpacity, 
              x: choppedTomatoX, 
              y: choppedTomatoY,
              scale: choppedTomatoScale 
            }}
            className="absolute w-56 h-56 md:w-72 md:h-72"
          >
            <Image src="/images/chopped-tomato.png" alt="Chopped Tomato" fill className="object-contain drop-shadow-2xl" />
          </motion.div>
        </div>

        {/* === HEADER CONTENT REVEAL === */}
        <motion.div 
          style={{ opacity: headerOpacity, y: headerY }}
          className="w-full flex flex-col justify-center px-6 md:px-12 items-center max-w-5xl mx-auto relative z-20 pointer-events-auto mt-24"
        >
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[80px] md:text-[140px] leading-[0.85] tracking-[-0.04em] font-black uppercase mb-8 drop-shadow-lg">
              URBAN<br/>
              <span className="text-[#bef264]">YIELD</span>
            </h1>
            <p className="text-xl font-light text-white/80 max-w-md mx-auto drop-shadow-md">
              Premium wholesale organic produce delivered to Ampang&apos;s finest kitchens within 12 hours of harvest. Commercial volumes, pristine quality.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#bef264] text-black px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-white transition-colors text-center shadow-lg">
                Contact Us
              </Link>
              <Link href="/catalog" className="border border-white/40 bg-black/40 backdrop-blur-sm text-white px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-white/20 transition-colors shadow-lg">
                VIEW CURRENT YIELD
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
