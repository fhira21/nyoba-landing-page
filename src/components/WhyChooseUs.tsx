import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Flame, Zap, Award, Sparkles } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

export default function WhyChooseUs() {
  const benefits: Benefit[] = [
    {
      icon: <Zap size={24} className="text-[#A04520]" />,
      title: "Fast 48-Hour Turnaround",
      description: "Quick drop-off and pickup. We know you miss your sneakers, so we get them back on your feet in no time.",
      bgColor: "bg-[#F48F68]/20",
    },
    {
      icon: <Award size={24} className="text-[#A58223]" />,
      title: "Premium Equipment",
      description: "We use only professional, specialized sonic cleaning tools and bespoke premium solutions safe for delicate mesh, suede, and leather.",
      bgColor: "bg-[#FFE394]/30",
    },
    {
      icon: <Flame size={24} className="text-[#1E5D5A]" />,
      title: "Sneakerhead Approved Team",
      description: "Our experts live and breathe sneaker culture. We treat your limited-edition grails with absolute respect and careful detail.",
      bgColor: "bg-[#8BDFDD]/30",
    },
    {
      icon: <Leaf size={24} className="text-[#1E5D5A]" />,
      title: "100% Eco-Friendly & Organic",
      description: "Our bespoke cleaning solution formula is 98.3% natural, chemical-free, biodegradable, and completely safe for environment and children.",
      bgColor: "bg-[#8BDFDD]/25",
    },
    {
      icon: <ShieldCheck size={24} className="text-[#A04520]" />,
      title: "Restoration Guarantee",
      description: "We perform strict pre-inspections. If we cannot safely restore or significantly improve your shoes, we won't charge a dime.",
      bgColor: "bg-[#F48F68]/15",
    },
  ];

  return (
    <section id="why-us" className="py-24 relative gradient-bg-why overflow-hidden">
      {/* Dynamic Background Details */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-[#FFE394]/40 animate-float-medium pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-[#8BDFDD]/30 animate-float-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual badges and title */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#FFE394]/30 px-4 py-2 rounded-full text-[#A58223] font-bold text-xs uppercase tracking-wider mb-4"
            >
              <Sparkles size={14} />
              <span>Why Choose Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sora font-extrabold text-3xl sm:text-4xl text-[#121C1C] mb-6 leading-tight"
            >
              Crafting Pristine <br />
              Vibes for Every Step
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#121C1C]/70 leading-relaxed mb-8 max-w-md font-medium"
            >
              We don't just clean sneakers—we restore the confidence you had when you first unboxed them. Using advanced eco-friendly formulas and experienced sneaker technicians, we provide a premium service built for the modern shoe lover.
            </motion.p>

            {/* Glowing Big Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              className="glass p-6 rounded-3xl border border-[#8BDFDD]/70 max-w-[280px] shadow-lg shadow-[#8BDFDD]/10"
            >
              <p className="font-sora font-extrabold text-5xl text-[#F48F68]">100%</p>
              <p className="font-bold text-sm text-[#121C1C] mt-2">Sneaker Integrity Safe</p>
              <p className="text-xs text-[#121C1C]/60 mt-1">We treat leather, knit, suede, and vintage items with unique, custom-made care.</p>
            </motion.div>
          </div>

          {/* Right Column: Grid list of benefits */}
          <div className="lg:col-span-7 space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 80 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card hover:bg-white/80 p-6 rounded-2xl flex items-start gap-5 transition-all duration-300 border border-[#121C1C]/5 shadow-sm"
              >
                <div className={`p-3.5 rounded-xl ${benefit.bgColor} flex-shrink-0 flex items-center justify-center`}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-sora font-bold text-lg text-[#121C1C] mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#121C1C]/65 leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
