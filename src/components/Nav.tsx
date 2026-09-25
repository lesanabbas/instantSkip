import { useEffect, useState } from 'react';

interface NavProps {
  onDownload: () => void;
}

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Install', href: '#install' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'FAQ', href: '#faq' },
];

export default function Nav({ onDownload }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-1 group">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-xl  transition-transform group-hover:scale-105">
            <img src="public/image/icon.png" alt="" srcSet="" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Instant<span className="text-primary-600">Skip</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={onDownload}
            className="rounded-xl bg-error-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-error-600/20 transition-all hover:bg-error-500 hover:shadow-xl hover:shadow-error-600/25 active:scale-95"
          >
            Get InstantSkip
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-200 hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="animate-slide-down glass border-t border-white/10 md:hidden">
          <div className="space-y-1 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-neutral-300 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onDownload();
              }}
              className="mt-2 w-full rounded-xl bg-error-600 px-5 py-3 text-sm font-semibold text-white"
            >
              Get InstantSkip
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
