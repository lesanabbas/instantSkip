import { Zap } from 'lucide-react';

export default function Footer({ onDownload }: { onDownload: () => void }) {
  return (
    <footer className="relative overflow-hidden bg-neutral-950">
      {/* CTA banner */}
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary-600/20 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Stop watching ads.
            <span className="gradient-text"> Start watching videos.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-400">
            Join 56,000+ people who never touch the skip button again.
          </p>
          <button
            onClick={onDownload}
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary-600/30 transition-all hover:bg-primary-500 hover:shadow-2xl hover:shadow-primary-600/40 active:scale-95"
          >
            <Zap className="h-5 w-5 transition-transform group-hover:scale-110" />
            Download InstantSkip — Free
          </button>
        </div>
      </div>

      {/* Footer links */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl">
                <img src="public/image/icon.png" alt="" srcSet="" />
              </div>
              <span className="text-base font-bold text-white">
                Instant<span className="text-primary-400">Skip</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500">
              The safest way to skip YouTube ads. DOM-only, network-invisible, privacy-first.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-4 space-y-2.5">
              <li><a href="#features" className="text-sm text-neutral-400 transition-colors hover:text-white">Features</a></li>
              <li><a href="#install" className="text-sm text-neutral-400 transition-colors hover:text-white">Install Guide</a></li>
              <li><a href="#faq" className="text-sm text-neutral-400 transition-colors hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Browsers</h4>
            <ul className="mt-4 space-y-2.5">
              <li className="text-sm text-neutral-400">Google Chrome</li>
              <li className="text-sm text-neutral-400">Microsoft Edge</li>
              <li className="text-sm text-neutral-400">Mozilla Firefox</li>
              <li className="text-sm text-neutral-400">Safari (via Xcode)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Version</h4>
            <ul className="mt-4 space-y-2.5">
              <li className="text-sm text-neutral-400">v1.1 (Current)</li>
              <li className="text-sm text-neutral-400">Time Saved Counter</li>
              <li className="text-sm text-neutral-400">Channel Whitelist</li>
              <li className="text-sm text-neutral-400">Badge Icon</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-neutral-500">
            © 2026 InstantSkip. Open source. No data collected.
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span className="flex h-2 w-2 rounded-full bg-success-500" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
