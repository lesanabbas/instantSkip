import { useState } from 'react';
import { Chrome, Download, FolderOpen, FileJson, Check } from 'lucide-react';

const browsers = [
  {
    name: 'Chrome',
    icon: Chrome,
    url: 'chrome://extensions',
    steps: [
      { text: 'Open Chrome and go to chrome://extensions', icon: Chrome },
      { text: 'Enable Developer mode (top-right toggle)', icon: Check },
      { text: 'Click "Load unpacked"', icon: FolderOpen },
      { text: 'Select the extracted InstantSkip folder', icon: FolderOpen },
    ],
  },
  {
    name: 'Edge',
    icon: Chrome,
    url: 'edge://extensions',
    steps: [
      { text: 'Open Edge and go to edge://extensions', icon: Chrome },
      { text: 'Enable Developer mode (left sidebar)', icon: Check },
      { text: 'Click "Load unpacked"', icon: FolderOpen },
      { text: 'Select the extracted InstantSkip folder', icon: FolderOpen },
    ],
  },
  {
    name: 'Firefox',
    icon: Chrome,
    url: 'about:debugging',
    steps: [
      { text: 'Open Firefox and go to about:debugging', icon: Chrome },
      { text: 'Click "This Firefox" in the sidebar', icon: Check },
      { text: 'Click "Load Temporary Add-on"', icon: FileJson },
      { text: 'Select manifest.json from the folder', icon: FileJson },
    ],
  },
];

export default function Install() {
  const [activeBrowser, setActiveBrowser] = useState(0);
  const active = browsers[activeBrowser];

  return (
    <section id="install" className="relative overflow-hidden bg-neutral-900 py-24 lg:py-32">
      <div className="absolute inset-0 bg-dot opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-error-400">
            Install
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Up and running in 2 minutes
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            No store account needed. Load InstantSkip in developer mode — it takes less time
            than watching a single ad.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[400px_1fr]">
          {/* Left: Browser selector + download */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#1b1e31] p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                Step 1 — Download
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                Download the ZIP for your browser and extract it to a folder on your computer.
              </p>
              <div className="mt-4 space-y-2">
                {browsers.map((browser, i) => (
                  <button
                    key={browser.name}
                    onClick={() => setActiveBrowser(i)}
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                      activeBrowser === i
                        ? 'border-error-500/60 bg-error-500/10 text-error-300'
                        : 'border-white/10 bg-white/5 text-neutral-300 hover:border-white/20 hover:bg-white/10'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <browser.icon className="h-5 w-5" />
                      InstantSkip-{browser.name.toLowerCase()}.zip
                    </span>
                    <Download className="h-4 w-4 opacity-60" />
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-accent-200 bg-accent-50 p-5">
              <p className="text-sm text-accent-800">
                <span className="font-semibold">Note:</span> InstantSkip is not yet published to
                browser stores. The developer mode install is fully functional and takes under 2 minutes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#1b1e31] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                Safari Support
              </div>
              <p className="mt-2 text-sm text-neutral-400">
                Safari requires macOS + Xcode to convert the extension. Not buildable on Windows.
              </p>
            </div>
          </div>

          {/* Right: Install steps */}
          <div className="rounded-2xl border border-white/10 bg-[#1b1e31] p-8 shadow-sm lg:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-error-600 to-error-800 shadow-lg shadow-error-600/20">
                <active.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Install for {active.name}
                </h3>
                <p className="text-sm text-neutral-500">Step 2 — Load the Extension</p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {active.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary-200 bg-primary-50 text-sm font-bold text-primary-700">
                    {i + 1}
                  </div>
                  <div className="flex items-center gap-3 pt-1.5">
                    <step.icon className="h-5 w-5 text-neutral-400" />
                    <p className="text-sm font-medium text-neutral-200">{step.text}</p>
                  </div>
                </div>
              ))}

              <div className="mt-6 flex items-center gap-3 rounded-xl bg-success-50 border border-success-200 px-4 py-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success-500">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <p className="text-sm font-medium text-success-800">
                  Done! The InstantSkip icon appears in your toolbar. You're all set.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-neutral-100 pt-6">
              <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-success-500" />
                  Free forever
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-success-500" />
                  No account needed
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-success-500" />
                  Open source
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-success-500" />
                  Works offline
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
