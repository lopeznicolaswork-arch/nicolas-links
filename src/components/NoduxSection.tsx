import React, { useState } from 'react';
import { ExternalLink, Briefcase, Database, Layers, FileCheck, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { noduxTabsData } from '../data/nodux';
import { sounds } from '../utils/sound';

export const NoduxSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'crm' | 'suites' | 'portafolio' | 'consultoria'>('crm');

  const tabs = [
    { id: 'crm', label: 'Commercial OS (CRM B2B)', icon: <Briefcase className="w-3.5 h-3.5" /> },
    { id: 'suites', label: 'PhyData AI & Calidad de Datos', icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'portafolio', label: 'Plataformas Desplegadas (4)', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'consultoria', label: 'Preventa B2B & Auditoría ROI', icon: <FileCheck className="w-3.5 h-3.5" /> },
  ];

  const currentTabData = noduxTabsData.find((t) => t.id === activeTab) || noduxTabsData[3];

  const handleTabChange = (tabId: 'crm' | 'suites' | 'portafolio' | 'consultoria') => {
    sounds.playPop();
    setActiveTab(tabId);
  };

  return (
    <section id="nodux" className="py-6 sm:py-8 space-y-6 border-t border-slate-200 dark:border-slate-800">
      
      {/* Formal Corporate Container */}
      <div className="contrast-card p-6 sm:p-8 space-y-6">
        
        {/* Banner Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-700/80">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white font-black text-lg tracking-tight shadow-md shrink-0">
              NX
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">NODUX</h2>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-700/60 uppercase tracking-wider font-mono">
                  CEO & Co-Founder
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700/60 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  En Operación
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
                “Soluciones que se adaptan a ti, tecnología que transforma.” — Consultoría de operaciones, ingeniería de datos y desarrollo de software B2B en producción.
              </p>
            </div>
          </div>

          <a
            href={profileData.links.noduxWeb}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playPop()}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/30 flex items-center justify-center gap-1.5 shrink-0 transition-all active:scale-95 cursor-pointer"
          >
            <span>Portal Corporativo Nodux</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Executive Tabs Navigation */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as 'crm' | 'suites' | 'portafolio' | 'consultoria')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'bg-slate-100 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/80'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div
            className={`grid gap-4 ${
              currentTabData.platforms.length === 4
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                : currentTabData.platforms.length === 3
                ? 'grid-cols-1 md:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2'
            }`}
          >
            {currentTabData.platforms.map((platform, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between space-y-4 hover:border-blue-400 dark:hover:border-slate-600 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    {platform.badge && (
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-700/60 uppercase tracking-wide font-mono">
                        {platform.badge}
                      </span>
                    )}
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 font-mono">
                      {platform.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {platform.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {platform.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  {platform.tags && platform.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {platform.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-white dark:bg-slate-800/90 text-[10px] text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700/60 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {(platform.ctaUrl || platform.subNote) && (
                    <div className="flex items-center justify-between text-xs pt-1">
                      {platform.subNote && (
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{platform.subNote}</span>
                        </span>
                      )}
                      {platform.ctaUrl && (
                        <a
                          href={platform.ctaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => sounds.playPop()}
                          className="text-xs font-bold text-blue-600 dark:text-sky-400 hover:underline flex items-center gap-1 ml-auto shrink-0"
                        >
                          <span>{platform.ctaText || 'Abrir sistema'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
