import { motion } from 'framer-motion';
import { Truck, Search, Droplets, HeartHandshake } from 'lucide-react';

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function Process() {
  const steps: Step[] = [
    {
      number: "01",
      icon: <Truck size={24} className="text-[#A04520]" />,
      title: "Drop-off / Home Pickup",
      description: "Drop your shoes off at our local hub, or order our contact-free door pickup. We handle all logistics.",
      color: "bg-[#F48F68]/20 text-[#A04520] border-[#F48F68]/40",
    },
    {
      number: "02",
      icon: <Search size={24} className="text-[#1E5D5A]" />,
      title: "Detailed Inspection & Log",
      description: "We document and review stains, scuffs, crease marks, and canvas integrity, sending a custom care quote and diagnosis.",
      color: "bg-[#8BDFDD]/35 text-[#1E5D5A] border-[#8BDFDD]/50",
    },
    {
      number: "03",
      icon: <Droplets size={24} className="text-[#A58223]" />,
      title: "Bespoke Deep Wash",
      description: "We clean inside out, sole and laces using matching sonic brushes, custom natural solutions, and UV de-oxidizers.",
      color: "bg-[#FFE394]/45 text-[#A58223] border-[#FFE394]/75",
    },
    {
      number: "04",
      icon: <HeartHandshake size={24} className="text-[#1E5D5A]" />,
      title: "Ready to Wear & Fresh out",
      description: "Shoes are deodorized, laced up custom, and packaged in our luxury eco-box, delivered fresh to your door.",
      color: "bg-[#8BDFDD]/30 text-[#1E5D5A] border-[#8BDFDD]/40",
    },
  ];

  return (
    <section id="process" className="py-24 relative bg-brand-cream overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-[#FFE394]/20 blur-xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-[#8BDFDD]/25 blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-bold text-[#F48F68] uppercase tracking-wider block mb-2">
            How it Works
          </span>
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl text-[#121C1C]">
            Our 4-Step Freshness Journey
          </h2>
          <div className="h-1 w-20 bg-[#8BDFDD] mx-auto mt-4 rounded-full" />
        </div>

        {/* Desktop timeline process */}
        <div className="relative">
          
          {/* Horizontal Line connecting steps on desktop */}
          <div className="hidden lg:block absolute top-[90px] left-[12%] right-[12%] h-1.5 bg-[#121C1C]/5 -z-10">
            {/* Animated line loader */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-[#F48F68] via-[#FFE394] to-[#8BDFDD] rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -8 }}
                className="glass-card hover:bg-white p-7 rounded-3xl transition-all duration-300 relative border border-[#121C1C]/5 shadow-sm text-center flex flex-col justify-between"
              >
                <div>
                  {/* Step bubble top */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-sora font-extrabold text-3xl text-[#121C1C]/15 group-hover:text-[#F48F68]/20 transition-all select-none">
                      {step.number}
                    </span>
                    <div className={`p-3.5 rounded-2xl ${step.color} border flex items-center justify-center`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-sora font-bold text-lg text-[#121C1C] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#121C1C]/70 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 flex justify-center">
                  <span className="text-xs font-bold text-[#F48F68] tracking-widest uppercase bg-[#F48F68]/10 px-3 py-1 rounded-full">
                    Step {step.number}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
