import { motion } from 'framer-motion';
import { Calendar, Sparkles } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-24 relative bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* The main CTA card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[48px] glass-dark gradient-bg-dark text-white p-10 sm:p-16 lg:p-20 overflow-hidden shadow-2xl border border-white/5 text-center flex flex-col items-center justify-center"
        >
          {/* Decorative Floating Bubbles & Sparkles inside CTA */}
          <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[#8BDFDD]/15 blur-2xl animate-float-slow pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#F48F68]/20 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-[#FFE394] animate-ping" />

          {/* Tagline header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-[#8BDFDD] font-extrabold text-xs uppercase tracking-widest mb-6 border border-white/5 select-none"
          >
            <Sparkles size={14} className="text-[#FFE394]" />
            Give Your Shoes the Royal Treatment
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight max-w-3xl mb-6"
          >
            Your Shoes Deserve <br />
            <span className="text-gradient-primary">Better Care</span>
          </motion.h2>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg text-white/70 max-w-xl mb-10 font-semibold"
          >
            Join thousands of sneaker collectors and shoe lovers who trust LaceFresh with their daily footwear and rarest collectibles. Get 20% off your first booking!
          </motion.p>

          {/* Animated Call-to-action button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#pricing"
              className="px-8 py-4 rounded-full font-bold text-[#121C1C] bg-[#FFE394] hover:bg-white shadow-xl shadow-[#FFE394]/10 transition-all flex items-center justify-center gap-2"
            >
              <Calendar size={18} className="text-[#A58223]" />
              Book Your Cleaning Now
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="px-8 py-4 rounded-full font-bold text-white glass hover:bg-white/20 transition-all flex items-center justify-center gap-2 border border-white/25"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Footer note inside CTA */}
          <p className="text-[11px] text-white/40 uppercase tracking-widest mt-12 font-bold select-none">
            🛡️ 100% Satisfaction Guarantee • Hand Cleaned With Love
          </p>

        </motion.div>

      </div>
    </section>
  );
}
