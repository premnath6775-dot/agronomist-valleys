import React from 'react';
import Image from 'next/image';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { AboutAlbum } from '@/components/about-album';
import { TeamSection } from '@/components/team-section';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/about-us-bg.png"
            alt="Farm background"
            fill
            className="object-cover opacity-20 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10">
          <NavBar />
          
          {/* Header Section */}
          <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-8">
              About <span className="text-[#bef264]">Us</span>
            </h1>
            <div className="flex flex-col gap-6">
              <p className="text-xl font-light text-gray-300 max-w-3xl leading-relaxed drop-shadow-md">
                Agronomist valley&apos;s, a company that strives to provide quality agriculture as in vegetables farming, vegetables supplying along with farm management services according to the need of our clients.We are dedicated to building long term relationships with customers through quality services and customers support.
              </p>
              <p className="text-xl font-light text-gray-300 max-w-3xl leading-relaxed drop-shadow-md">
                With a commitment to a long term relationships and unparralleled customer support. Agronomist aims to create value in the agriculture and landscaping industries.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* History Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-serif text-[#bef264] tracking-tight mb-6">How We Came to Light</h2>
            <div className="space-y-6 text-gray-400 font-light leading-relaxed">
              <p>
                Our story began in a modest backyard in Labu, where our founders sought to challenge the conventional supply chains that often compromised the freshness of urban produce. We started experimenting with small-scale hydroponics, driven by the belief that high-quality, nutrient-dense food should be accessible without the massive footprint of traditional farming.
              </p>
              <p>
                As our yields grew, so did our ambition. We realized that true impact meant scaling our operations while maintaining the integrity and sustainability of our methods. We partnered with local agronomists and technologists to build our first commercial greenhouse, integrating IoT sensors and automated nutrient delivery systems to optimize every drop of water and beam of light.
              </p>
              <p>
                Today, our operations span state-of-the-art facilities, serving leading culinary institutions across the region. Yet, at our core, we remain that same group of passionate farmers, dedicated to the science of growth and the art of flavor.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden grayscale border border-white/10">
            <Image 
              src="/humble_beginnings.jpeg"
              alt="Our early beginnings"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Photo Album Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
        <h2 className="text-4xl font-black uppercase tracking-tight mb-12">Our Facilities</h2>
        
        <AboutAlbum />
      </section>

      <Footer />
    </main>
  );
}
