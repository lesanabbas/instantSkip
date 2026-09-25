import { useEffect, useState } from 'react';
import { Zap, ShieldCheck, Gauge, Volume2, VolumeX } from 'lucide-react';

interface HeroProps {
  onDownload: () => void;
}

function useCountUp(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (startTime === null) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

export default function Hero({ onDownload }: HeroProps) {
  const [animate, setAnimate] = useState(false);
  const [adPhase, setAdPhase] = useState<'countdown' | 'skippable' | 'done'>('countdown');

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (adPhase === 'countdown') {
      const t = setTimeout(() => setAdPhase('skippable'), 3000);
      return () => clearTimeout(t);
    }
    if (adPhase === 'skippable') {
      const t = setTimeout(() => {
        setAdPhase('done');
        setTimeout(() => setAdPhase('countdown'), 2000);
      }, 800);
      return () => clearTimeout(t);
    }
  }, [adPhase]);

  const stats = [
    { label: 'Ads Skipped', target: 1284765, suffix: '' },
    { label: 'Hours Saved', target: 8942, suffix: '' },
    { label: 'Active Users', target: 56000, suffix: '+' },
  ];

  return (
    <section id="top" className="h-screen relative overflow-hidden bg-neutral-950 pt-32 pb-20 lg:pt-40 lg:pb-32" style={{ backgroundImage: 'radial-gradient(circle at 18% 0%, rgba(255, 49, 64, 0.12), transparent 35%), radial-gradient(circle at 80% 30%, rgba(255, 138, 61, 0.10), transparent 32%)' }}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-950" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary-600/20 blur-[120px]" />
      <div className="absolute top-20 right-10 h-[300px] w-[300px] rounded-full bg-primary-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Copy */}
          <div className={`text-center lg:text-left ${animate ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-success-400" />
              Safe for corporate laptops
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
              Skip YouTube ads
              <br />
              <span className="gradient-text">the instant they can</span>
              <br />
              be skipped.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-400 lg:mx-0">
              InstantSkip clicks the skip button the millisecond it becomes available — and
              fast-forwards the ad at 16x during the countdown. No network interception, no
              tracking, just a button click.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <button
                onClick={onDownload}
                className="group inline-flex items-center gap-2 rounded-xl bg-error-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-error-600/30 transition-all hover:bg-error-500 hover:shadow-2xl hover:shadow-error-600/40 active:scale-95"
              >
                <Zap className="h-5 w-5 transition-transform group-hover:scale-110" />
                Download Free
              </button>
            </div>

            
          </div>

          {/* Right: Animated demo */}
          <div className={`relative ${animate ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <YouTubeDemo adPhase={adPhase} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCounter({ target, suffix, label, start }: { target: number; suffix: string; label: string; start: boolean }) {
  const value = useCountUp(target, 2000, start);
  return (
    <div className="text-center lg:text-left">
      <div className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
        {value.toLocaleString()}{suffix}
      </div>
      <div className="mt-1 text-xs text-neutral-500 sm:text-sm">{label}</div>
    </div>
  );
}

function YouTubeDemo({ adPhase }: { adPhase: 'countdown' | 'skippable' | 'done' }) {
  const speed = adPhase === 'countdown' ? '16x' : adPhase === 'skippable' ? '1x' : 'Done';
  const muted = adPhase === 'countdown';

  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-600/20 to-accent-500/10 blur-2xl" />

      {/* Browser window */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#151827] shadow-2xl shadow-black/40">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-neutral-800/80 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-error-500" />
            <div className="h-3 w-3 rounded-full bg-warning-500" />
            <div className="h-3 w-3 rounded-full bg-success-500" />
          </div>
          <div className="mx-auto flex items-center gap-2 rounded-md bg-neutral-700/60 px-3 py-1 text-xs text-neutral-400">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            youtube.com
          </div>
        </div>

        {/* Video area */}
        <div className="relative aspect-video bg-[#202338]">
          {/* Fake ad content */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2a2e46] to-[#10121e]">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white/40" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <p className="mt-3 text-xs font-medium text-white/40">Advertisement</p>
            </div>
          </div>

          {/* Overlay info badges */}
          <div className="absolute left-3 top-3 flex items-center gap-2">
            <div className={`flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold transition-all ${muted ? 'bg-error-500/90 text-white' : 'bg-black/70 text-white'}`}>
              {muted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
              {muted ? 'Muted' : 'Audio'}
            </div>
            <div className={`flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold transition-all ${adPhase === 'countdown' ? 'bg-primary-500/90 text-white' : 'bg-black/70 text-white'}`}>
              <Gauge className="h-3 w-3" />
              {speed}
            </div>
          </div>

          {/* Skip button */}
          <div className="absolute bottom-4 right-4">
            {adPhase === 'countdown' && (
              <div className="animate-fade-in rounded-lg border border-white/20 bg-black/60 px-4 py-2 text-sm font-medium text-white/60 backdrop-blur-sm">
                Skip in 5...
              </div>
            )}
            {adPhase === 'skippable' && (
              <button className="animate-skip-pulse rounded-lg border border-white/30 bg-white/95 px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-lg transition-all hover:bg-white">
                <span className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary-600" />
                  Skip Ad
                </span>
              </button>
            )}
            {adPhase === 'done' && (
              <div className="animate-fade-in flex items-center gap-2 rounded-lg bg-success-500/90 px-4 py-2.5 text-sm font-semibold text-white shadow-lg">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Skipped!
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <div
              className={`h-full transition-all duration-700 ${adPhase === 'countdown' ? 'w-3/4 bg-primary-500' : adPhase === 'skippable' ? 'w-full bg-accent-500' : 'w-full bg-success-500'}`}
            />
          </div>
        </div>

        {/* Extension badge */}
        <div className="flex items-center justify-between border-t border-white/10 bg-neutral-800/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="relative flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-primary-500 to-primary-700">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 4 15 12 5 20 5 4" fill="currentColor" />
              </svg>
              {adPhase === 'skippable' && (
                <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-success-400 opacity-75" />
                  <span className="h-2.5 w-2.5 rounded-full bg-success-500" />
                </span>
              )}
            </div>
            <span className="text-xs font-medium text-neutral-400">InstantSkip Active</span>
          </div>
          <div className="text-xs text-neutral-500">
            {adPhase === 'countdown' ? 'Fast-forwarding...' : adPhase === 'skippable' ? 'Clicking skip...' : 'Ad skipped'}
          </div>
        </div>
      </div>
    </div>
  );
}
