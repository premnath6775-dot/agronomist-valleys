'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import { MapPin, Clock, Store, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

const branches = [
  {
    name: "Ampang Fresh Mart",
    type: "Retail & Wholesale Outlet",
    address: "No 17A-G, Jalan Wawasan 4/6, Bandar Baru Ampang, 68000 Ampang, Selangor",
    hours: "Monday to Sunday | 24 Hours",
    image: "/images/ampang_entrance.jpg",
    link: "https://maps.google.com/?q=Ampang+Fresh+Mart",
    description: "Our flagship retail outlet offers farm-fresh vegetables and herbs straight from our greenhouses. Customers can walk in and hand-pick the freshest produce daily, with wholesale options available for restaurants and caterers.",
    interiors: [
      "/images/ampang_interior_1.jpg",
      "/images/ampang_interior_2.jpg",
      "/images/ampang_interior_3.jpg"
    ]
  }
]

export function OutletsSection() {
  const ref = useRef<HTMLElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -150]);
  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="outlets" className="p-6 md:p-12 md:py-32 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 items-end">
          <div className="lg:w-1/2">
            <motion.p
              style={{ y: headerY, opacity }}
              className="text-[#bef264] text-xs font-mono tracking-widest uppercase mb-4"
            >
              Local Presence
            </motion.p>
            <motion.h2
              style={{ y: headerY, opacity }}
              className="text-5xl md:text-[80px] font-black uppercase leading-[0.85] tracking-[-0.04em]"
            >
              Our <br />
              <span className="text-transparent [-webkit-text-stroke:2px_#bef264] relative group drop-shadow-lg">
                Outlets
                <span className="absolute inset-0 bg-[#bef264] text-black w-full h-full text-left overflow-hidden whitespace-nowrap pt-[2px] transition-all duration-1000 w-0 group-hover:w-full">
                  Outlets
                </span>
              </span>
            </motion.h2>
          </div>

          <motion.div
            style={{ y: headerY, opacity }}
            className="lg:w-1/2"
          >
            <p className="text-xl font-light text-white/90 leading-relaxed max-w-md">
              Bringing farm-fresh commercial produce directly to the local community. Visit our retail fronts to see the quality firsthand.
            </p>
          </motion.div>
        </div>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                layout
                transition={{ type: "spring", bounce: 0.15, duration: 0.7 }}
                key={index}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                style={isExpanded ? {} : { y: cardY, opacity }}
                className={`group relative bg-black/20 backdrop-blur-2xl border border-white/10 overflow-hidden hover:border-[#bef264]/50 hover:shadow-[0_20px_50px_rgba(190,242,100,0.15)] transition-colors transition-shadow duration-500 block cursor-pointer ${isExpanded ? 'col-span-1 md:col-span-2 lg:col-span-3 rounded-[1.5rem]' : 'rounded-[2rem]'}`}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Main Info Section */}
                  <div className={`flex flex-col w-full ${isExpanded ? 'lg:w-[400px] shrink-0' : ''}`}>
                    {/* Image Container */}
                    <motion.div layout="position" className={`relative w-full overflow-hidden ${isExpanded ? 'aspect-video lg:aspect-[4/3]' : 'aspect-[4/3]'}`}>
                      <Image 
                        src={branch.image} 
                        alt={branch.name} 
                        fill 
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full text-white/50 group-hover:text-black group-hover:bg-[#bef264] transition-colors shadow-lg">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div layout="position" className="p-8 relative flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#bef264]/10 text-[#bef264] px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border border-[#bef264]/20 group-hover:bg-[#bef264] group-hover:text-black transition-colors">
                          {branch.type}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6 group-hover:text-[#bef264] transition-colors">
                        {branch.name}
                      </h3>

                      <div className="flex flex-col gap-4 mt-auto">
                        <div className="flex items-start gap-4">
                          <div className="bg-white/5 p-2 rounded-full shrink-0 group-hover:bg-white/10 transition-colors">
                            <Clock className="w-4 h-4 text-white/70" />
                          </div>
                          <div>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono mb-1">Operation Hours</p>
                            <p className="text-sm text-white/80">{branch.hours}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4" onClick={(e) => e.stopPropagation()}>
                          <a href={branch.link} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full shrink-0 hover:bg-[#bef264] hover:text-black transition-colors cursor-pointer relative z-10 text-white/70">
                            <MapPin className="w-4 h-4 text-inherit" />
                          </a>
                          <div>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono mb-1">Address</p>
                            <p className="text-sm text-white/80 leading-relaxed">{branch.address}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence mode="popLayout">
                    {isExpanded && (
                      <motion.div 
                        layout="position"
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="p-8 border-t lg:border-t-0 lg:border-l border-white/10 flex-1 flex flex-col gap-8 bg-black/40"
                      >
                        <div>
                          <h4 className="text-[#bef264] text-xs font-mono tracking-widest uppercase mb-4">About the Store</h4>
                          <p className="text-white/70 leading-relaxed font-light">{branch.description}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                          {branch.interiors.map((img, i) => (
                            <div key={i} className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-white/10">
                              <Image 
                                src={img}
                                alt={`${branch.name} interior ${i + 1}`}
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                              />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  )
}
