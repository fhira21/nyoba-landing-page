import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden gradient-bg-hero"
    >
      {/* Decorative Floating Bubbles & Shapes */}
      <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-[#8BDFDD]/30 blur-xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 rounded-full bg-[#FFE394]/30 blur-2xl animate-float-medium pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-[#F48F68]/20 blur-lg animate-float-fast pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-20 h-20 rounded-full bg-[#8BDFDD]/20 blur-xl animate-float-slow pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8bdfdd10_1px,transparent_1px),linear-gradient(to_bottom,#8bdfdd10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col justify-center text-center lg:text-left"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#8BDFDD]/25 px-4 py-2 rounded-full text-[#1E5D5A] font-semibold text-sm self-center lg:self-start mb-6 shadow-sm border border-[#8BDFDD]/40"
          >
            <Sparkles size={16} className="text-[#F48F68]" />
            <span>Sneaker Restoration Experts</span>
          </motion.div>

          {/* Heading */}
          <h1 className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-[#121C1C] mb-6">
            Bring Your <br className="hidden sm:inline" />
            <span className="relative inline-block text-gradient-primary">
              Sneakers
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFE394]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
              </svg>
            </span> <br />
            Back to Life
          </h1>

          {/* Subheading */}
          <p className="text-lg text-[#121C1C]/70 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
            Premium shoe care, deep cleaning, precise repainting, and total restoration. Give your favorite kicks the fresh start and sneaker-culture respect they deserve.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#pricing"
              className="px-8 py-4 rounded-full font-bold text-white bg-[#F48F68] shadow-lg shadow-[#F48F68]/30 hover:bg-[#e27e56] transition-all flex items-center justify-center gap-2"
            >
              <Calendar size={18} />
              Book Cleaning
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="px-8 py-4 rounded-full font-bold text-[#121C1C] glass hover:bg-white/80 transition-all flex items-center justify-center gap-2 border border-[#8BDFDD]"
            >
              View Services
              <ArrowRight size={18} />
            </motion.a>
          </div>

          {/* Micro stats banner */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-[#121C1C]/10 pt-8 max-w-md mx-auto lg:mx-0">
            <div>
              <p className="text-3xl font-sora font-extrabold text-[#F48F68]">15k+</p>
              <p className="text-xs text-[#121C1C]/60 font-semibold uppercase tracking-wider">Cleaned</p>
            </div>
            <div>
              <p className="text-3xl font-sora font-extrabold text-[#8BDFDD] drop-shadow-sm filter brightness-95">99.2%</p>
              <p className="text-xs text-[#121C1C]/60 font-semibold uppercase tracking-wider">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-sora font-extrabold text-[#FFE394] drop-shadow-sm filter brightness-75">4.9 ★</p>
              <p className="text-xs text-[#121C1C]/60 font-semibold uppercase tracking-wider">Google Reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Floating Shoe Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex justify-center items-center"
        >
          {/* Radial Light behind the shoe */}
          <div className="absolute w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-gradient-to-tr from-[#8BDFDD]/40 via-[#FFE394]/30 to-[#F48F68]/20 blur-3xl -z-10 animate-pulse" />

          {/* Rotating Badge Background */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 hidden sm:block pointer-events-none"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#F48F68]">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text className="font-sora font-bold text-[8.5px] uppercase fill-current tracking-wider">
                <textPath href="#circlePath">
                  Premium Sneaker Care • Freshly Cleaned • Restored • 
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Interactive Hero Shoe Graphic */}
          <motion.div
            animate={{ 
              y: [0, -18, 0],
              rotate: [0, 2, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="relative z-10 w-full max-w-[340px] sm:max-w-[460px] cursor-grab active:cursor-grabbing hover:scale-105 transition-transform duration-500"
          >
            <img 
              src="/images/hero.png" 
              alt="Premium Clean Sneaker Floating" 
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(244,143,104,0.3)] filter brightness-105"
            />
          </motion.div>

          {/* Micro animations of water bubbles and stars */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute bottom-16 left-6 text-4xl"
          >
            🫧
          </motion.div>
          <motion.div 
            animate={{ y: [0, 8, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className="absolute top-10 right-10 text-3xl"
          >
            ✨
          </motion.div>
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
            className="absolute bottom-24 right-4 text-2xl"
          >
            💧
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
