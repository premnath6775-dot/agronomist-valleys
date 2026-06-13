'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.05]);
  const imgOpacity = useTransform(scrollY, [0, 500], [0.4, 0]);

  return (
    <section className="relative min-h-screen pt-24 flex flex-col">
      <div className="bg-white/10 h-[1px] w-full" />

      <main className="flex-1 flex flex-col justify-center items-center w-full relative overflow-hidden">

        <div className="w-full flex flex-col justify-center px-6 md:px-12 py-12 md:py-0 items-center max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ y, opacity }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-[100px] md:text-[140px] leading-[0.85] tracking-[-0.04em] font-black uppercase mb-8 drop-shadow-2xl" style={{ textShadow: '0px 10px 20px rgba(0,0,0,0.8), 0px 4px 8px rgba(0,0,0,0.6)' }}>
              URBAN<br/>
              <span className="text-[#bef264]" style={{ textShadow: '0px 10px 20px rgba(0,0,0,0.6), 0px 4px 8px rgba(0,0,0,0.4)' }}>YIELD</span>
            </h1>
            <p className="text-xl font-light text-white/90 max-w-md mx-auto drop-shadow-xl" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.8)' }}>
              Premium wholesale organic produce harvested from our Labu Farmhouse and delivered to the finest kitchens within 12 hours of harvest. Commercial volumes, pristine quality.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#bef264] text-black px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-white transition-colors text-center">
                Contact Us
              </Link>
              <Link href="/catalog" className="border border-white/20 text-white px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-white/10 transition-colors text-center">
                VIEW CURRENT YIELD
              </Link>
            </div>
          </motion.div>
        </div>

      </main>
    </section>
  );
}
