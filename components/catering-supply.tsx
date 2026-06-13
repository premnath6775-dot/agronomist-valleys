'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import { Utensils, Coffee, Store, GraduationCap, Hospital, ShoppingCart, PawPrint } from 'lucide-react';

const clients = [
  { name: "RESTAURANT", icon: Utensils },
  { name: "CANTEEN", icon: Coffee },
  { name: "RETAILER", icon: Store },
  { name: "UNIVERSITY/COLLEGE/SCHOOL", icon: GraduationCap },
  { name: "HOSPITAL", icon: Hospital },
  { name: "SUPERMARKET/HYPERMARKET", icon: ShoppingCart },
  { name: "PETTING ZOO", icon: PawPrint }
];

function ClientItem({ client, index, scrollYProgress, opacity }: { client: { name: string, icon: any }, index: number, scrollYProgress: any, opacity: any }) {
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50 + index * 20, 0, -50 - index * 20]);
  const Icon = client.icon;
  return (
    <motion.li 
      style={{ y, opacity }}
      className="flex items-start font-bold uppercase tracking-wider text-sm md:text-base border-b border-white/5 pb-4 text-white/80 break-words group"
    >
      <div className="mt-0.5 mr-4 bg-white/5 p-2.5 rounded-md border border-white/10 group-hover:bg-[#bef264]/10 group-hover:border-[#bef264]/30 transition-colors shrink-0">
        <Icon className="w-5 h-5 text-[#bef264]" strokeWidth={2.5} />
      </div>
      <span className="break-words w-full mt-2 group-hover:text-[#bef264] transition-colors">{client.name}</span>
    </motion.li>
  );
}

export function CateringSupply() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const headerX = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="p-6 md:p-12 md:py-24 relative bg-transparent text-white overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="md:w-1/3 space-y-10">
           <motion.h2 
            style={{ x: headerX, opacity }}
            className="text-3xl md:text-5xl font-black uppercase leading-[1.1] tracking-[-0.04em] text-white"
           >
            We Deliver and Supply to Corporate Catering
           </motion.h2>

           <motion.div style={{ opacity }} className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <svg className="w-5 h-5 text-[#bef264]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-widest text-sm mb-1 text-[#bef264]">Nationwide Coverage</h3>
                <p className="text-white/60 text-sm">Daily delivery across all of Peninsular Malaysia.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <svg className="w-5 h-5 text-[#bef264]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-widest text-sm mb-1 text-[#bef264]">Minimum Order (MOQ)</h3>
                <p className="text-white/60 text-sm">Minimum order volume for free delivery is 50kg within Klang Valley.</p>
              </div>
            </div>

          </motion.div>
        </div>
        
        <div className="md:w-2/3 bg-black/60 backdrop-blur-md rounded-sm p-8 md:p-12 border border-white/10 w-full shadow-2xl">
           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
             {clients.map((client, i) => (
                <ClientItem key={client.name} client={client} index={i} scrollYProgress={scrollYProgress} opacity={opacity} />
             ))}
           </ul>
        </div>
      </div>
    </section>
  )
}
