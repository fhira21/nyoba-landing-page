import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
  sneaker: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Marcus Vane",
      role: "Sneaker Collector",
      avatar: "🙋‍♂️",
      rating: 5,
      review: "Honestly thought my Travis Scott Dunks were done for after a festival weekend of mud. LaceFresh made them look brand new! The canvas is spotless and suede texture is perfect. Unbelievable!",
      sneaker: "Travis Scott Dunk Lows"
    },
    {
      name: "Sophia Martinez",
      role: "Daily Commuter",
      avatar: "🙋‍♀️",
      rating: 5,
      review: "I use their home pickup service for all my office sneakers. It's incredibly convenient, and the custom scent they use leaves them smelling so clean. Highly recommend their Deep Clean package!",
      sneaker: "Adidas Stan Smiths"
    },
    {
      name: "Kenji Sato",
      role: "Hypebeast Blogger",
      avatar: "👨‍💻",
      rating: 5,
      review: "Excellent repaint job on my vintage AJ1 Chicagos. They matched the leather finish and red pigment perfectly. The team is super knowledgeable about sole oxidation and sneaker history too.",
      sneaker: "Jordan 1 Retro Chicago"
    },
    {
      name: "Chloe Harrison",
      role: "Fitness Instructor",
      avatar: "💁‍♀️",
      rating: 4,
      review: "Super fast turnaround time. My bright white running shoes get filthy every week, and their express whitening service is my lifesaver. Will definitely subscribe to their monthly package.",
      sneaker: "Nike Pegasus Trail"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative bg-brand-cream overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/3 left-10 w-44 h-44 rounded-full bg-[#8BDFDD]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-44 h-44 rounded-full bg-[#FFE394]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left max-w-xl">
            <span className="text-sm font-bold text-[#F48F68] uppercase tracking-wider block mb-2">
              Reviews
            </span>
            <h2 className="font-sora font-extrabold text-3xl sm:text-4xl text-[#121C1C]">
              What Our Sneaker Fam <br className="hidden sm:inline" />Is Saying About Us
            </h2>
            <div className="h-1 w-20 bg-[#8BDFDD] mt-4 rounded-full" />
          </div>
          
          {/* Top buttons layout */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-4 rounded-full glass border border-[#121C1C]/10 text-[#121C1C] hover:bg-[#F48F68] hover:text-white transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-4 rounded-full glass border border-[#121C1C]/10 text-[#121C1C] hover:bg-[#F48F68] hover:text-white transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass p-8 sm:p-12 rounded-[36px] border-2 border-white shadow-xl shadow-[#8BDFDD]/10 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start"
            >
              
              {/* Left Column Avatar & Name */}
              <div className="flex flex-col items-center md:items-start flex-shrink-0">
                <div className="w-24 h-24 rounded-3xl bg-[#8BDFDD]/20 border border-[#8BDFDD]/50 flex items-center justify-center text-5xl shadow-inner select-none mb-4">
                  {testimonials[activeIndex].avatar}
                </div>
                <h3 className="font-sora font-extrabold text-xl text-[#121C1C]">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-xs font-semibold text-[#121C1C]/50 uppercase tracking-widest mt-1">
                  {testimonials[activeIndex].role}
                </p>
                <div className="bg-[#F48F68]/10 text-[#A04520] text-xs font-bold px-3 py-1.5 rounded-full mt-3 flex items-center gap-1.5 border border-[#F48F68]/20 select-none">
                  👟 {testimonials[activeIndex].sneaker}
                </div>
              </div>

              {/* Right Column Rating & Review */}
              <div className="flex-1 flex flex-col justify-between text-center md:text-left h-full">
                
                {/* Quote details */}
                <div className="relative">
                  <Quote size={40} className="absolute -top-6 -left-6 text-[#8BDFDD]/35 -z-10 pointer-events-none" />
                  
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4 select-none">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < testimonials[activeIndex].rating
                            ? "fill-[#FFE394] text-[#FFE394]"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  <p className="text-base sm:text-lg text-[#121C1C]/80 leading-relaxed font-semibold italic">
                    "{testimonials[activeIndex].review}"
                  </p>
                </div>

                <div className="mt-8 border-t border-[#121C1C]/15 pt-4 flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#F48F68] uppercase tracking-widest">
                    Verified Customer Review
                  </span>
                  <span className="text-2xl">🌿</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Small Slider Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-8 bg-[#F48F68]' : 'bg-[#121C1C]/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
