import { HeroSection } from '@/components/hero'
import { AboutSection } from '@/components/about'
import { WhyChooseUs } from '@/components/why-choose-us'
import { CateringSupply } from '@/components/catering-supply'
import { OurCustomers } from '@/components/our-customers'
import { ProduceGallery } from '@/components/produce-gallery'
import { HistorySection } from '@/components/history-section'
import { OutletsSection } from '@/components/outlets-section'
import { Footer } from '@/components/footer'
import { NavBar } from '@/components/nav-bar'
import { Marquee } from '@/components/marquee'
import { MotionBackground } from '@/components/motion-background'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-transparent selection:bg-[#bef264] selection:text-black overscroll-none">
      <MotionBackground />
      <NavBar />
      <HeroSection />
      <Marquee text="WHOLESALE SUPPLY • LABU FARMHOUSE • AMPANG DISTRIBUTION HUB • RESTAURANT PRICING • COMMERCIAL ORGANIC • " />
      <AboutSection />
      <WhyChooseUs />
      <CateringSupply />
      <OurCustomers />
      <ProduceGallery />
      <OutletsSection />
      <HistorySection />
      <Footer />
    </main>
  )
}
