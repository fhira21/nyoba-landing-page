import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How long does a premium deep cleaning service take?",
      answer: "Our standard deep cleaning turnaround is 48 hours from the time we receive your shoes. For paint touch-ups and extensive restorations, it can take 3 to 5 business days to ensure correct paint drying and curing between layers."
    },
    {
      question: "Can you clean delicate materials like suede, nubuck, and knit?",
      answer: "Absolutely. Our sneaker technicians are highly trained. We use specific soft-bristle horsehair brushes and bespoke dry cleaning solutions formulated specifically for delicate suede, nubuck, knit, and premium leathers. We never submerge suede in water."
    },
    {
      question: "How does the pickup and delivery service work?",
      answer: "It's simple! When placing an order, choose the 'Home Pickup' option. You will select a preferred date and time slot. Our professional courier will arrive with a secure sneaker transit bag, collect your shoes, and deliver them back restored."
    },
    {
      question: "What is your refund policy if the stains cannot be removed?",
      answer: "We perform a thorough digital pre-inspection on every pair. If our team finds that a stain is permanent (like chemical burns or oil dye) and cannot be significantly improved, we will notify you before cleaning. If we clean them and fail to show positive results, we offer a 100% refund."
    },
    {
      question: "Is the shoe cleaning formula safe for my family and pets?",
      answer: "Yes, 100%. Our proprietary soap solution is 98.3% natural, chemical-free, biodegradable, and organic. It contains no harsh chemical detergents, making it perfectly safe for your home, children, and pets."
    }
  ];

  return (
    <section id="faq" className="py-24 relative bg-brand-cream overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/3 right-10 w-24 h-24 rounded-full bg-[#8BDFDD]/15 blur-xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-32 h-32 rounded-full bg-[#FFE394]/20 blur-xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-[#F48F68] uppercase tracking-wider block mb-2">
            Got Questions?
          </span>
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl text-[#121C1C]">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-[#8BDFDD] mx-auto mt-4 rounded-full" />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl border border-[#121C1C]/5 overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Accordion Toggle header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`w-full flex items-center justify-between p-6 sm:p-7 text-left font-sora font-bold text-[#121C1C] transition-all ${
                    isOpen ? 'bg-[#8BDFDD]/35 text-[#1E5D5A]' : 'glass hover:bg-white/80'
                  }`}
                >
                  <span className="flex items-center gap-4 text-base sm:text-lg">
                    <HelpCircle size={20} className={isOpen ? 'text-[#F48F68]' : 'text-[#8BDFDD]'} />
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full ${isOpen ? 'bg-[#F48F68]/20 text-[#A04520]' : 'bg-[#121C1C]/5 text-[#121C1C]/50'} flex items-center justify-center transition-all`}>
                    {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                  </div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="bg-white/70 border-t border-[#121C1C]/5"
                    >
                      <p className="p-6 sm:p-7 text-sm sm:text-base text-[#121C1C]/85 leading-relaxed font-semibold">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
