"use client";

/**
 * Synthesizes a classic retro click sound using Web Audio API.
 * Mimics the classic Windows Explorer "Start Navigation" click-clack sound.
 */
export function playNavigationClick() {
  if (typeof window === "undefined") return;

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();

    // First short click (the "tick")
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(950, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.03);

    gain1.gain.setValueAtTime(0.05, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start();
    osc1.stop(ctx.currentTime + 0.03);

    // Second slightly lower tick (the "tock"), delayed by ~30ms
    const delay = 0.03;
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(800, ctx.currentTime + delay);
    osc2.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + delay + 0.03);

    gain2.gain.setValueAtTime(0.04, ctx.currentTime + delay);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.03);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(ctx.currentTime + delay);
    osc2.stop(ctx.currentTime + delay + 0.03);
  } catch (error) {
    console.warn("Could not play click sound:", error);
  }
}
