'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const ALBUM = [
  {
    src: "/supply chain/gemini_greenhouse.png",
    title: "Labu Farmhouse",
    desc: "Controlled environment agriculture"
  },
  {
    src: "/supply chain/hydroponic_systems.jpg",
    title: "Hydroponic Systems",
    desc: "Precision nutrient delivery"
  },
  {
    src: "/supply chain/daily_harvest.jpeg",
    title: "Daily Harvest",
    desc: "0500 HRS dispatch routine"
  },
  {
    src: "/supply chain/lorry_ac.jpeg",
    title: "Cold Chain Logistics",
    desc: "Preserving peak freshness"
  }
];

function PhotoCard({ photo, index, scrollYProgress, opacity }: { photo: any, index: number, scrollYProgress: any, opacity: any }) {
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100 + index * 30, 0, -100 - index * 30]);
  return (
    <motion.div 
      style={{ y, opacity }}
      className="group relative aspect-[4/3] sm:aspect-video md:aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-2xl"
    >
      <Image 
        src={photo.src}
        alt={photo.title}
        fill
        className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 p-6 pointer-events-none transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="text-[10px] uppercase font-bold tracking-widest text-[#bef264] mb-2 drop-shadow-md">{photo.desc}</div>
        <h3 className="text-2xl font-black uppercase tracking-tight text-white drop-shadow-md">{photo.title}</h3>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="philosophy" className="p-6 md:p-12 md:py-32 bg-transparent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Top: Typography & Intro */}
        <div className="flex flex-col lg:flex-row gap-12 items-end">
          <div className="lg:w-1/2">
            <motion.h2 
              style={{ y: y1, opacity }}
              className="text-5xl md:text-[90px] font-black uppercase leading-[0.85] tracking-[-0.04em] drop-shadow-2xl"
            >
              We scale <br />
              <span className="text-transparent [-webkit-text-stroke:2px_#bef264] relative group">
                VITALITY
                <span className="absolute inset-0 bg-[#bef264] text-black w-full h-full text-left overflow-hidden whitespace-nowrap pt-[2px] transition-all duration-1000 w-0 group-hover:w-full">
                  VITALITY
                </span>
              </span>
            </motion.h2>
          </div>

          <motion.div 
            style={{ y: y2, opacity }}
            className="lg:w-1/2 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <p className="text-xl font-light text-white/90 leading-relaxed mb-8">
              Explore our state of the art facilities in Labu, Malaysia. Deep within our operational hub, data driven climate control systems meet meticulous agronomic care. Witness the lifecycle of our commercial produce from precision hydroponic germination to our rapid cold chain dispatch network.
            </p>
            <Link href="/about-us" className="bg-[#bef264] text-black px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-[#bef264]/80 transition-colors inline-block text-center rounded-full shadow-[0_0_20px_rgba(190,242,100,0.3)]">
              ABOUT US
            </Link>
          </motion.div>
        </div>

        {/* Bottom: Photo Album Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {ALBUM.map((photo, index) => (
             <PhotoCard key={index} photo={photo} index={index} scrollYProgress={scrollYProgress} opacity={opacity} />
          ))}
        </div>

      </div>
    </section>
  );
}
