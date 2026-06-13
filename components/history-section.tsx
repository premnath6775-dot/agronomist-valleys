"use client";

import React from 'react';
import { motion } from 'motion/react';

export function HistorySection() {
  return (
    <section className="py-24 bg-transparent border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#bef264]/20 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* History of Agriculture */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-[#bef264] tracking-tight">
              A Brief History of Agriculture
            </h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Agriculture began around 10,000 years ago during the Neolithic Revolution, marking the transition from nomadic hunter-gatherer lifestyles to settled farming communities. This shift allowed for the cultivation of crops like wheat and barley in the Fertile Crescent, leading to the rise of early civilizations. Over millennia, farming practices evolved from simple hand tools to the mechanized and technologically advanced systems that feed the world today.
            </p>
          </div>

          {/* History of Plantations in Malaysia */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-[#bef264] tracking-tight">
              Plantations in Malaysia
            </h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Malaysia&apos;s plantation agriculture took root in the late 19th and early 20th centuries, initially driven by rubber introduced by the British. By the 1930s, Malaya produced half of the world&apos;s rubber. In the 1960s, the nation strategically diversified into oil palm to reduce dependency on rubber. Today, Malaysia is one of the world&apos;s leading producers of palm oil, alongside significant cultivation of cocoa and pepper, profoundly shaping the nation&apos;s economy and landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
