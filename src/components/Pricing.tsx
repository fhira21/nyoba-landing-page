import { motion } from 'framer-motion';
import { Check, Flame, Sparkles } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
  color: string;
  badgeBg: string;
  accentColor: string;
}

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      name: "Basic Clean",
      price: "$29",
      description: "Quick exterior refresh for daily wear sneakers to look sharp instantly.",
      features: [
        "Midsole wipe-down & clean",
        "Exterior foam upper wash",
        "Lace wash & conditioning",
        "Basic deodorant mist",
        "2-day standard delivery"
      ],
      isPopular: false,
      ctaText: "Order Basic Clean",
      color: "glass hover:bg-white/95",
      badgeBg: "bg-[#121C1C]/5 text-[#121C1C]",
      accentColor: "text-[#8BDFDD]",
    },
    {
      name: "Deep Clean",
      price: "$49",
      description: "Complete microscopic clean inside and out. Recommended for muddy, heavily worn sneakers.",
      features: [
        "Standard exterior deep scrub",
        "Full interior & insole deep wash",
        "Advanced lace ultrasonic soak",
        "Under-sole stone & dirt extraction",
        "Advanced UV sanitize & sterilization",
        "Sneaker premium perfume finish",
        "48-hour priority turnaround"
      ],
      isPopular: true,
      ctaText: "Order Deep Clean",
      color: "bg-white/90 border-[#F48F68]/70 shadow-xl shadow-[#F48F68]/15 ring-2 ring-[#F48F68]/60 hover:bg-white",
      badgeBg: "bg-[#F48F68] text-white",
      accentColor: "text-[#F48F68]",
    },
    {
      name: "Premium Restoration",
      price: "$89",
      description: "The ultimate rejuvenation service to bring vintage and expensive grails back to factory look.",
      features: [
        "Everything in Deep Clean package",
        "Custom repaint & crease reduction",
        "Sole unyellowing UV treatment",
        "Suede softening & texture revival",
        "Eco-shield waterproof coating",
        "Premium custom sneaker bag & trees",
        "VIP courier pickup & delivery"
      ],
      isPopular: false,
      ctaText: "Order Restoration",
      color: "glass hover:bg-white/95",
      badgeBg: "bg-[#FFE394]/70 text-[#A58223]",
      accentColor: "text-[#FFE394]",
    }
  ];

  return (
    <section id="pricing" className="py-24 relative bg-brand-cream overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#8BDFDD]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-44 h-44 rounded-full bg-[#F48F68]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sm font-bold text-[#F48F68] uppercase tracking-wider block mb-2">
            Pricing Plans
          </span>
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl text-[#121C1C]">
            Fair & Transparent Pricing
          </h2>
          <div className="h-1 w-20 bg-[#8BDFDD] mx-auto mt-4 rounded-full" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, type: 'spring', stiffness: 85 }}
              whileHover={{ 
                y: -12,
                boxShadow: plan.isPopular 
                  ? "0 30px 60px rgba(244,143,104,0.2)" 
                  : "0 20px 40px rgba(18,28,28,0.08)"
              }}
              className={`${plan.color} rounded-[36px] p-8 flex flex-col justify-between border border-[#121C1C]/5 transition-all duration-300 relative`}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#F48F68] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md shadow-[#F48F68]/20 flex items-center gap-1 select-none">
                  <Flame size={12} className="fill-current" />
                  Most Popular
                </span>
              )}

              <div>
                {/* Header Package Name */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-sora font-extrabold text-2xl text-[#121C1C]">
                      {plan.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#121C1C]/50 mt-1 uppercase tracking-wider">
                      Sneaker Package
                    </p>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${plan.badgeBg} select-none`}>
                    {plan.isPopular ? 'Premium Care' : 'Care Choice'}
                  </span>
                </div>

                <p className="text-sm text-[#121C1C]/70 mb-6 leading-relaxed font-semibold">
                  {plan.description}
                </p>

                {/* Price Label */}
                <div className="flex items-baseline mb-8">
                  <span className="font-sora font-extrabold text-5xl text-[#121C1C] tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-[#121C1C]/60 text-sm font-semibold ml-2 uppercase">
                    / per pair
                  </span>
                </div>

                <div className="h-px bg-[#121C1C]/10 w-full mb-8" />

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <div className="bg-[#121C1C]/5 rounded-full p-1 mt-0.5 flex-shrink-0 flex items-center justify-center">
                        <Check size={12} className={`${plan.isPopular ? 'text-[#F48F68]' : 'text-[#1E5D5A]'} strokeWidth={3}`} />
                      </div>
                      <span className="text-sm font-medium text-[#121C1C]/80 leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order Trigger CTA Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-4 rounded-full font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                  plan.isPopular
                    ? 'bg-[#F48F68] text-white shadow-[#F48F68]/20 hover:bg-[#e27e56]'
                    : 'bg-[#121C1C] text-white hover:bg-[#F48F68]'
                }`}
              >
                <Sparkles size={16} />
                {plan.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
