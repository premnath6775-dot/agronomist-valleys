'use client'

import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowUpRight, Plus, Minus, ShoppingCart, Send, ChevronDown, Leaf, Search, Carrot, Flower2, Citrus, Flame, Bean, Grape, Apple, Banana, Cherry, Drumstick, Fish, Beef, Egg, Milk, Sprout, ShoppingBag, Plane } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useCart } from '@/components/cart-context'

import { INVENTORY } from '@/lib/inventory'

const ICON_MAP: Record<string, any> = {
  leaf: Leaf,
  carrot: Carrot,
  flower: Flower2,
  citrus: Citrus,
  flame: Flame,
  bean: Bean,
  grape: Grape,
  apple: Apple,
  banana: Banana,
  cherry: Cherry,
  drumstick: Drumstick,
  fish: Fish,
  beef: Beef,
  egg: Egg,
  milk: Milk,
  sprout: Sprout,
  shopping: ShoppingBag
};

const CategoryIcon = ({ countryCode, subCategory, iconName }: { countryCode?: string, subCategory?: string, iconName?: string }) => {
  if (countryCode) {
    return (
      <svg 
        className="h-[1em] w-auto shrink-0 inline-block align-middle rounded-sm" 
        viewBox="0 0 40 30" 
        style={{ width: '1.333em' }}
      >
        <image 
          href={`https://flagcdn.com/w80/${countryCode}.png`} 
          width="40" 
          height="30" 
          preserveAspectRatio="xMidYMid slice" 
        />
      </svg>
    );
  }

  const IconComponent = (iconName && ICON_MAP[iconName]) ? ICON_MAP[iconName] : Leaf;
  return <IconComponent className="h-[1em] w-[1em] shrink-0 text-[#bef264]" strokeWidth={2.5} />;
};


