import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { sounds } from '../../utils/sound';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  const handleClick = () => {
    sounds.playSwitch();
    onToggle();
  };

  return (
    <button
      onClick={handleClick}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className="relative p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-300/80 dark:border-slate-700 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>
    </button>
  );
};
