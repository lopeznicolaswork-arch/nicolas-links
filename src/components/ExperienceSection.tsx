import React from 'react';
import { experienceData } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="trayectoria" className="py-6 sm:py-8 space-y-6 border-t border-slate-200 dark:border-slate-800">
      
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
          Trayectoria y experiencia en campo
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          Práctica en levantamiento de procesos (BPMN), operaciones de piso en retail y negociación internacional.
        </p>
      </div>

      {/* Grid of 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {experienceData.map((item) => (
          <div
            key={item.id}
            className="contrast-card p-5 flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wide text-blue-600 dark:text-sky-400 font-mono">
                  {item.category}
                </span>
                <span className="font-mono text-xs font-black text-emerald-600 dark:text-emerald-400">
                  {item.badgeMetric}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {item.title}
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
