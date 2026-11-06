import confetti from 'canvas-confetti';

export function fireConfetti(originX = 0.5, originY = 0.6) {
  try {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x: originX, y: originY },
      colors: ['#38bdf8', '#818cf8', '#c084fc', '#f472b6', '#34d399', '#fbbf24'],
      disableForReducedMotion: true,
    });
  } catch {
    // Graceful fallback
  }
}

export function fireTrophyConfetti() {
  try {
    const end = Date.now() + 600;
    const colors = ['#f59e0b', '#ec4899', '#3b82f6', '#10b981'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  } catch {
    // Graceful fallback
  }
}
