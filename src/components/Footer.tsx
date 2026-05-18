import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Before & After', href: '#before-after' },
  ];

  const supportLinks = [
    { name: 'Pricing Packages', href: '#pricing' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ];

  return (
    <footer className="bg-[#121C1C] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Subtle bottom decorative light glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-gradient-to-t from-[#8BDFDD]/10 to-transparent rounded-t-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-2">
              <span className="text-3xl">👟</span>
              <span className="font-sora font-extrabold text-2xl tracking-tight text-white">
                Lace<span className="text-[#F48F68]">Fresh</span>
              </span>
            </a>
            <p className="text-sm text-white/60 leading-relaxed font-semibold">
              Premium handcrafted sneaker cleaning, restoring, and de-yellowing services designed for sneaker collectors and shoe enthusiasts. Keep your kicks crispy.
            </p>
            {/* Social media icons */}
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#F48F68] hover:text-white transition-all text-white/80" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#F48F68] hover:text-white transition-all text-white/80" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#F48F68] hover:text-white transition-all text-white/80" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-sora font-bold text-sm uppercase tracking-wider text-[#8BDFDD]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-[#F48F68] transition-colors font-semibold">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-sora font-bold text-sm uppercase tracking-wider text-[#8BDFDD]">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-[#F48F68] transition-colors font-semibold">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-sora font-bold text-sm uppercase tracking-wider text-[#8BDFDD]">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-white/70 font-semibold">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#F48F68] flex-shrink-0 mt-0.5" />
                <span>124 Sneaker Boulevard, Design District, New York, NY 10013</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#F48F68] flex-shrink-0" />
                <a href="tel:+18005555223" className="hover:text-white transition-colors">+1 (800) 555-LACE</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#F48F68] flex-shrink-0" />
                <a href="mailto:fresh@lacefresh.com" className="hover:text-white transition-colors">fresh@lacefresh.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom divider copyright */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-semibold">
            &copy; {new Date().getFullYear()} LaceFresh LLC. All sneaker rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40 font-bold uppercase tracking-wider select-none">
            <span>Cleaned in USA 🇺🇸</span>
            <span>Sneakerhead Approved 👟</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
