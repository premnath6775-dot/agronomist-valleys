'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Send, Minus, Plus, Leaf } from 'lucide-react';
import { useCart } from '@/components/cart-context';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const { cart, totalItems, updateQuantity, handleSendQuotation } = useCart();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Toggle background styling
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide navbar when scrolling down, show when scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 flex items-center justify-between px-6 md:px-12 py-6 ${
          scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent'
        }`}
      >
        <Link href="/" className="font-bold text-2xl tracking-tighter uppercase z-50 relative group flex items-center gap-2">
          <Image src="/Agronomist original logo transparent.png" alt="Agronomist Valley's Logo" width={80} height={80} className="object-contain w-15 h-15" />
          <span className="flex flex-col">
            <span>AGRONOMIST<span className="text-[#bef264]">.</span>VALLEY&apos;S</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          {[
            { name: 'Catalog', href: '/catalog' },
            { name: 'About Us', href: '/about-us' },
          ].map((item) => (
            <Link key={item.name} href={item.href} className="border border-white/20 rounded-full px-5 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer block uppercase">
              {item.name}
            </Link>
          ))}
          <Link href="/legal" className="border border-white/20 rounded-full px-5 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer block uppercase">
            Legal & Licenses
          </Link>
          <Link href="/contact" className="bg-[#bef264] text-black rounded-full px-5 py-2 font-bold hover:bg-white transition-colors cursor-pointer block uppercase">
            Contact Us
          </Link>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 ml-2 hover:text-[#bef264] transition-colors"
          >
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#bef264] text-black text-[10px] font-bold flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1 block">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:text-[#bef264] transition-colors"
          >
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#bef264] text-black text-[10px] font-bold flex items-center justify-center rounded-full transform block">
                {totalItems}
              </span>
            )}
          </button>
          <button 
            className="text-white hover:text-[#bef264] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>



      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, pointerEvents: 'auto' } : { opacity: 0, pointerEvents: 'none' }}
        className="fixed inset-0 z-30 bg-black flex grid-rows items-center justify-center pt-20"
      >
        <div className="flex flex-col items-center gap-8 text-3xl font-bold uppercase tracking-tighter">
          {[
            { name: 'Catalog', href: '/catalog' },
            { name: 'About Us', href: '/about-us' },
            { name: 'Legal & Licenses', href: '/legal' },
            { name: 'Contact Us', href: '/contact' },
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ y: 30, opacity: 0 }}
              animate={isOpen ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="hover:text-[#bef264] transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-[#0a0a0a] border-l border-white/10 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h2 className="text-xl font-bold uppercase tracking-widest text-[#bef264]">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 text-white">
                {Object.keys(cart).length === 0 ? (
                  <div className="text-center text-white/50 py-10">Your cart is empty.</div>
                ) : (
                  Object.entries(cart).map(([itemName, qty]) => (
                    <div key={itemName} className="flex items-center justify-between bg-white/5 p-4 rounded-sm border border-white/5">
                      <div className="flex flex-col">
                        <span className="font-bold text-sm uppercase text-white">{itemName}</span>
                        <span className="text-xs text-white/50">Volume: {qty} KG</span>
                      </div>
                      <div className="flex items-center gap-3 bg-black border border-white/10 rounded-full px-1 py-1">
                        <button 
                          onClick={() => updateQuantity(itemName, -1)}
                          className="w-6 h-6 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-bold min-w-[36px] text-center text-white">{qty} KG</span>
                        <button 
                          onClick={() => updateQuantity(itemName, 1)}
                          className="w-6 h-6 rounded-full bg-white/5 hover:bg-[#bef264] hover:text-black flex items-center justify-center transition-colors text-white"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              <div className="p-6 border-t border-white/10 bg-black">
                <Link 
                  href="/contact?type=order" 
                  onClick={() => setIsCartOpen(false)}
                  className={`w-full block text-center py-4 font-bold uppercase tracking-widest transition-colors ${
                    Object.keys(cart).length === 0 
                      ? 'bg-white/10 text-white/30 pointer-events-none' 
                      : 'bg-[#bef264] text-black hover:bg-white'
                  }`}
                >
                  Checkout / Request Quotation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
