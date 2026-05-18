import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowLeft, RefreshCw } from 'lucide-react';

interface ShowcaseItem {
  id: number;
  title: string;
  category: string;
  image: string;
  dirtyLabel: string;
  cleanLabel: string;
  details: string[];
}

export default function BeforeAfter() {
  const [activeItem, setActiveItem] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const showcaseItems: ShowcaseItem[] = [
    {
      id: 0,
      title: "Vtg Air Max 90 Restoration",
      category: "Complete Clean & Whitening",
      image: "/images/before-after.png",
      dirtyLabel: "Dirty & Oxidized Sole",
      cleanLabel: "Crispy Spotless Clean",
      details: ["Deep mesh soak", "Oxidation reversal", "Sole whitening treatment", "Deodorization soak"]
    },
    {
      id: 1,
      title: "Yeezy 350 Suede Refresh",
      category: "Suede Restoration",
      image: "/images/before-after.png", // reusing high quality sneaker comparison as main element
      dirtyLabel: "Matted, Muddy Suede",
      cleanLabel: "Soft Nap Raised Suede",
      details: ["Soft-nap dry brush", "Eco suede shampoo wash", "Velour fiber comb", "Waterproofing shield"]
    },
    {
      id: 2,
      title: "Jordan 1 Retro Chicago Custom",
      category: "Paint & Midsole Restoration",
      image: "/images/before-after.png",
      dirtyLabel: "Scuffed & Creased Paint",
      cleanLabel: "Hand-painted Leather Fix",
      details: ["Iron crease removal", "Paint prep stripping", "Custom leather color repaint", "Matte top-coat protect"]
    }
  ];

  const handleNext = () => {
    setActiveItem((prev) => (prev + 1) % showcaseItems.length);
  };

  const handlePrev = () => {
    setActiveItem((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  return (
    <section id="before-after" className="py-24 relative bg-brand-cream overflow-hidden">
      {/* Decorative styling */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#8BDFDD]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#F48F68]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-[#8BDFDD]/30 px-4 py-2 rounded-full text-[#1E5D5A] font-bold text-xs uppercase tracking-wider mb-2">
            <RefreshCw size={14} className="animate-spin-slow text-[#F48F68]" />
            Magical Transformations
          </span>
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl text-[#121C1C] mt-2">
            Before & After Showcase
          </h2>
          <p className="text-sm sm:text-base text-[#121C1C]/70 mt-3 font-medium">
            Drag, hover, and explore our stunning sneakers cleaning, whitening, and restoration results.
          </p>
          <div className="h-1 w-20 bg-[#F48F68] mx-auto mt-4 rounded-full" />
        </div>

        {/* Showcase Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Card with comparison view */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Interactive Image Frame */}
            <motion.div
              layout
              className="relative w-full max-w-[550px] aspect-square rounded-[36px] overflow-hidden glass p-3 border-2 border-white shadow-2xl shadow-[#8BDFDD]/15"
              whileHover={{ scale: 1.02 }}
            >
              <div 
                className="w-full h-full rounded-[28px] overflow-hidden relative cursor-crosshair"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
              >
                {/* Main Comparison Image (Side by Side split image) */}
                <motion.img
                  src={showcaseItems[activeItem].image}
                  alt={showcaseItems[activeItem].title}
                  animate={{ scale: isZoomed ? 1.15 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover select-none"
                />

                {/* Left/Right Text Indicators */}
                <div className="absolute bottom-4 left-4 bg-black/55 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-white border border-white/20 select-none">
                  {showcaseItems[activeItem].dirtyLabel} 🤢
                </div>
                
                <div className="absolute bottom-4 right-4 bg-[#1E5D5A]/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-white border border-[#8BDFDD]/40 select-none">
                  {showcaseItems[activeItem].cleanLabel} ✨
                </div>

                {/* Hover instructions overlay */}
                <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors pointer-events-none flex items-center justify-center">
                  <div className="text-white text-xs font-semibold uppercase tracking-wider bg-black/60 px-4 py-2 rounded-full border border-white/10 opacity-0 hover:opacity-100 transition-opacity">
                    Hover to Zoom Details 🔎
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Slider Navigation Buttons */}
            <div className="flex gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="p-4 rounded-full bg-[#121C1C] text-white hover:bg-[#F48F68] transition-colors"
                aria-label="Previous restoration case"
              >
                <ArrowLeft size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="p-4 rounded-full bg-[#121C1C] text-white hover:bg-[#F48F68] transition-colors"
                aria-label="Next restoration case"
              >
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>

          {/* Right Column: Case details and active project text */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <span className="font-bold text-sm text-[#F48F68] uppercase tracking-wider block">
                    {showcaseItems[activeItem].category}
                  </span>
                  <h3 className="font-sora font-extrabold text-3xl text-[#121C1C] mt-1 leading-tight">
                    {showcaseItems[activeItem].title}
                  </h3>
                </div>

                <div className="h-0.5 bg-[#121C1C]/10 w-full" />

                <div>
                  <h4 className="font-sora font-semibold text-[#121C1C] mb-3 flex items-center gap-2">
                    <Sparkles size={16} className="text-[#8BDFDD]" />
                    Applied Treatment:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {showcaseItems[activeItem].details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[#121C1C]/75 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8BDFDD]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass p-5 rounded-2xl border border-[#F48F68]/30">
                  <p className="text-xs font-semibold text-[#121C1C]/60 uppercase tracking-widest">
                    Guaranteed Results
                  </p>
                  <p className="text-sm font-semibold text-[#A04520] mt-1.5">
                    Our team takes microscopic care to ensure stitches, colors, and textures remain safe during deep restoration process.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
