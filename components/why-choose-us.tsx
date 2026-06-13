'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { CheckCircle2, ShieldCheck, TrendingUp, Truck, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'

const sellingPoints = [
  {
    icon: TrendingUp,
    color: "text-[#38bdf8]", // Vibrant cyan
    title: "Direct from Farm & Plots",
    description: "Eliminating the middleman means better profit margins and competitive pricing.",
  },
  {
    icon: ShieldCheck,
    color: "text-[#bef264]", // Vibrant lime
    title: "MyGAP Certified",
    description: "Safe, traceable, pesticide-regulated produce (crucial for hotel and hospital audits).",
  },
  {
    icon: CheckCircle2,
    color: "text-[#fbbf24]", // Vibrant amber
    title: "Grade A & B Ready",
    description: "Explicitly offering different grades allows restaurant and canteen owners to optimize food costs.",
  },
  {
    icon: Truck,
    color: "text-[#f472b6]", // Vibrant pink
    title: "Logistics Network",
    description: "Delivery across Klang Valley and Peninsular Malaysia via our own 1-to-3 ton lorry fleet.",
  }
]

function SellingPoint({ point, index, scrollYProgress, opacity }: { point: any, index: number, scrollYProgress: any, opacity: any }) {
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100 + index * 30, 0, -100 - index * 30]);
  return (
    <motion.div
      style={{ y, opacity }}
      className="bg-black/20 backdrop-blur-2xl border border-white/10 p-10 rounded-[2rem] flex flex-col items-start group hover:border-[#bef264]/50 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(190,242,100,0.15)] hover:-translate-y-2"
    >
      <div className={`bg-white/5 p-4 mb-6 ${point.color} rounded-xl group-hover:bg-[#bef264] group-hover:text-black transition-colors`}>
        <point.icon className="w-8 h-8" strokeWidth={2.5} />
      </div>
      <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-3">
        {point.title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed">
        {point.description}
      </p>
    </motion.div>
  );
}

export function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -150]);
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], [200, 0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="p-6 md:p-12 md:py-32 bg-transparent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row gap-12 items-end">
          <div className="lg:w-1/2">
            <motion.h2
              style={{ y: headerY, opacity }}
              className="text-5xl md:text-[80px] font-black uppercase leading-[0.85] tracking-[-0.04em]"
            >
              Why Choose <br />
              <span className="text-transparent [-webkit-text-stroke:2px_#bef264] relative group drop-shadow-lg">
                US
                <span className="absolute inset-0 bg-[#bef264] text-black w-full h-full text-left overflow-hidden whitespace-nowrap pt-[2px] transition-all duration-1000 w-0 group-hover:w-full">
                  US
                </span>
              </span>
            </motion.h2>
          </div>

          <motion.div
            style={{ y: textY, opacity }}
            className="lg:w-1/2 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <p className="text-xl font-light text-white/90 leading-relaxed">
              Quick, reliable, and scalable wholesale supply addressing the biggest pain points of commercial kitchens.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {sellingPoints.map((point, index) => (
            <SellingPoint key={index} point={point} index={index} scrollYProgress={scrollYProgress} opacity={opacity} />
          ))}
        </div>

        <motion.div
          style={{ y: textY, opacity }}
          className="border-t border-white/10 pt-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-col md:flex-row items-center gap-12 opacity-80">
              <div className="flex items-center gap-4">
                <Image src="/MyGAP.png" alt="MyGAP" width={96} height={96} className="object-contain w-24 h-16 bg-white/0 rounded-sm p-1 brightness-100" />
                <div>
                  <p className="text-white font-bold text-lg uppercase tracking-tight">MyGAP Certified</p>
                  <p className="text-white/50 text-xs font-mono uppercase tracking-wider">Jabatan Pertanian Malaysia</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/10"></div>
              <div className="flex items-center gap-4">
                <Image src="/Bidfresh.jpg" alt="BidFresh" width={96} height={96} className="object-contain w-24 h-16 bg-white/0 rounded-sm p-1" />
                <div>
                  <p className="text-white font-bold text-lg uppercase tracking-tight">BidFresh Pilot</p>
                  <p className="text-white/50 text-xs font-mono uppercase tracking-wider">DOA Selangor Programme</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/10"></div>
              <div className="flex items-center gap-4">
                <Image src="/fama_logo.png" alt="FAMA" width={96} height={96} className="object-contain w-24 h-16 bg-white/0 rounded-sm p-1" />
                <div>
                  <p className="text-white font-bold text-lg uppercase tracking-tight">FAMA Certified</p>
                  <p className="text-white/50 text-xs font-mono uppercase tracking-wider">Lembaga Pemasaran Pertanian</p>
                </div>
              </div>
            </div>
            <Link href="/legal" className="bg-[#bef264] text-black rounded-full px-6 py-3 font-bold uppercase hover:bg-white transition-colors cursor-pointer text-sm whitespace-nowrap">
              Legal & Licenses
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
