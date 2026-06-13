'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { INVENTORY } from '@/lib/inventory';
import { useCart } from '@/components/cart-context';
import { Minus, Plus, Search } from 'lucide-react';

export default function ContactPage() {
  const [formType, setFormType] = useState<'inquiry' | 'order'>('inquiry');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [orderEmail, setOrderEmail] = useState('');
  const [orderName, setOrderName] = useState('');
  const [orderPhone, setOrderPhone] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderComments, setOrderComments] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { cart, updateQuantity, handleSendQuotation, totalItems } = useCart();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('type=order')) {
      setFormType('order');
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const flattenedInventory = useMemo(() => {
    const items: any[] = [];
    INVENTORY.forEach(category => {
      category.items.forEach((item: any) => {
        if ('subCategory' in item) {
          item.items.forEach((subItem: any) => items.push(subItem));
        } else {
          items.push(item);
        }
      });
    });
    return items;
  }, []);

  const searchResults = flattenedInventory.filter(item => {
    const matchName = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchEn = item.enName && item.enName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchName || matchEn;
  });

  const isEmailValid = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const generateOrderMessage = () => {
    let message = "NEW ORDER REQUEST\n";
    message += "==================\n\n";
    message += `Company/Name: ${orderName || 'Not provided'}\n`;
    message += `Email: ${orderEmail || 'Not provided'}\n`;
    message += `Phone: ${orderPhone || 'Not provided'}\n`;
    message += `Delivery Date: ${deliveryDate || 'Not provided'}\n`;
    message += `Delivery Address: ${deliveryAddress || 'Not provided'}\n`;
    if (orderComments) {
      message += `Comments: ${orderComments}\n`;
    }
    message += "\nREQUESTED ITEMS:\n";
    message += "----------------\n";
    Object.entries(cart).forEach(([item, qty]) => {
      message += `- ${item}: ${qty} KG\n`;
    });
    return message;
  };

  const handleWhatsApp = () => {
    const message = generateOrderMessage();
    const encodedMessage = encodeURIComponent(message);
    
    // Copy to clipboard as fallback
    if (navigator.clipboard) {
      navigator.clipboard.writeText(message).catch(() => {});
    }
    
    const link = document.createElement('a');
    link.href = `https://wa.me/60123636951?text=${encodedMessage}`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmail = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: orderName,
          email: orderEmail,
          phone: orderPhone,
          date: deliveryDate,
          address: deliveryAddress,
          comments: orderComments,
          items: cart
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen selection:bg-[#bef264] selection:text-black flex flex-col bg-[#050505]">
      {/* Background Image Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] z-10 opacity-80"></div>
        <img 
          src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=1920&q=80" 
          alt="Fresh vibrant vegetables background" 
          className="w-full h-full object-cover opacity-80 saturate-150" 
        />
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        <NavBar />
        
        <section className="pt-32 pb-24 px-6 lg:px-12 w-full max-w-[1600px] mx-auto flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Title side (Left) */}
          <div className="lg:col-span-3 xl:col-span-4 lg:pr-4">
            <h1 className="text-4xl md:text-6xl lg:text-[70px] leading-[0.9] font-black uppercase tracking-tighter mb-6">
              Get in <br className="hidden lg:block" /><span className="text-[#bef264]">Touch</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-md text-balance">
              Whether you&apos;re looking to open a new trade account or have questions about our supply capabilities, our team is ready to assist.
            </p>
          </div>

          {/* Form side (Middle) */}
          <div className="lg:col-span-6 xl:col-span-5 bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm flex flex-col w-full">
            <div className="flex gap-6 border-b border-white/10 mb-8 pb-4">
              <button 
                onClick={() => setFormType('inquiry')}
                className={`text-lg font-bold uppercase tracking-wider transition-colors ${formType === 'inquiry' ? 'text-[#bef264]' : 'text-white/40 hover:text-white/80'}`}
              >
                Inquiry
              </button>
              <button 
                onClick={() => setFormType('order')}
                className={`text-lg font-bold uppercase tracking-wider transition-colors ${formType === 'order' ? 'text-[#bef264]' : 'text-white/40 hover:text-white/80'}`}
              >
                Order Request
              </button>
            </div>

            {formType === 'inquiry' ? (
              <form key="inquiry" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-white/50 mb-2">Company Name / Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black border border-white/20 p-4 text-white focus:outline-none focus:border-[#bef264] transition-colors"
                    placeholder="e.g. Acme Restaurant Group"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-white/50 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full bg-black border border-white/20 p-4 text-white focus:outline-none focus:border-[#bef264] transition-colors"
                      placeholder="hello@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-white/50 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-black border border-white/20 p-4 text-white focus:outline-none focus:border-[#bef264] transition-colors"
                      placeholder="+60 12 345 6789"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-white/50 mb-2">Inquiry Details</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-black border border-white/20 p-4 text-white focus:outline-none focus:border-[#bef264] transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  disabled={!isEmailValid(inquiryEmail)}
                  className="bg-[#bef264] text-black px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-white transition-colors w-full mt-auto disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:bg-[#bef264] hover:disabled:text-black"
                >
                  Submit Inquiry
                </button>
              </form>
            ) : (
              <form key="order" className="space-y-6">
                <div>
                  <label htmlFor="order-name" className="block text-xs uppercase tracking-wider text-white/50 mb-2">Company Name / Your Name</label>
                  <input 
                    type="text" 
                    id="order-name" 
                    value={orderName}
                    onChange={(e) => setOrderName(e.target.value)}
                    className="w-full bg-black border border-white/20 p-4 text-white focus:outline-none focus:border-[#bef264] transition-colors"
                    placeholder="e.g. Acme Restaurant Group"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="order-email" className="block text-xs uppercase tracking-wider text-white/50 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="order-email" 
                      value={orderEmail}
                      onChange={(e) => setOrderEmail(e.target.value)}
                      className="w-full bg-black border border-white/20 p-4 text-white focus:outline-none focus:border-[#bef264] transition-colors"
                      placeholder="hello@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="order-phone" className="block text-xs uppercase tracking-wider text-white/50 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="order-phone" 
                      value={orderPhone}
                      onChange={(e) => setOrderPhone(e.target.value)}
                      className="w-full bg-black border border-white/20 p-4 text-white focus:outline-none focus:border-[#bef264] transition-colors"
                      placeholder="+60 12 345 6789"
                    />
                  </div>
                </div>

                <div className="relative" ref={dropdownRef}>
                  <label htmlFor="produce-search" className="block text-xs uppercase tracking-wider text-white/50 mb-2">Add Items to Request</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4 pointer-events-none" />
                    <input 
                      type="text" 
                      id="produce-search" 
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setIsDropdownOpen(true);
                      }}
                      onFocus={() => setIsDropdownOpen(true)}
                      className="w-full bg-black border border-white/20 pl-12 pr-4 py-4 text-white focus:outline-none focus:border-[#bef264] transition-colors placeholder:uppercase placeholder:text-xs placeholder:tracking-widest placeholder:text-white/30"
                      placeholder="Search produce..."
                    />
                  </div>
                  
                  {isDropdownOpen && searchResults.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-[#111] border border-white/20 max-h-60 overflow-y-auto custom-scrollbar">
                      {searchResults.map((item, idx) => (
                        <div 
                          key={idx}
                          onClick={() => {
                            // If item is not in cart, start at 10
                            if (!cart[item.name]) {
                              updateQuantity(item.name, 10);
                            } else {
                              updateQuantity(item.name, 1);
                            }
                            setSearchQuery('');
                            setIsDropdownOpen(false);
                          }}
                          className="px-4 py-3 hover:bg-white/10 cursor-pointer flex justify-between items-center border-b border-white/5 last:border-0 group"
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-bold uppercase group-hover:text-[#bef264] transition-colors leading-tight">{item.name}</span>
                            {item.enName && item.enName.toUpperCase() !== item.name.toUpperCase() && (
                              <span className="text-[10px] uppercase text-white/40 mt-0.5">{item.enName}</span>
                            )}
                          </div>
                          <span className="text-xs text-white/40 font-mono">{item.pkg}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {isDropdownOpen && searchResults.length === 0 && searchQuery.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-[#111] border border-white/20 p-4 text-center text-white/40 text-xs uppercase tracking-widest">
                      No matching items
                    </div>
                  )}
                </div>

                {/* Cart Items List */}
                <div className="bg-white/5 border border-white/10 p-4 min-h-[100px] max-h-[300px] overflow-y-auto custom-scrollbar">
                  {totalItems === 0 ? (
                    <div className="h-full flex items-center justify-center text-white/30 text-sm uppercase font-semibold tracking-wider py-8">
                      No items selected
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {Object.entries(cart).map(([itemName, qty]) => {
                        const itemDetails = flattenedInventory.find(i => i.name === itemName);
                        return (
                          <div key={itemName} className="flex items-center justify-between bg-black/50 p-3 border border-white/5">
                            <div className="flex-1 min-w-0 pr-4">
                              <div className="font-bold text-sm uppercase truncate text-[#bef264]">{itemName}</div>
                              {itemDetails && <div className="text-[10px] text-white/40 font-mono uppercase tracking-widest mt-0.5">{itemDetails.pkg}</div>}
                            </div>
                            <div className="flex items-center gap-2 bg-black px-1 py-1 rounded-full border border-white/10 shrink-0">
                              <button 
                                type="button"
                                onClick={() => updateQuantity(itemName, -1)}
                                className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#bef264] hover:text-black flex items-center justify-center transition-colors"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="w-12 text-center font-mono font-bold text-xs">
                                {qty} KG
                              </span>
                              <button 
                                type="button"
                                onClick={() => updateQuantity(itemName, 1)}
                                className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#bef264] hover:text-black flex items-center justify-center transition-colors"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="delivery-date" className="block text-xs uppercase tracking-wider text-white/50 mb-2">Delivery Date</label>
                  <input 
                    type="date" 
                    id="delivery-date" 
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full bg-black border border-white/20 p-4 text-white focus:outline-none focus:border-[#bef264] transition-colors [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-xs uppercase tracking-wider text-white/50 mb-2">Delivery Address</label>
                  <textarea 
                    id="address" 
                    rows={3}
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full bg-black border border-white/20 p-4 text-white focus:outline-none focus:border-[#bef264] transition-colors resize-none"
                    placeholder="Enter full delivery address"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="comments" className="block text-xs uppercase tracking-wider text-white/50 mb-2">Additional Comments</label>
                  <textarea 
                    id="comments" 
                    rows={2}
                    value={orderComments}
                    onChange={(e) => setOrderComments(e.target.value)}
                    className="w-full bg-black border border-white/20 p-4 text-white focus:outline-none focus:border-[#bef264] transition-colors resize-none"
                    placeholder="Special instructions, gate codes, loading bay details, etc."
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <button 
                    type="button" 
                    onClick={handleEmail}
                    disabled={!isEmailValid(orderEmail) || totalItems === 0 || isSubmitting}
                    className={`px-4 py-4 font-bold uppercase text-sm tracking-widest transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed ${
                      submitStatus === 'success' 
                        ? 'bg-white text-black' 
                        : submitStatus === 'error'
                        ? 'bg-red-500 text-white'
                        : 'bg-[#bef264] text-black hover:bg-white hover:disabled:bg-[#bef264] hover:disabled:text-black'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent Successfully!' : submitStatus === 'error' ? 'Error Sending' : 'Email Request'}
                  </button>
                  <button 
                    type="button" 
                    onClick={handleWhatsApp}
                    disabled={totalItems === 0}
                    className="bg-[#25D366] text-black px-4 py-4 font-bold uppercase text-sm tracking-widest hover:bg-[#1ebe5d] transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:bg-[#25D366] hover:disabled:text-black"
                  >
                    WhatsApp Request
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Details side (Right) */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-start gap-10 lg:pl-4 xl:pl-8">
            <div>
               <h3 className="text-xl font-bold uppercase mb-4 text-[#bef264]">Farmhouse</h3>
               <p className="text-white/70 mb-6">
                 Lot 398, Kampung Pulau Labu<br/>
                 Labu 71900 Labu<br/>
                 Negeri Sembilan
               </p>
               <h3 className="text-xl font-bold uppercase mb-4 text-[#bef264]">Distribution Hub (Ampang)</h3>
               <p className="text-white/70">
                 No 17A-G, Jalan Wawasan 4/6, Bandar Baru Ampang<br/>
                 68000 Ampang<br/>
                 Selangor<br/>
                 Contact: 014-242 8941
               </p>
            </div>
            
            <div className="w-full">
                <h3 className="text-xl font-bold uppercase mb-4 text-[#bef264]">Direct Contact</h3>
                <div className="space-y-3 text-white/70 w-full max-w-sm">
                  <div className="flex justify-between items-center gap-4">
                    <span className="font-bold text-white uppercase text-xs tracking-wider shrink-0">Trading Desk</span> 
                    <span className="text-right">012-3636 951</span>
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <span className="font-bold text-white uppercase text-xs tracking-wider shrink-0">Email</span> 
                    <a href="mailto:agronomistvalleys@yahoo.com" className="text-right hover:text-[#bef264] transition-colors break-all">agronomistvalleys@yahoo.com</a>
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <span className="font-bold text-white uppercase text-xs tracking-wider shrink-0">WhatsApp</span> 
                    <span className="text-right">012-3636 951</span>
                  </div>
                </div>
             </div>

            <div>
               <h3 className="text-xl font-bold uppercase mb-4 text-[#bef264]">Operating Hours</h3>
               <div className="space-y-4 text-white/70">
                 <div>
                    <h4 className="font-bold text-white mb-1 uppercase text-xs tracking-wider">Distribution Hub (Ampang)</h4>
                    <p>Monday - Saturday: 6:00 AM - 11:00 AM</p>
                 </div>
                 <div>
                    <h4 className="font-bold text-white mb-1 uppercase text-xs tracking-wider">Office / Trading Desk</h4>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Specialized Handling Section */}
        <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-sm mt-16 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Specialized Handling & Edge Cases</h2>
            <p className="text-white/60 leading-relaxed text-sm">
              We understand that commercial kitchen operations require zero interruptions. Our logistics are designed to address difficult-to-transport items and handle edge cases with complete operational competence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-black/20 p-6 border border-white/5 rounded-sm hover:border-[#bef264]/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#bef264]/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bef264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-2">Delicate Produce Protocols</h3> 
              <p className="text-white/60 leading-relaxed text-sm">Highly perishable or easily bruised items (like microgreens or ripe tomatoes) are meticulously packed and protected from vibration and temperature shock during transit.</p>
            </div>
            
            <div className="bg-black/20 p-6 border border-white/5 rounded-sm hover:border-[#bef264]/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#bef264]/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bef264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-2">Rejection & Return Policy</h3> 
              <p className="text-white/60 leading-relaxed text-sm">We are transparent about damages. Our B2B buyers have an exact, streamlined process for issuing credit notes or receiving immediate replacements without disrupting their daily kitchen operations.</p>
            </div>
          </div>
        </div>

      </section>

      <Footer />
      </div>
    </main>
  )
}
