import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { InteractiveAppDemo } from './components/InteractiveAppDemo';
import { ValuePropositionBenefits } from './components/ValuePropositionBenefits';
import { SavingsCalculator } from './components/SavingsCalculator';
import { WhatsAppBotDemo } from './components/WhatsAppBotDemo';
import { Testimonials } from './components/Testimonials';
import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { VendorAdminMini } from './components/VendorAdminMini';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isVendorPanelOpen, setIsVendorPanelOpen] = useState(false);

  const handleOpenDownload = () => {
    setIsDownloadModalOpen(true);
  };

  const handleOpenWhatsApp = () => {
    // Scrolls to or opens the WhatsApp bot demo
    const botElement = document.getElementById('bot-demo');
    if (botElement) {
      botElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsDownloadModalOpen(true);
    }
  };

  const handleScrollToDemo = () => {
    const demoElement = document.getElementById('demo-app');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-slate-800 selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Top Navigation Bar */}
      <Navbar
        onOpenDownload={handleOpenDownload}
        onOpenBot={handleOpenWhatsApp}
        onOpenVendorPanel={() => setIsVendorPanelOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenDownload={handleOpenDownload}
          onOpenWhatsApp={handleOpenWhatsApp}
          onScrollToDemo={handleScrollToDemo}
        />

        {/* Problem Section */}
        <ProblemSection />

        {/* How It Works Section */}
        <HowItWorks
          onOpenDownload={handleOpenDownload}
          onScrollToDemo={handleScrollToDemo}
        />

        {/* Interactive App Simulator (Replica of 3 mobile screens) */}
        <InteractiveAppDemo onOpenDownload={handleOpenDownload} />

        {/* Benefits & Unfair Advantage Comparison */}
        <ValuePropositionBenefits />

        {/* Savings & Food Waste Calculator */}
        <SavingsCalculator onOpenDownload={handleOpenDownload} />

        {/* WhatsApp Bot MVP Simulator */}
        <div id="bot-demo">
          <WhatsAppBotDemo onOpenDownload={handleOpenDownload} />
        </div>

        {/* Real Testimonials from Market Vendors & Neighbors */}
        <Testimonials />

        {/* Download & Play Store Orange CTA Banner */}
        <DownloadCTA onOpenDownload={handleOpenDownload} />
      </main>

      {/* Footer */}
      <Footer
        onOpenVendorPanel={() => setIsVendorPanelOpen(true)}
        onOpenDownload={handleOpenDownload}
      />

      {/* Modals */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

      <VendorAdminMini
        isOpen={isVendorPanelOpen}
        onClose={() => setIsVendorPanelOpen(false)}
      />

      {/* Floating Quick Action Widget */}
      <div className="fixed bottom-20 right-5 z-40 flex items-center gap-2">
        <button
          onClick={handleOpenWhatsApp}
          className="group flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all font-semibold text-xs cursor-pointer"
          aria-label="Consultar por WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline font-bold">¿Tienes dudas? Escríbenos</span>
        </button>
      </div>

    </div>
  );
}
