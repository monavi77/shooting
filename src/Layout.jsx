import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Target } from 'lucide-react';

const navItems = [
  { name: 'Home', page: '/' },
  { name: 'What Is Trap', page: 'WhatIsTrap' },
  { name: 'How to Aim', page: 'HowToAim' },
  { name: 'Classes', page: 'Classes' },
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <Target className="w-8 h-8 text-[#F56600]" />
              </motion.div>
              <span className="text-xl font-bold text-[#2B2B2B]">
                Trap<span className="text-[#F56600]">School</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.page)}
                  className="relative group"
                >
                  <span className={`text-sm font-medium transition-colors duration-200 ${
                    currentPageName === item.page 
                      ? 'text-[#F56600]' 
                      : 'text-[#2B2B2B]/70 hover:text-[#2B2B2B]'
                  }`}>
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F56600] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: currentPageName === item.page ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              ))}
              <Link to={createPageUrl('Classes')}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#F56600] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#F56600]/90 transition-colors"
                >
                  Book a Class
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#2B2B2B]" />
              ) : (
                <Menu className="w-6 h-6 text-[#2B2B2B]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-[#EAE6C3]"
            >
              <div className="px-6 py-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-base font-medium ${
                      currentPageName === item.page 
                        ? 'text-[#F56600]' 
                        : 'text-[#2B2B2B]/70'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link 
                  to={createPageUrl('Classes')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block"
                >
                  <button className="w-full bg-[#F56600] text-white py-3 rounded-full text-sm font-medium mt-2">
                    Book a Class
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#2B2B2B] text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Target className="w-6 h-6 text-[#F56600]" />
              <span className="text-lg font-bold">TrapSchool</span>
            </div>
            <div className="flex gap-8 text-sm text-white/60">
              {navItems.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="text-sm text-white/40">
              © 2024 TrapSchool. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

