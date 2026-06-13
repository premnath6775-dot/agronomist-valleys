import type { Metadata } from 'next';
import './globals.css';
import { WhatsappButton } from '@/components/whatsapp-button';
import { CartProvider } from '@/components/cart-context';

export const metadata: Metadata = {
  title: "AgronoMist Valley's | Labu & Ampang, MY",
  description: 'B2B commercial vegetable supply for top-tier kitchens in Kuala Lumpur.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="antialiased h-full">
      <body className="bg-[#050505] text-white font-sans h-full overflow-x-hidden" suppressHydrationWarning>
        <CartProvider>
          {children}
          <WhatsappButton />
        </CartProvider>
      </body>
    </html>
  );
}
