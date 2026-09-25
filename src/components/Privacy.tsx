import { Eye, Database, Code2, Lock } from 'lucide-react';

const privacyPoints = [
  {
    icon: Eye,
    title: 'No Data Collection',
    description: 'We don\'t collect, store, or transmit any personal data. Your browsing habits are yours alone.',
  },
  {
    icon: Database,
    title: 'No Analytics',
    description: 'No tracking pixels, no usage metrics, no crash reports sent to a server. Nothing leaves your device.',
  },
  {
    icon: Code2,
    title: 'Open Source',
    description: 'Every line of code is public. Inspect it yourself — there\'s nothing to hide when privacy is the default.',
  },
  {
    icon: Lock,
    title: 'Local Storage Only',
    description: 'All settings and stats are stored via chrome.storage.local. They never leave your browser.',
  },
];

export default function Privacy() {
  return (
    <section id="privacy" className="relative overflow-hidden bg-neutral-950 py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-20 right-1/4 h-[400px] w-[400px] rounded-full bg-primary-600/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Copy */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
              Privacy
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Your data never
              <span className="gradient-text"> leaves your device</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-400">
              InstantSkip was built privacy-first from the ground up. No external network
              requests, no analytics, no telemetry. Everything the extension knows stays on
              your machine — period.
            </p>

            <div className="mt-8 space-y-4">
              {privacyPoints.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <point.icon className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-400">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Privacy shield visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Concentric rings */}
              <div className="absolute inset-0 -m-8 animate-pulse-ring rounded-full border border-primary-500/20" />
              <div className="absolute inset-0 -m-16 animate-pulse-ring rounded-full border border-primary-500/10" style={{ animationDelay: '0.5s' }} />

              {/* Shield */}
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-primary-600/20 to-primary-900/20 backdrop-blur-sm border border-white/10">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 shadow-2xl shadow-primary-500/30">
                  <svg viewBox="0 0 24 24" className="h-16 w-16 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L4 6v6c0 5.5 3.5 10 8 12 4.5-2 8-6.5 8-12V6l-8-4z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
              </div>

              {/* Orbiting badges */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-neutral-900/90 px-3 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur-sm">
                0 external requests
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-neutral-900/90 px-3 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur-sm">
                0 bytes transmitted
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2 rounded-full border border-white/10 bg-neutral-900/90 px-3 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur-sm">
                0 tracking
              </div>
              <div className="absolute right-0 top-1/2 translate-x-12 -translate-y-1/2 rounded-full border border-white/10 bg-neutral-900/90 px-3 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur-sm">
                0 analytics
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
