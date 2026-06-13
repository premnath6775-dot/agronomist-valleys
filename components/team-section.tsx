'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: "Anan",
    role: "Director",
    image: "/staff/director_1.jpeg",
    desc: "Over 10 years of experience in agricultural strategy and commercial supply chains.",
    linkedin: "https://www.linkedin.com/in/anan-raj-4b8384183/"
  },
  {
    name: "Malar",
    role: "Managing Director",
    image: "/staff/Managing Director.jpg",
    desc: "Driving operational excellence and strategic partnerships across the region."
  },
  {
    name: "Rogini",
    role: "Operations Manager",
    image: "/staff/operations_manager.jpg",
    desc: "Oversees the daily dispatch and logistics network from our Labu facility."
  }
];

export function TeamSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="text-center mb-16">
        <h2 className="text-[#bef264] text-xs font-mono tracking-widest uppercase mb-4">The People Behind The Magic</h2>
        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">Our Team</h3>
        <p className="text-xl font-light text-white/60 max-w-2xl mx-auto">
          Dedicated professionals bringing urban agriculture and fresh produce to the next level.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {TEAM_MEMBERS.map((member, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            key={member.name} 
            className="flex flex-col items-center text-center group/member"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-8 border-2 border-white/10 group-hover/member:border-[#bef264] transition-colors">
              <Image src={member.image} alt={member.name} fill className="object-cover transition-all duration-500" />
            </div>
            <h4 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">{member.name}</h4>
            <div className="text-[#bef264] font-mono text-sm tracking-widest uppercase mb-4">{member.role}</div>
            <p className="text-white/60 font-light leading-relaxed max-w-sm mb-4">
              {member.desc}
            </p>
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#0077b5] transition-colors" title={`Connect with ${member.name} on LinkedIn`}>
                <Linkedin size={24} strokeWidth={2} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
