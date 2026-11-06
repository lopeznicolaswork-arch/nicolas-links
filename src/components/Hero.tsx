import React, { useState } from 'react';
import { ExternalLink, Check, Copy, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';
import { metricsData } from '../data/metrics';
import { fireConfetti } from '../utils/confetti';
import { sounds } from '../utils/sound';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    sounds.playPop();
    fireConfetti(0.5, 0.3);
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-6 sm:pt-10 pb-4">
      
      {/* 12-Column Responsive Widescreen Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column (7 cols on lg, full width on mobile/tablet) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Directorial Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-slate-900 dark:bg-slate-800 text-white font-extrabold tracking-wider uppercase border border-slate-700 font-mono text-[11px] shadow-sm">
              CEO & Founder · NODUX
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 font-extrabold tracking-wider uppercase border border-blue-300 dark:border-blue-700/60 font-mono text-[11px]">
              Preventa Técnica B2B & Negociación
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-extrabold tracking-wider uppercase border border-emerald-300 dark:border-emerald-700/60 font-mono text-[11px] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Business-Tech Translator
            </span>
          </div>

          {/* Heading & Mission */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
              Nicolás López Olivas
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              Dirijo la estrategia comercial, preventa consultiva y arquitectura de negocio en <strong className="text-slate-900 dark:text-white font-bold">Nodux</strong>. Especializado en diagnosticar dolores operativos en empresas B2B, estructurar casos de negocio rentables (ROI/TCO y estados de resultados P&L) y liderar escuadras de ingeniería para desplegar software en producción.
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
              Ingeniería Industrial en <strong className="text-slate-900 dark:text-white">UTP (7.° ciclo, Tercio Superior)</strong> y Becario 100% Mérito en <strong className="text-slate-900 dark:text-white">Harvard Business Publishing</strong>.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={profileData.links.noduxWeb}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playPop()}
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 transition-all inline-flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Explorar NODUX (Web Oficial)</span>
              <ArrowUpRight className="w-4 h-4 opacity-90" />
            </a>

            <a
              href={profileData.links.commercialOS}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playPop()}
              className="px-5 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs sm:text-sm font-bold shadow-lg shadow-purple-700/25 transition-all inline-flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Commercial OS (CRM B2B)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-90" />
            </a>

            <a
              href={profileData.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playPop()}
              className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm font-semibold transition-all active:scale-95 cursor-pointer shadow-sm"
            >
              Agendar Reunión
            </a>

            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playPop()}
              className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm font-semibold transition-all active:scale-95 flex items-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <button
              onClick={handleCopy}
              className="p-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-all cursor-pointer active:scale-95 shadow-sm"
              title="Copiar enlace del perfil"
              aria-label="Copiar enlace"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Right Column: Tablero Ejecutivo de Tracción (5 cols on lg, 2 cols grid) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
          {metricsData.map((metric) => (
            <div
              key={metric.id}
              className="p-5 rounded-2xl bg-white dark:bg-[#111927]/90 border border-slate-200 dark:border-slate-700/80 shadow-md shadow-slate-900/5 dark:shadow-black/40 space-y-1 text-left"
            >
              <div
                className={`font-mono text-2xl sm:text-3xl font-black ${
                  metric.accent === 'blue'
                    ? 'text-blue-600 dark:text-sky-400'
                    : metric.accent === 'amber'
                    ? 'text-amber-600 dark:text-amber-400'
                    : metric.accent === 'emerald'
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-purple-600 dark:text-purple-400'
                }`}
              >
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
