import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass py-3 shadow-lg shadow-[#8BDFDD]/10' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 group">
              <span className="text-3xl">👟</span>
              <span className="font-sora font-extrabold text-2xl tracking-tight text-[#121C1C]">
                Lace<span className="text-[#F48F68]">Fresh</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-[#121C1C]/80 hover:text-[#F48F68] transition-colors relative py-2 group text-sm lg:text-base"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F48F68] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#pricing"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-gray-900 rounded-full group bg-gradient-to-br from-[#8BDFDD] via-[#FFE394] to-[#F48F68] group-hover:from-[#8BDFDD] group-hover:to-[#F48F68] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#FFF6DE] text-[#121C1C] rounded-full group-hover:bg-opacity-0 group-hover:text-white flex items-center gap-2">
                  <Sparkles size={16} className="text-[#F48F68] group-hover:text-white" />
                  Book Cleaning
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#121C1C] hover:text-[#F48F68] focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 z-40 md:hidden glass shadow-xl rounded-b-3xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl font-semibold text-[#121C1C] hover:bg-[#8BDFDD]/20 hover:text-[#F48F68] transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#121C1C]/10 px-4">
                <a
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center block px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-[#F48F68] to-[#FFE394] shadow-md shadow-[#F48F68]/20 hover:opacity-90 transition-all"
                >
                  Book Cleaning 👟
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
