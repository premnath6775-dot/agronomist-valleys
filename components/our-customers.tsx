'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const CUSTOMERS = [
  {
    name: "Honda",
    svg: (
      <img src="/images/honda.svg" alt="Honda" className="w-full h-full object-contain transition-transform duration-300" />
    )
  },
  {
    name: "Air Asia",
    svg: (
      <img src="/images/airasia.svg" alt="Air Asia" className="w-full h-full object-contain transition-transform duration-300" />
    )
  },
  {
    name: "Perodua",
    svg: (
      <img src="/images/perodua.svg" alt="Perodua" className="w-full h-full object-contain transition-transform duration-300" />
    )
  },
  {
    name: "Proton",
    svg: (
      <img src="/PROTON_LOGO.svg.png" alt="Proton" className="w-full h-full object-contain transition-transform duration-300" />
    )
  },
  {
    name: "SEGi University",
    svg: (
       <img src="/SEGi-University-logo-2023_4C-1022x334-1.png" alt="SEGi University" className="w-full h-full object-contain transition-transform duration-300" />
    )
  },
  {
    name: "Hospital Ampang",
      svg: (
       <img src="/Hospital-Ampang-Rasmi-500x450.jpg" alt="Hospital Ampang" className="w-full h-full object-contain transition-transform duration-300" />
    )
  }
]

export function OurCustomers() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div 
          style={{ y, opacity }}
          className="flex flex-col items-center text-center mb-16"
        >
          <p className="text-[#bef264] text-xs font-mono tracking-widest uppercase mb-4">Trusted By</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Our Customers</h2>
        </motion.div>

        <motion.div 
          style={{ y, opacity }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-center"
        >
          {CUSTOMERS.map((customer, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center aspect-square md:aspect-video w-full max-w-[150px] mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-2 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg group"
              title={customer.name}
            >
              {customer.svg}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
