'use client'

import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

export default function LegalPage() {
  const [selectedLicenseIndex, setSelectedLicenseIndex] = useState<number | null>(null);

  const selectedLicense = selectedLicenseIndex !== null ? licenses[selectedLicenseIndex] : null;

  return (
    <main className="relative min-h-screen bg-[#050505] selection:bg-[#bef264] selection:text-black">
      <NavBar />

      <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
            Legal & <span className="text-[#bef264]">Licenses</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl">
            AgronoMist Valley&apos;s operates under strict compliance with agricultural and commercial distribution laws in Malaysia. Here are our official certifications and legal documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {licenses.map((license, i) => (
            <motion.div
              key={i}
              layoutId={`license-card-${i}`}
              onClick={() => setSelectedLicenseIndex(i)}
              className="border border-white/10 bg-white/5 rounded-sm p-6 flex flex-col group hover:border-white/30 transition-colors cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full mb-6 bg-white rounded-sm border border-white/5 overflow-hidden p-6">
                <motion.div layoutId={`license-image-container-${i}`} className="relative w-full h-full">
                  <Image
                    src={license.image}
                    alt={license.title}
                    fill
                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
              <motion.div layoutId={`license-id-${i}`} className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#bef264] mb-2">
                {license.id}
              </motion.div>
              <motion.h3 layoutId={`license-title-${i}`} className="text-xl font-bold uppercase mb-2">{license.title}</motion.h3>
              <motion.p layoutId={`license-desc-${i}`} className="text-sm text-white/50 mb-4 flex-grow">{license.description}</motion.p>
              <div className="text-xs uppercase tracking-wider text-white/30 border-t border-white/10 pt-4 mt-auto transition-opacity group-hover:opacity-100">
                Valid until: {license.expiry}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedLicense && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedLicenseIndex(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
              >
                <div className="absolute inset-0 z-0" onClick={() => setSelectedLicenseIndex(null)} />
                <motion.div
                  layoutId={`license-card-${selectedLicenseIndex}`}
                  className="bg-[#111] border border-white/10 p-6 md:p-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row gap-8 md:gap-12 relative z-10 rounded-sm"
                >
                  <button
                    onClick={() => setSelectedLicenseIndex(null)}
                    className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </button>

                  <div className="w-full md:w-1/2 flex flex-col">
                    <div className="relative aspect-[4/3] w-full bg-white rounded-sm border border-white/5 overflow-hidden mb-4 p-8">
                      <motion.div layoutId={`license-image-container-${selectedLicenseIndex}`} className="relative w-full h-full">
                        <Image
                          src={selectedLicense.image}
                          alt={selectedLicense.title}
                          fill
                          className="object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <motion.div layoutId={`license-id-${selectedLicenseIndex}`} className="text-xs uppercase tracking-[0.2em] font-bold text-[#bef264] mb-3">
                      {selectedLicense.id}
                    </motion.div>
                    <motion.h3 layoutId={`license-title-${selectedLicenseIndex}`} className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-tight">
                      {selectedLicense.title}
                    </motion.h3>
                    <motion.p layoutId={`license-desc-${selectedLicenseIndex}`} className="text-lg text-white/70 mb-8 leading-relaxed">
                      {selectedLicense.description}
                      <br /><br />
                      <span className="text-white/50 text-base">
                        {selectedLicense.elaboration}
                      </span>
                    </motion.p>

                    <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8 mt-auto">
                      <div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Status</div>
                        <div className="text-sm font-bold text-[#bef264] uppercase flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#bef264] inline-block shadow-[0_0_8px_#bef264]"></span>
                          Active
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Valid Until</div>
                        <div className="text-sm font-bold uppercase">{selectedLicense.expiry}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="mt-24 border-t border-white/10 pt-16">
          <h2 className="text-2xl font-bold uppercase mb-8">Corporate Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-white/70">
            <div>
              <h4 className="font-bold text-white mb-2 uppercase">Registered Address</h4>
              <p>Lot 398, Kampung Pulau Labu<br />Labu 71900 Labu, Negeri Sembilan</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 uppercase">Company Registration</h4>
              <p>AgronoMist Valley&apos;s SDN BHD<br />Reg No: 202101034421 (1434321-X)</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 uppercase">Contact Info</h4>
              <p>agronomistvalleys@yahoo.com<br />012-3636 951</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 uppercase">Operating Hours</h4>
              <p>Monday - Saturday: 2:00 AM - 11:00 AM<br />(Distribution center only)</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

const licenses = [
  {
    id: "CERT-MY-AGR-01",
    title: "MyGAP Certification",
    description: "Malaysian Good Agricultural Practice validation ensuring produce quality and safety standards are meticulously met.",
    elaboration: "This certification represents our commitment to eco-friendly farming practices and zero-harm pesticide policies. Subject to annual audits by the Department of Agriculture, our MyGAP status guarantees that our crops are safe for human consumption and sustainably produced in harmony with the local environment.",
    image: "/MyGAP.png",
    expiry: "Dec 2026"
  },
  {
    id: "CERT-BIDFRESH-02",
    title: "BidFresh Pilot",
    description: "DOA Selangor Programme participant demonstrating innovation and transparent supply chain sourcing.",
    elaboration: "As a selected partner in the BidFresh agriculture innovation pilot by the Department of Agriculture Selangor, we operate a highly transparent, fully digitized supply route that allows full traceability from farm soil directly to the restaurant table, cutting down intermediaries and securing stable prices.",
    image: "/Bidfresh.jpg",
    expiry: "Dec 2025"
  },
  {
    id: "CERT-FAMA-AGR-26",
    title: "FAMA Certified",
    description: "Registered with Federal Agricultural Marketing Authority (FAMA) ensuring standard supply chain grading and distribution.",
    elaboration: "As a registered entity with FAMA (Lembaga Pemasaran Pertanian Persekutuan), our supply chain is compliant with strict national regulations for the grading, packaging, and labeling of agricultural produce, ensuring top-tier distribution transparency and food security.",
    image: "/fama_logo.png",
    expiry: "Dec 2027"
  }
]
