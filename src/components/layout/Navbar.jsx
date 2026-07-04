import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { TrinologoWordmark } from '../ui/TrinologoLogo';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'EXPERIENCIAS', href: '/#experiencias' },
    { name: 'PROCESO', href: '/#proceso' },
    { name: 'MANIFIESTO', href: '/#manifiesto' },
    { name: 'CONTACTO', href: '/#contacto' },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <TrinologoWordmark color="white" height={32} />
        </a>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Menu Button / Mobile Toggle */}
        <div className="flex items-center">
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button className="hidden md:flex items-center space-x-2 text-xs font-semibold tracking-widest text-white hover:text-gray-300 transition-colors border border-white/20 rounded-full px-4 py-2">
            <span>MENÚ</span>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen py-6' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 px-6">
          {navLinks.map((link) => (
            
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-widest text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;