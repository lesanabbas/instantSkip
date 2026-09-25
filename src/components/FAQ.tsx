import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Is InstantSkip an ad blocker?',
    a: 'No. Traditional ad blockers intercept and block network requests to prevent ads from loading. InstantSkip takes a completely different approach — it lets the ad load, then clicks the skip button the moment it becomes available, just like a human would. It never touches your network traffic.',
  },
  {
    q: 'Will my corporate IT department be able to detect it?',
    a: 'InstantSkip is fundamentally different from network-based ad blockers. It works purely through DOM interaction — watching the visible page and clicking buttons. It makes no external network requests, uses no proxy, and doesn\'t modify any network traffic. It\'s invisible to network monitoring tools commonly used in corporate environments.',
  },
  {
    q: 'Does it work on all YouTube ads?',
    a: 'InstantSkip works on skippable video ads (it clicks the skip button as soon as it\'s enabled) and overlay/banner ads (it dismisses them automatically). Non-skippable ads cannot be skipped by any extension — if YouTube doesn\'t provide a skip button, there\'s nothing to click.',
  },
  {
    q: 'Can I support creators I like?',
    a: 'Yes! Use the Channel Whitelist feature to add creators you want to support. When you visit a whitelisted channel, ads play normally at regular speed with full audio. You\'re always in control of which channels get ad revenue from you.',
  },
  {
    q: 'Is it really free?',
    a: 'Yes, InstantSkip is completely free and open source. There are no premium tiers, no hidden costs, and no plans to change that. Download it, use it, inspect the code, share it.',
  },
  {
    q: 'What browsers are supported?',
    a: 'Google Chrome, Microsoft Edge, and Mozilla Firefox have full support. Safari is supported but requires macOS with Xcode to convert the extension — it can\'t be built on Windows. See the Install section for step-by-step instructions for each browser.',
  },
  {
    q: 'How does the time saved counter work?',
    a: 'InstantSkip tracks how many ads it skips and calculates total time saved based on typical ad durations. This data is stored locally in your browser via chrome.storage.local and shown on the extension\'s badge icon. It never leaves your device.',
  },
  {
    q: 'Do I need a developer account or special tools?',
    a: 'No. You just download the ZIP, extract it, and load it via your browser\'s developer mode. No store account, no build tools, no coding knowledge required. It takes under 2 minutes.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-neutral-900 py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-error-400">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                open === i
                  ? 'border-error-500/30 bg-[#24283d] shadow-md shadow-black/20'
                  : 'border-white/10 bg-[#1b1e31] hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-white">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform duration-300 ${
                    open === i ? 'rotate-180 text-primary-600' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-neutral-400">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
