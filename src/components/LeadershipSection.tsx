import React from 'react';
import { BookOpen, Users, Mic2, CheckCircle2 } from 'lucide-react';
import { leadershipData } from '../data/leadership';

export const LeadershipSection: React.FC = () => {
  const getBadgeIcon = (id: string) => {
    switch (id) {
      case 'ieee-wie':
        return <BookOpen className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />;
      case 'lead-utp':
        return <Users className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />;
      case 'coneii-2027':
      default:
        return <Mic2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />;
    }
  };

  const getBadgeColors = (theme: 'pink' | 'indigo' | 'blue') => {
    switch (theme) {
      case 'pink':
        return {
          badge: 'bg-pink-100 dark:bg-pink-950/80 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-700/60',
        };
      case 'indigo':
        return {
          badge: 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/60',
        };
      case 'blue':
      default:
        return {
          badge: 'bg-blue-100 dark:bg-sky-950/80 text-blue-800 dark:text-sky-300 border-blue-200 dark:border-sky-700/60',
        };
    }
  };

  return (
    <section id="liderazgo" className="py-6 sm:py-8 space-y-6 border-t border-slate-200 dark:border-slate-800">
      
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          Liderazgo institucional y divulgación
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          Redacción científica en STEM, mentoría de equipos universitarios y ponencias magistrales en congresos nacionales.
        </p>
      </div>

      {/* Grid of 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {leadershipData.map((item) => {
          const colors = getBadgeColors(item.themeColor);
          return (
            <div
              key={item.id}
              className="contrast-card p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-bold border flex items-center gap-1.5 ${colors.badge}`}
                  >
                    {getBadgeIcon(item.id)}
                    <span>{item.badge}</span>
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400">
                    {item.subBadge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-1">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-blue-600 dark:text-sky-400 font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">{item.footerCategory}</span>
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {item.footerStatus}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
