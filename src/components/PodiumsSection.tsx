import React from 'react';
import { ExternalLink, Trophy, Award, Atom } from 'lucide-react';
import { podiumsData } from '../data/podiums';
import { fireTrophyConfetti } from '../utils/confetti';
import { sounds } from '../utils/sound';

export const PodiumsSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'aws-kiro':
        return <Trophy className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />;
      case 'hp-impact':
        return <Award className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />;
      case 'ibm-quantum':
      default:
        return <Atom className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  const getTagStyle = (color: string) => {
    switch (color) {
      case 'amber':
        return 'bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border-amber-300 dark:border-amber-700/60';
      case 'blue':
        return 'bg-blue-100 dark:bg-sky-950/80 text-blue-900 dark:text-sky-300 border-blue-300 dark:border-sky-700/60';
      case 'indigo':
      default:
        return 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-900 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700/60';
    }
  };

  return (
    <section id="podios" className="py-6 sm:py-8 space-y-6 border-t border-slate-200 dark:border-slate-800">
      
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          Competiciones y hackathons técnicas
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          Validación de arquitectura cloud, modelos de lenguaje y computación cuántica bajo presión de tiempo y evaluación de jurados C-Level.
        </p>
      </div>

      {/* Grid of 3 Cards with Marked Contrast */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {podiumsData.map((item) => (
          <div
            key={item.id}
            className="contrast-card p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-[11px] font-bold border flex items-center gap-1.5 ${getTagStyle(
                    item.badgeColor
                  )}`}
                >
                  {getIcon(item.id)}
                  <span>{item.place}</span>
                </span>
                <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                  {item.date}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between text-xs">
              <span className="font-mono text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                {item.tech}
              </span>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    sounds.playPop();
                    fireTrophyConfetti();
                  }}
                  className="font-bold text-blue-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                >
                  <span>Abrir demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  {item.footerNote}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
