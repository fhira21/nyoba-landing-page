import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import BeforeAfter from './components/BeforeAfter';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-cream text-[#121C1C]">
      {/* Dynamic Background Water Splash blur effect for the entire page */}
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] rounded-full bg-[#8BDFDD]/10 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-[2000px] left-0 w-[600px] h-[600px] rounded-full bg-[#F48F68]/8 blur-[180px] pointer-events-none -z-10" />
      <div className="absolute top-[3500px] right-0 w-[550px] h-[550px] rounded-full bg-[#FFE394]/12 blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[5000px] left-0 w-[600px] h-[600px] rounded-full bg-[#8BDFDD]/10 blur-[150px] pointer-events-none -z-10" />

      {/* Assembly Sections */}
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <BeforeAfter />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
}
