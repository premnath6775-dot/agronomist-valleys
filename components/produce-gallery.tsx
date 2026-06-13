'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { useCart } from '@/components/cart-context';
import { useRef } from 'react';

const PRODUCE = [
  {
    id: 1,
    name: 'Bayam Hijau',
    category: 'Leafy Greens',
    desc: 'Green Spinach. Freshly harvested from lowland farms.',
    img: '/images/bayam-hijau.png',
    moq: 'KG'
  },
  {
    id: 2,
    name: 'Kangkung',
    category: 'Leafy Greens',
    desc: 'Water Spinach. Essential for local wok-fries.',
    img: '/images/kangkung.png',
    moq: 'KG'
  },
  {
    id: 3,
    name: 'Sawi Hijau',
    category: 'Leafy Greens',
    desc: 'Choy Sum. Crisp and versatile for various dishes.',
    img: '/images/sawi-hijau.png',
    moq: 'KG'
  },
  {
    id: 4,
    name: 'Kacang Panjang',
    category: 'Beans & Pods',
    desc: 'Long Bean. Crunchy and perfectly sorted.',
    img: '/items/kacang_panjang.jpg',
    moq: 'KG'
  }
];

function ProduceItem({ item, index, scrollYProgress, opacity, updateQuantity, cart }: { item: any, index: number, scrollYProgress: any, opacity: any, updateQuantity: any, cart: any }) {
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [150 + index * 40, 0, -150 - index * 40]);
  return (
    <motion.div
      style={{ y, opacity }}
      className="group relative block flex flex-col justify-between"
    >
      <div>
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 rounded-sm mb-6 border border-white/5 cursor-pointer">
          <Image 
            src={item.img} 
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
            referrerPolicy="no-referrer"
          />
          {/* Overlay styling for that edgy fast-paced look */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Typography block */}
        <div className="flex flex-col gap-1 mb-6">
          <p className="text-[#bef264] text-[10px] uppercase tracking-[0.15em] font-semibold">{item.category}</p>
          <h3 className="text-2xl font-bold uppercase group-hover:text-[#bef264] transition-colors cursor-pointer">{item.name}</h3>
          <p className="text-sm font-light text-white/60 mt-2">{item.desc}</p>
        </div>
      </div>

      {/* Cart Controller */}
      <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-xs font-bold text-white/50 tracking-wider">QTY</span>
        <div className={`flex items-center gap-3 rounded-full px-1 py-1 transition-all ${cart[item.name] ? 'bg-[#bef264] text-black shadow-[0_0_15px_rgba(190,242,100,0.2)] border border-[#bef264]' : 'bg-black border border-white/10 text-white'}`}>
          <button 
            onClick={() => updateQuantity(item.name, -1)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors disabled:opacity-30 ${cart[item.name] ? 'bg-black/10 hover:bg-black/20' : 'bg-white/5 hover:bg-white/10'}`}
            disabled={!cart[item.name]}
          >
            <Minus size={14} />
          </button>
          <span className={`w-12 text-center font-mono font-bold text-sm ${cart[item.name] ? 'text-black' : 'text-white'}`}>
            {cart[item.name] ? `${cart[item.name]} ${item.moq}` : `0 ${item.moq}`}
          </span>
          <button 
            onClick={() => updateQuantity(item.name, 1)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${cart[item.name] ? 'bg-black/10 hover:bg-black/20' : 'bg-white/5 hover:bg-[#bef264] hover:text-black'}`}
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function ProduceGallery() {
  const { cart, updateQuantity } = useCart();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -150]);
  const btnY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="catalog" className="py-24 px-6 md:px-12 bg-transparent text-white border-b border-white/10">
      
      <div className="container mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
        <motion.h2 
          style={{ y: headerY, opacity }}
          className="text-5xl md:text-[80px] font-black uppercase leading-[0.85] tracking-[-0.04em]"
        >
          Commercial <br />
          <span className="text-[#bef264]">Yield.</span>
        </motion.h2>


      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 container mx-auto">
        {PRODUCE.map((item, index) => (
          <ProduceItem key={item.id} item={item} index={index} scrollYProgress={scrollYProgress} opacity={opacity} updateQuantity={updateQuantity} cart={cart} />
        ))}
      </div>

      <motion.div
        style={{ y: btnY, opacity }}
        className="container mx-auto mt-16 flex flex-col items-center justify-center gap-6"
      >
        <Link href="/catalog" className="bg-[#bef264] text-black px-12 py-5 font-bold uppercase text-sm tracking-widest hover:bg-white transition-colors">
          View Full Catalog
        </Link>
        
        <div className="flex flex-wrap items-center justify-center text-white text-xs md:text-sm font-mono uppercase tracking-widest drop-shadow-lg font-bold">
          <span>Browse Catalog</span>
          <span className="text-[#bef264] font-black px-3 drop-shadow-[0_0_8px_rgba(190,242,100,0.8)]">→</span>
          <span>Submit RFQ</span>
          <span className="text-[#bef264] font-black px-3 drop-shadow-[0_0_8px_rgba(190,242,100,0.8)]">→</span>
          <span>Custom Quote</span>
          <span className="text-[#bef264] font-black px-3 drop-shadow-[0_0_8px_rgba(190,242,100,0.8)]">→</span>
          <span>Delivery</span>
        </div>
      </motion.div>
    </section>
  );
}