const ProductRow = ({ item, categoryImage }: { item: any, categoryImage?: string }) => {
  const { cart, updateQuantity } = useCart();
  const imageUrl = item.image || categoryImage || 'https://images.unsplash.com/photo-1540420773420-3366774f3784?auto=format&fit=crop&w=800&q=80';
  const minQty = item.moq ? parseFloat(item.moq) || 10 : 10;
  const unit = item.moq ? item.moq.replace(/[0-9.]+/g, '').trim() : 'KG';
  
  return (
    <div className="group border-b border-white/5 py-2 md:py-3 flex items-center justify-between gap-2 md:gap-4 hover:bg-white/[0.02] transition-colors -mx-2 px-2 md:-mx-4 md:px-4">
      <div className="w-[130px] md:w-[240px] shrink-0 pr-2 flex flex-col justify-center">
        <h3 className="text-[10px] md:text-sm font-bold uppercase truncate group-hover:text-[#bef264] transition-colors leading-tight">{item.name}</h3>
        {item.enName && item.enName.toUpperCase() !== item.name.toUpperCase() && (
          <p className="text-[8px] md:text-[10px] uppercase text-white/40 truncate font-semibold mt-0.5">{item.enName}</p>
        )}
      </div>
      
      <div className="flex-1 h-12 md:h-20 relative flex items-center justify-center overflow-hidden mx-1 md:mx-4 opacity-40 group-hover:opacity-100 transition-opacity flex-shrink">
        <img 
          src={imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover object-center" 
          style={{ 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
          }}
          onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1540420773420-3366774f3784?auto=format&fit=crop&w=800&q=80' }}
        />
      </div>
      
      <div className="flex items-center gap-2 md:gap-6 justify-end shrink-0">
        <div className="text-right w-16 md:w-24 hidden sm:block">
          <p className="text-[9px] uppercase tracking-[0.1em] font-semibold text-white/40">MOQ</p>
          <p className="text-[10px] md:text-xs font-mono font-bold text-[#bef264]">{item.moq || '10 KG'}</p>
        </div>

        <div className="flex sm:hidden flex-col items-end w-12 shrink-0 leading-tight pr-2">
           <span className="text-[8px] uppercase tracking-[0.1em] font-semibold text-white/40">MOQ</span>
           <span className="text-[9px] font-mono font-bold text-[#bef264] truncate w-full text-right">{item.moq || '10 KG'}</span>
        </div>

        <div className={`flex items-center gap-1 md:gap-2 rounded-full px-1 py-1 w-[70px] md:w-[90px] justify-between shrink-0 transition-all ${cart[item.name] ? 'bg-[#bef264] text-black shadow-[0_0_15px_rgba(190,242,100,0.2)] border border-[#bef264]' : 'bg-black/50 border border-white/10 text-white'}`}>
          <button 
            onClick={() => updateQuantity(item.name, -minQty, minQty)}
            className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center transition-colors disabled:opacity-30 shrink-0 ${cart[item.name] ? 'bg-black/10 hover:bg-black/20' : 'bg-white/5 hover:bg-white/10'}`}
            disabled={!cart[item.name]}
          >
            <Minus size={10} />
          </button>
          <span className={`w-10 md:w-12 text-center font-mono font-bold text-[10px] md:text-xs ${cart[item.name] ? 'text-black' : 'text-white'}`}>
            {cart[item.name] ? `${cart[item.name]} ${unit}` : `0 ${unit}`}
          </span>
          <button 
            onClick={() => updateQuantity(item.name, minQty, minQty)}
            className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center transition-colors shrink-0 ${cart[item.name] ? 'bg-black/10 hover:bg-black/20' : 'bg-white/5 hover:bg-[#bef264] hover:text-black'}`}
          >
            <Plus size={10} />
          </button>
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({ section, idx, isLast, forceOpen = false }: { section: typeof INVENTORY[0], idx: number, isLast: boolean, forceOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  useEffect(() => {
    if (forceOpen) setIsOpen(true);
  }, [forceOpen]);

  return (
    <div className={`py-6 md:py-8 ${!isLast ? 'border-b border-white/10' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left hover:bg-white/5 transition-colors p-3 rounded-lg group"
      >
        <div className="border-l-4 border-[#bef264] pl-4 md:pl-5 h-fit flex items-center gap-3">
          <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter group-hover:text-white transition-colors">
            {section.category}
          </h2>
          {section.category.toUpperCase().includes('IMPORT') && <Plane className="w-6 h-6 md:w-8 md:h-8 text-[#bef264]" />}
        </div>
        <ChevronDown className={`w-6 h-6 md:w-8 md:h-8 transform transition-transform text-[#bef264] ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="mt-6 md:mt-8 lg:pl-10">
          <div className="flex flex-col gap-10">
            {section.items.map((item: any, i: number) => {
              if ('subCategory' in item) {
                return (
                  <div key={i} className="flex flex-col gap-4 mt-2">
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-tighter flex items-center gap-3 bg-white/5 px-4 py-3 rounded-md border-l-4 border-[#bef264] shadow-sm">
                      {item.subCategory}
                      <CategoryIcon countryCode={item.countryCode} subCategory={item.subCategory} iconName={item.icon} />
                    </h3>
                    <div className="flex flex-col">
                      {item.items.map((subItem: any, j: number) => (
                        <ProductRow key={j} item={subItem} categoryImage={item.image} />
                      ))}
                    </div>
                  </div>
                );
              }
              
              if (i === 0) {
                // For items without subcategory, wrap the whole sequence in a list
                const directItems = section.items.filter((x: any) => !('subCategory' in x));
                return (
                  <div key="direct-items" className="flex flex-col">
                    {directItems.map((directItem: any, j: number) => (
                      <ProductRow key={j} item={directItem} categoryImage={(directItem as any).image} />
                    ))}
                  </div>
                );
              }
              return null; // Handled in i === 0
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInventory = INVENTORY.map(category => {
    const filteredCategoryItems = category.items.map(item => {
      if ('subCategory' in item) {
        const filteredSubItems = item.items.filter((subItem: any) => {
          const matchName = subItem.name.toLowerCase().includes(searchQuery.toLowerCase());
          const matchEn = subItem.enName && subItem.enName.toLowerCase().includes(searchQuery.toLowerCase());
          return matchName || matchEn;
        });
        return { ...item, items: filteredSubItems };
      }
      return item; // Will be handled in the next filter
    }).filter(item => {
      if ('subCategory' in item) {
        return item.items.length > 0;
      }
      const matchName = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchEn = item.enName && item.enName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchName || matchEn;
    });

    return { ...category, items: filteredCategoryItems };
  }).filter(category => category.items.length > 0);

  return (
    <main className="relative min-h-screen bg-[#050505] selection:bg-[#bef264] selection:text-black overscroll-none flex flex-col pb-32">
      <NavBar />
      
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img src="/images/catalog-header-bg.png" alt="Fresh vegetables background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 pt-40 pb-8 px-6 md:px-12">
          <div className="container mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="mb-4 text-[10px] uppercase tracking-[0.15em] font-semibold text-white/50 drop-shadow-md">
                CATALOGUE // ALL YIELDS
              </div>
              <h1 className="text-5xl md:text-[100px] leading-[0.85] tracking-[-0.04em] font-black uppercase drop-shadow-2xl">
                FULL <br />
                <span className="text-[#bef264]">INVENTORY.</span>
              </h1>
            </div>
            
            <div className="w-full md:w-[400px] relative drop-shadow-xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 w-5 h-5 pointer-events-none" />
              <input 
                type="text"
                placeholder="SEARCH YIELDS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 backdrop-blur-xl border border-white/10 text-white placeholder:text-white/30 pl-14 pr-6 py-4 rounded-full outline-none focus:border-[#bef264] transition-all uppercase font-bold tracking-widest text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 px-6 md:px-12 flex-1 bg-[#050505] relative z-10">
        <div className="container mx-auto">
          {filteredInventory.length > 0 ? (
            filteredInventory.map((section, idx) => (
                <CategorySection 
                  key={section.category} 
                  section={section as any} 
                  idx={idx} 
                  isLast={idx === filteredInventory.length - 1} 
                  forceOpen={searchQuery.length > 0}
                />
            ))
          ) : (
            <div className="py-24 text-center text-white/40 font-mono text-sm uppercase">
              <span className="text-white/70 block mb-2 text-xl">No items found</span>
              Try adjusting your "{searchQuery}" search keywords
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
