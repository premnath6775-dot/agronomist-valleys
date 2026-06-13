'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { Tractor, Box, Truck, ShieldCheck, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

const processSteps = [
  {
    icon: Tractor,
    title: "Contract Crop Matching",
    description: "We work directly with audited farms to match crop yields to your recurring volume commitments, securing consistent supply.",
  },
  {
    icon: ShieldCheck,
    title: "Audited Plots",
    description: "Produce is harvested strictly from our MyGAP certified network, ensuring pesticide compliance and full traceability.",
  },
  {
    icon: Box,
    title: "Sorting & Grading",
    description: "At our Labu Farmhouse and Ampang Hub, vegetables are rigorously sorted into A/B grades and cleaned to meet strict hospitality standards.",
  },
  {
    icon: Truck,
    title: "Cold-Chain Dispatch",
    description: "Loaded directly onto our 1-to-3 ton temperature-managed lorry fleet for immediate, crisp delivery across Klang Valley.",
  }
]

function ProcessStep({ step, index, scrollYProgress, opacity }: { step: any, index: number, scrollYProgress: any, opacity: any }) {
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [150 + index * 40, 0, -150 - index * 40]);
  return (
    <motion.div
      style={{ y, opacity }}
      className="relative bg-black/20 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] flex flex-col items-start hover:border-[#bef264]/50 hover:shadow-[0_15px_40px_rgba(190,242,100,0.15)] hover:-translate-y-2 transition-all duration-500 z-10 group"
    >
      <div className="bg-black/40 p-4 text-[#bef264] border border-white/10 mb-6 group-hover:bg-[#bef264] group-hover:text-black transition-colors rounded-[1rem] relative">
        <step.icon className="w-8 h-8" />
        <div className="absolute -top-3 -right-3 text-[10px] font-mono bg-black/80 px-2 py-1 border border-white/10 text-white group-hover:text-[#bef264] group-hover:border-[#bef264]/30">
          0{index + 1}
        </div>
      </div>
      <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-4">
        {step.title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed">
        {step.description}
      </p>

      {/* Arrow pointing to next step */}
      {index < 3 && (
        <div className="hidden lg:flex absolute top-1/2 -right-6 xl:-right-8 -translate-y-1/2 z-20 items-center justify-center text-[#bef264]/40 group-hover:text-[#bef264] group-hover:translate-x-1 transition-all duration-300 pointer-events-none">
          <ChevronRight className="w-8 h-8 xl:w-10 xl:h-10" strokeWidth={1} />
        </div>
      )}
    </motion.div>
  );
}

export function SupplyChain() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -150]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="supply-chain" className="p-6 md:p-12 md:py-32 bg-transparent text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-end">
          <div className="lg:w-1/2">
            <motion.p
              style={{ y: headerY, opacity }}
              className="text-[#bef264] text-xs font-mono tracking-widest uppercase mb-4"
            >
              Seed to Kitchen
            </motion.p>
            <motion.h2
              style={{ y: headerY, opacity }}
              className="text-5xl md:text-7xl font-black uppercase leading-[0.85] tracking-[-0.04em]"
            >
              Contract <br />
              <span className="text-transparent [-webkit-text-stroke:2px_white] relative drop-shadow-lg">
                Supply Chain
              </span>
            </motion.h2>
          </div>

          <motion.div
            style={{ y: textY, opacity }}
            className="lg:w-1/2 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <p className="text-xl font-light text-white/90 leading-relaxed uppercase tracking-widest max-w-lg">
              Precision agriculture meets commercial logistics. See how our contract-based matching ensures availability and quality.
            </p>
          </motion.div>
        </div>

        <div className="relative mt-8">
          {/* Glowing Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#bef264]/40 to-transparent -translate-y-1/2 hidden lg:block blur-[1px]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} scrollYProgress={scrollYProgress} opacity={opacity} />
            ))}
          </div>
        </div>

        <motion.div
          style={{ y: textY, opacity }}
          className="mt-8 flex justify-center lg:justify-end"
        >
          <Link href="/supply-chain" className="inline-flex items-center gap-3 bg-[#bef264] text-black px-8 py-4 uppercase font-bold text-sm tracking-widest hover:bg-[#bef264]/80 transition-colors group rounded-full shadow-[0_0_20px_rgba(190,242,100,0.3)]">
            Explore Our Process
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#bef264]/5 blur-[120px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
    </section>
  )
}
