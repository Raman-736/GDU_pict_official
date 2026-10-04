// Tiny 8-bit sound effects synthesised with WebAudio - no audio files.
// Off by default; the navbar toggle turns them on and remembers the choice.

const KEY = "gdu-sfx";
let ctx = null;
let enabled = false;

try {
  enabled = localStorage.getItem(KEY) === "on";
} catch {
  enabled = false;
}

function audio() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function tone(freqs, { type = "square", step = 0.05, gain = 0.04 } = {}) {
  if (!enabled) return;
  const ac = audio();
  const t0 = ac.currentTime;
  const osc = ac.createOscillator();
  const amp = ac.createGain();
  osc.type = type;
  freqs.forEach((f, i) => osc.frequency.setValueAtTime(f, t0 + i * step));
  amp.gain.setValueAtTime(gain, t0);
  amp.gain.exponentialRampToValueAtTime(0.0001, t0 + freqs.length * step + 0.04);
  osc.connect(amp).connect(ac.destination);
  osc.start(t0);
  osc.stop(t0 + freqs.length * step + 0.05);
}

export const sfx = {
  get enabled() {
    return enabled;
  },
  set(on) {
    enabled = on;
    try {
      localStorage.setItem(KEY, on ? "on" : "off");
    } catch {
      /* storage unavailable - keep in memory only */
    }
    if (on) tone([660, 990], { step: 0.06 });
  },
  hover: () => tone([1320], { step: 0.025, gain: 0.015 }),
  click: () => tone([988, 1319], { step: 0.07, gain: 0.035 }), // coin
  start: () => tone([523, 659, 784, 1047], { step: 0.08, gain: 0.04 }),
};
