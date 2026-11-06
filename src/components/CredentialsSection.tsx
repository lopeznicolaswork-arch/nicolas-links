import React from 'react';
import { Award } from 'lucide-react';
import { credentialsData } from '../data/credentials';

export const CredentialsSection: React.FC = () => {
  const getBadgeStyle = (theme: string) => {
    switch (theme) {
      case 'rose':
        return 'bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-700/60';
      case 'amber':
        return 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-700/60';
      case 'emerald':
        return 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/60';
      case 'sky':
        return 'bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-700/60';
      case 'cyan':
        return 'bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700/60';
      case 'teal':
      default:
        return 'bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-700/60';
    }
  };

  return (
    <section id="formacion" className="py-6 sm:py-8 space-y-6 border-t border-slate-200 dark:border-slate-800">
      
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          Becas y credenciales internacionales
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          Programas de mérito académico, finanzas operativas y consultoría estratégica internacional.
        </p>
      </div>

      {/* Grid of 6 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {credentialsData.map((item) => (
          <div
            key={item.id}
            className="contrast-card p-5 flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getBadgeStyle(
                    item.themeColor
                  )}`}
                >
                  {item.badge}
                </span>
                <span className="font-mono text-[10px] font-bold text-slate-500 dark:text-slate-400">
                  {item.yearOrLocation}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
                <span>{item.title}</span>
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
