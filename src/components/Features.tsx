import { Zap, FastForward, XCircle, Users, BarChart3, Bell, ShieldOff } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Ad Skip',
    description: 'Clicks the skip button the exact millisecond it becomes clickable. No delay, no hesitation — faster than any human reflex.',
    accent: 'from-primary-500 to-primary-700',
    glow: 'bg-primary-500/10',
  },
  {
    icon: FastForward,
    title: '16x Fast-Forward',
    description: 'During the countdown, the ad plays at 16x speed with audio muted so you barely notice it existed before it\'s gone.',
    accent: 'from-accent-500 to-accent-700',
    glow: 'bg-accent-500/10',
  },
  {
    icon: XCircle,
    title: 'Close Banner Ads',
    description: 'Auto-dismisses overlay and banner ads that appear on YouTube videos. Nothing interrupts your watching flow.',
    accent: 'from-error-500 to-error-700',
    glow: 'bg-error-500/10',
  },
  {
    icon: Users,
    title: 'Channel Whitelist',
    description: 'Whitelist creators you want to support. Ads play normally for whitelisted channels — you\'re always in control.',
    accent: 'from-success-500 to-success-700',
    glow: 'bg-success-500/10',
  },
  {
    icon: BarChart3,
    title: 'Time Saved Counter',
    description: 'Tracks lifetime ads skipped and total time saved. Watch your saved hours grow with every ad you never had to watch.',
    accent: 'from-warning-500 to-warning-700',
    glow: 'bg-warning-500/10',
  },
  {
    icon: Bell,
    title: 'Badge Icon Counter',
    description: 'See your total skip count right on the extension icon in your toolbar. A satisfying reminder of time you\'ve reclaimed.',
    accent: 'from-primary-400 to-primary-600',
    glow: 'bg-primary-400/10',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-neutral-900 py-24 lg:py-32">
      <div className="absolute inset-0 bg-dot opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-error-400">
            Features
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Everything you need to
            <span className="gradient-text"> reclaim your time</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            A complete toolkit for skipping ads safely and intelligently — without blocking a single network request.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1b1e31] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-error-500/40 hover:shadow-xl hover:shadow-black/20"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${feature.glow} blur-2xl transition-opacity duration-300 group-hover:opacity-100`} />

              <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.accent} shadow-lg`}>
                <feature.icon className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <h3 className="relative mt-5 text-lg font-bold text-white">
                {feature.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* USP banner */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success-500/20">
                  <ShieldOff className="h-6 w-6 text-success-400" />
                </div>
                <span className="rounded-full bg-success-500/15 px-3 py-1 text-xs font-semibold text-success-400">
                  Key USP
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white lg:text-3xl">
                Safe for office &amp; corporate laptops
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-400">
                Most ad-blockers intercept network requests — which corporate IT can detect and
                block. InstantSkip never touches your network traffic. It works purely through
                DOM interaction, watching the visible page and clicking the skip button exactly
                like a human would. Completely invisible to network monitoring tools.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {[
                { label: 'Network requests blocked', value: '0' },
                { label: 'DNS redirects', value: '0' },
                { label: 'Proxies used', value: '0' },
                { label: 'Data collected', value: '0' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-2xl font-bold text-success-400">{item.value}</span>
                  <span className="text-xs text-neutral-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
