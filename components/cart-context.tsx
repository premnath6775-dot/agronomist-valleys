'use client';

import React, { createContext, useContext, useState } from 'react';

type CartContextType = {
  cart: Record<string, number>;
  updateQuantity: (item: string, delta: number, minQty?: number) => void;
  totalItems: number;
  handleSendQuotation: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Record<string, number>>({});

  const updateQuantity = (item: string, delta: number, minQty: number = 10) => {
    setCart(prev => {
      const currentQty = prev[item] || 0;
      
      // If the item isn't in the cart yet and we are adding, start at minimum minQty
      if (currentQty === 0 && delta > 0) {
        return { ...prev, [item]: Math.max(minQty, delta) };
      }

      const newQty = currentQty + delta;
      
      // If the quantity drops below minQty, remove the item completely
      if (newQty < minQty) {
        const newCart = { ...prev };
        delete newCart[item];
        return newCart;
      }
      
      return { ...prev, [item]: newQty };
    });
  };

  const totalItems = Object.keys(cart).length;

  const handleSendQuotation = () => {
    if (totalItems === 0) return;
    
    let message = "Hi, I would like to request a quotation for the following items:\n\n";
    Object.entries(cart).forEach(([item, qty]) => {
      message += `- ${item}: ${qty}\n`;
    });
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/60123636951?text=${encodedMessage}`, '_blank');
  };

  return (
    <CartContext.Provider value={{ cart, updateQuantity, totalItems, handleSendQuotation }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
