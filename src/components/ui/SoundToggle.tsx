import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sounds } from '../../utils/sound';

export const SoundToggle: React.FC = () => {
  const [enabled, setEnabled] = useState(sounds.enabled);

  const handleToggle = () => {
    const nextState = sounds.toggle();
    setEnabled(nextState);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={enabled ? 'Desactivar efectos de sonido' : 'Activar efectos de sonido'}
      title={enabled ? 'Efectos de sonido: Activados' : 'Efectos de sonido: Desactivados'}
      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 border border-slate-300/80 dark:border-slate-700 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
    >
      {enabled ? (
        <Volume2 className="w-4 h-4 text-emerald-500" />
      ) : (
        <VolumeX className="w-4 h-4 text-slate-400" />
      )}
    </button>
  );
};
