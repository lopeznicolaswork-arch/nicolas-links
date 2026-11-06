import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';
import { sounds } from '../utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sounds.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-10 pb-16 border-t border-slate-200 dark:border-slate-800 space-y-6">
      <div className="max-w-3xl space-y-3">
        <blockquote className="text-sm font-medium text-slate-700 dark:text-slate-200 italic leading-relaxed">
          “En el mercado B2B nadie compra código por sí solo; las empresas compran certeza operativa, reducción de costos en su estado de resultados y un equipo capaz de responder cuando la operación apremia.”
        </blockquote>
        <p className="text-xs text-blue-700 dark:text-sky-400 font-bold font-mono">
          — Nicolás López Olivas, CEO en Nodux
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={profileData.links.noduxWeb}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playPop()}
            className="hover:text-blue-600 dark:hover:text-sky-400 text-slate-700 dark:text-slate-300 font-semibold transition-colors"
          >
            Web Oficial Nodux
          </a>
          <span>·</span>
          <a
            href={profileData.links.commercialOS}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playPop()}
            className="hover:text-purple-600 dark:hover:text-purple-400 text-slate-700 dark:text-slate-300 font-semibold transition-colors"
          >
            Commercial OS
          </a>
          <span>·</span>
          <a
            href={profileData.links.kiroDemo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playPop()}
            className="hover:text-amber-600 dark:hover:text-amber-400 text-slate-700 dark:text-slate-300 font-semibold transition-colors"
          >
            Kiro RestQube
          </a>
          <span>·</span>
          <a
            href={profileData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playPop()}
            className="hover:text-blue-600 dark:hover:text-sky-400 text-slate-700 dark:text-slate-300 font-semibold transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={profileData.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playPop()}
            className="hover:text-emerald-600 dark:hover:text-emerald-400 text-slate-700 dark:text-slate-300 font-semibold transition-colors"
          >
            WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
            © 2026 Nicolás López Olivas
          </span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer active:scale-95 shadow-sm"
            title="Volver arriba"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4 text-slate-700 dark:text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};
