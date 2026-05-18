import { motion } from 'framer-motion';
import { Droplet, Paintbrush, ShieldAlert, Sparkles, Timer, Crown } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  badge: string;
}

export default function Services() {
  const services: Service[] = [
    {
      icon: <Droplet size={28} className="text-[#1E5D5A]" />,
      title: "Deep Cleaning",
      description: "Thorough deep wash inside and out, laces, insoles, midsoles, and outsoles. Removes deep stains and odor.",
      color: "bg-[#8BDFDD]/35 border-[#8BDFDD]/60",
      badge: "Most Popular",
    },
    {
      icon: <Paintbrush size={28} className="text-[#A04520]" />,
      title: "Repaint & Restoration",
      description: "Meticulous color matching and painting to restore scratched leather, cracked canvas, or faded panels to new.",
      color: "bg-[#F48F68]/30 border-[#F48F68]/60",
      badge: "Premium Art",
    },
    {
      icon: <Sparkles size={28} className="text-[#A58223]" />,
      title: "Whitening Treatment",
      description: "Specialized formulation that targets yellowed mesh, canvas, and knit fabric. Returns your sneakers to pristine white.",
      color: "bg-[#FFE394]/35 border-[#FFE394]/70",
      badge: "Spotless Clean",
    },
    {
      icon: <ShieldAlert size={28} className="text-[#1E5D5A]" />,
      title: "Sole Unyellowing",
      description: "Advanced UV and peroxide treatments designed specifically to reverse oxidation and yellowing on rubber outsoles.",
      color: "bg-[#8BDFDD]/30 border-[#8BDFDD]/50",
      badge: "Scientific",
    },
    {
      icon: <Timer size={28} className="text-[#A04520]" />,
      title: "Fast Cleaning",
      description: "On-the-go quick refresh for your shoes. Focuses on midsole wipe-down, light upper deodorizer, and basic dirt clean.",
      color: "bg-[#F48F68]/25 border-[#F48F68]/45",
      badge: "24 Hours Only",
    },
    {
      icon: <Crown size={28} className="text-[#A58223]" />,
      title: "Premium Treatment",
      description: "The ultimate luxury care package. Includes waterproofing, crease prevention, luxury conditioning, and premium lace iron.",
      color: "bg-[#FFE394]/45 border-[#FFE394]/85",
      badge: "V.I.P. Choice",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="services" className="py-24 relative bg-brand-cream overflow-hidden">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-[#8BDFDD]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-[#F48F68]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[#F48F68] uppercase tracking-wider mb-2"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sora font-extrabold text-3xl sm:text-4xl text-[#121C1C]"
          >
            Expert Care for Your Entire Collection
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-1 bg-[#8BDFDD] mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                boxShadow: "0 20px 40px rgba(18, 28, 28, 0.08)"
              }}
              className="glass-card hover:bg-white/90 p-8 rounded-3xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group border border-[#121C1C]/5"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/40 to-transparent rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-150" />

              <div>
                {/* Header info (Icon & Badge) */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl ${service.color} border transition-all duration-300 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#121C1C]/5 text-[#121C1C]/80 px-3 py-1 rounded-full group-hover:bg-[#F48F68] group-hover:text-white transition-all duration-300">
                    {service.badge}
                  </span>
                </div>

                {/* Service Details */}
                <h3 className="font-sora font-bold text-xl text-[#121C1C] mb-3 group-hover:text-[#F48F68] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#121C1C]/70 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* View service price trigger */}
              <div className="mt-8 pt-4 border-t border-[#121C1C]/5 flex items-center justify-between">
                <span className="text-xs font-bold text-[#121C1C]/50 uppercase tracking-widest group-hover:text-[#121C1C]/80 transition-colors">
                  Book Service
                </span>
                <motion.div
                  className="w-8 h-8 rounded-full bg-[#121C1C] group-hover:bg-[#F48F68] flex items-center justify-center text-white transition-all duration-300"
                  whileHover={{ scale: 1.15 }}
                >
                  👟
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
