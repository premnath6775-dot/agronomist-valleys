'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const ALBUM = [
  {
    id: "farmhouse",
    src: "/supply chain/gemini_greenhouse.png",
    title: "Labu Farmhouse",
    desc: "Controlled environment agriculture",
    details: [
      { image: "/supply chain/labu_farmhouse2.jpeg", title: "Climate Control", desc: "Automated venting and shading systems." },
      { image: "/supply chain/labu_farmhouse3.jpeg", title: "Irrigation", desc: "Closed-loop water recycling." },
      { image: "/supply chain/labu_farmhouse.jpeg", title: "Monitoring", desc: "IoT sensors track humidity and temperature 24/7." }
    ]
  },
  {
    id: "hydroponic",
    src: "/supply chain/hydroponic_systems.jpg",
    title: "Hydroponic Systems",
    desc: "Precision nutrient delivery",
    details: [
      { image: "/supply chain/nutrient_film.jpg", title: "Nutrient Film", desc: "Constantly flowing nutrient-rich water." },
      { image: "/supply chain/vertical_stacking.jpg", title: "Vertical Stacking", desc: "High-density leafy green production." },
      { image: "/supply chain/root_health.jpg", title: "Root Health", desc: "Highly oxygenated root zones." }
    ]
  },
  {
    id: "harvest",
    src: "/supply chain/daily_harvest.jpeg",
    title: "Daily Harvest",
    desc: "0500 HRS dispatch routine",
    details: [
      { image: "/supply chain/pre-dawn_ops.jpg", title: "Pre-dawn Ops", desc: "Harvesting begins strictly at 0400 HRS." },
      { image: "/supply chain/quality_check.jpeg", title: "Quality Check", desc: "First pass visual grading at the source." },
      { image: "/supply chain/rapid_chilling.jpg", title: "Rapid Chilling", desc: "Immediate cool-down to lock in crunch." }
    ]
  },
  {
    id: "delivery",
    src: "/supply chain/lorry_ac.jpeg",
    title: "Cold Chain Logistics",
    desc: "Preserving peak freshness",
    details: [
      { image: "/supply chain/big_lorry.jpeg", title: "Refrigerated Fleet", desc: "Maintaining 4°C from farm to kitchen." },
      { image: "/supply chain/small_lorry.jpeg", title: "Route Optimization", desc: "Quick driven dispatch for our hubs." },
      { image: "/supply chain/gemini_map.png", title: "Live Tracking", desc: "Real-time ETA visibility for chefs." }
    ]
  },
  {
    id: "innovation",
    src: "/supply chain/R&D_lab.jpg",
    title: "R&D Lab",
    desc: "Innovating tomorrow's agriculture",
    details: [
      { image: "/supply chain/seed_trials.jpg", title: "Seed Trials", desc: "Testing heirloom varieties for viability." },
      { image: "/supply chain/light_recipes.jpg", title: "Light Recipes", desc: "Optimizing LED spectrums for flavor." },
      { image: "/supply chain/data_analytics.jpg", title: "Data Analytics", desc: "Machine learning for yield prediction." }
    ]
  }
];

export function AboutAlbum() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {ALBUM.map((photo) => {
        const isExpanded = expandedId === photo.id;

        return (
          <motion.div 
            layout
            key={photo.id}
            onClick={() => {
              if (!isExpanded) setExpandedId(photo.id);
            }}
            className={`group relative overflow-hidden rounded-sm border border-white/10 bg-zinc-900 ${isExpanded ? 'w-full min-h-[500px]' : 'w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] aspect-square cursor-pointer'}`}
          >
            <Image 
              src={photo.src}
              alt={photo.title}
              fill
              className={`object-cover transition-all duration-1000 ${isExpanded ? 'opacity-20 grayscale-0' : 'opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 group-hover:scale-105'}`}
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${isExpanded ? 'from-[#050505]/90 via-[#050505]/80 to-[#050505]/60' : 'from-black/80 via-black/20 to-transparent'} pointer-events-none`} />
            
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 p-6 pointer-events-none transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#bef264] mb-2 drop-shadow-md">{photo.desc}</div>
                <h3 className="text-xl font-black uppercase tracking-tight text-white drop-shadow-md">{photo.title}</h3>
                <div className="mt-2 text-xs text-white/50 uppercase tracking-widest group-hover:text-white transition-colors">Click to Expand</div>
              </div>
            )}

            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="relative z-10 p-6 md:p-12 w-full h-full flex flex-col"
                >
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-[#bef264] mb-2">{photo.desc}</div>
                      <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">{photo.title}</h3>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setExpandedId(null); }}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors shrink-0 outline-none"
                    >
                      <X className="w-6 h-6 text-white" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
                    {photo.details.map((detail, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        key={detail.title} 
                        className="flex flex-col items-center text-center group/member"
                      >
                        <div className={`relative w-32 h-32 md:w-48 md:h-48 rounded-sm overflow-hidden mb-6 border-2 border-white/10 group-hover/member:border-[#bef264] transition-colors`}>
                          <Image src={detail.image} alt={detail.title} fill className="object-cover grayscale group-hover/member:grayscale-0 transition-all duration-500" />
                        </div>
                        <h4 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">{detail.title}</h4>
                        {(detail as any).subtitle && <div className="text-[#bef264] font-mono text-sm tracking-widest uppercase mb-4">{(detail as any).subtitle}</div>}
                        <p className={`text-white/60 font-light leading-relaxed max-w-sm ${!(detail as any).subtitle && 'mt-2'}`}>
                          {detail.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
