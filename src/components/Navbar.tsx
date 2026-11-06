import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';
import { ThemeToggle } from './ui/ThemeToggle';
import { SoundToggle } from './ui/SoundToggle';
import { sounds } from '../utils/sound';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Nodux', href: '#nodux' },
    { label: 'Podios', href: '#podios' },
    { label: 'Liderazgo', href: '#liderazgo' },
    { label: 'Formación', href: '#formacion' },
    { label: 'Trayectoria', href: '#trayectoria' },
  ];

  return (
    <header className="sticky top-0 z-50 nav-contrast transition-colors duration-250">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a
          href="#"
          onClick={() => sounds.playPop()}
          className="flex items-center gap-2.5 text-slate-900 dark:text-white font-bold text-sm tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-white shadow-sm">
            NL
          </div>
          <div>
            <span className="font-extrabold tracking-tight block leading-none text-slate-900 dark:text-white">
              Nicolás López Olivas
            </span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">
              CEO & Founder en Nodux
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => sounds.playPop()}
              className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Utilities & Action */}
        <div className="flex items-center gap-2">
          <SoundToggle />
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

          <a
            href={profileData.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playPop()}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/25 active:scale-95 cursor-pointer"
          >
            <span>Agendar Reunión</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#090d14]/95 backdrop-blur-xl px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                sounds.playPop();
                setMobileMenuOpen(false);
              }}
              className="block py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profileData.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold shadow-md shadow-blue-600/30"
          >
            Agendar Reunión (WhatsApp)
          </a>
        </div>
      )}
    </header>
  );
};
