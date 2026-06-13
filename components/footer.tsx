'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Leaf, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#bef264] text-black py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 mb-20">
          {/* Column 1: Logo & Branding */}
          <div className="sm:col-span-2 md:col-span-4 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/Agronomist original logo transparent.png"
                alt="Agronomist Valley's Logo"
                width={160}
                height={160}
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))' }}
                className="object-contain w-36 h-auto mb-6"
              />
              <h2 className="text-4xl md:text-[64px] font-black uppercase leading-[0.9] tracking-[-0.04em]">
                Establish <br /> Supply.
              </h2>
              <p className="text-[11px] uppercase tracking-[0.12em] font-bold mt-4 text-black/50 leading-relaxed max-w-sm">
                Direct from farm commercial agriculture. Supplying premium wholesale produce across Malaysia.
              </p>
            </motion.div>
          </div>

          {/* Column 2: Explore Quick Links */}
          <div className="sm:col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-black/40 mb-6">Explore</h3>
              <ul className="space-y-4 font-bold text-sm tracking-wide">
                {[
                  { name: 'Catalog', href: '/catalog' },
                  { name: 'About Us', href: '/about-us' },
                  { name: 'Contact Us', href: '/contact' },
                  { name: 'Legal & Licenses', href: '/legal' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-black/60 transition-colors uppercase block">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Column 3: Contact Details */}
          <div className="sm:col-span-1 md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-black/40 mb-6">Connect</h3>
              <div className="space-y-6">
                <div className="space-y-3 text-xs tracking-wider uppercase text-black/80 font-bold">
                  <a href="mailto:Agronomistvalleys@yahoo.com" className="hover:text-black/60 transition-colors flex items-center gap-2 lowercase text-sm">
                    <Mail className="w-4 h-4 shrink-0 text-black/60" />
                    <span>agronomistvalleys@yahoo.com</span>
                  </a>
                  <a href="tel:0123636951" className="hover:text-black/60 transition-colors flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 shrink-0 text-black/60" />
                    <span>012-3636 951</span>
                  </a>
                </div>

                <div className="flex flex-col gap-3 font-bold text-sm uppercase items-start pt-2">
                  {[
                    { name: 'Instagram', url: 'https://www.instagram.com/agronomistvalleys/', Icon: Instagram },
                    { name: 'Facebook', url: 'https://www.facebook.com/agronomist.valleys/', Icon: Facebook },
                    {
                      name: 'TikTok', url: 'https://www.tiktok.com/@agronomistvalleys',
                      Icon: (props: any) => (
                        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                      )
                    }
                  ].map((link, i) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black/60 transition-colors flex items-center gap-2 group"
                    >
                      <link.Icon className="w-4 h-4 shrink-0 text-black/60 group-hover:text-black transition-colors" />
                      <span>{link.name}</span>
                      <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-sans text-xs">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 4: Physical Locations */}
          <div className="sm:col-span-2 md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-black/40 mb-6">Locations</h3>
              <div className="space-y-6 font-semibold text-xs tracking-wider uppercase text-black/85">
                <div>
                  <h4 className="font-black text-black text-sm mb-1 uppercase tracking-wider">Farm HQ</h4>
                  <p className="leading-relaxed">
                    Lot 398, Kampung Pulau Labu,<br />
                    Labu 71900, Negeri Sembilan
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-black text-sm mb-1 uppercase tracking-wider">Ampang Hub</h4>
                  <p className="leading-relaxed">
                    No 17A-G, Jalan Wawasan 4/6,<br />
                    Bandar Baru Ampang,<br />
                    68000 Ampang, Selangor
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-black/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] uppercase tracking-[0.15em] font-bold text-black/50"
        >
          <p>© {new Date().getFullYear()} AGRONOMIST VALLEY&apos;S INC. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1.5 text-black">
            POWERED BY NATURE <Leaf className="w-3.5 h-3.5" fill="currentColor" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
}