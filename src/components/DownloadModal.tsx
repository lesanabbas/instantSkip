import { useEffect } from 'react';
import { X, Chrome, Download, Apple } from 'lucide-react';

interface DownloadModalProps {
  open: boolean;
  onClose: () => void;
}

import DOWNLOAD_LINKS from '../config/downloadLinks';

const downloads = [
  { name: 'Chrome', icon: Chrome, file: 'InstantSkip-chrome.zip', desc: 'For Google Chrome', url: DOWNLOAD_LINKS.chrome },
  { name: 'Edge', icon: Chrome, file: 'InstantSkip-edge.zip', desc: 'For Microsoft Edge', url: DOWNLOAD_LINKS.edge },
  { name: 'Firefox', icon: Chrome, file: 'InstantSkip-firefox.zip', desc: 'For Mozilla Firefox', url: DOWNLOAD_LINKS.firefox },
];

export default function DownloadModal({ open, onClose }: DownloadModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
      window.addEventListener('keydown', onEsc);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', onEsc);
      };
    }
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg animate-fade-up rounded-3xl border border-white/10 bg-[#171a2b] p-8 shadow-2xl shadow-black/40">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg shadow-primary-500/30">
            <Download className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Download InstantSkip</h3>
            <p className="text-sm text-neutral-400">Choose your browser — free, no account needed</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {downloads.map((d) => (
            <a
              key={d.name}
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
              download={d.file}
              onClick={onClose}
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-[#1f2338] p-4 transition-all hover:border-error-500/50 hover:bg-[#262b43] hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-error-500/20">
                  <d.icon className="h-5 w-5 text-neutral-300 group-hover:text-error-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{d.name}</div>
                  <div className="text-xs text-neutral-500">{d.desc}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-primary-600">
                <span className="hidden sm:inline">{d.file}</span>
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-xs text-neutral-400">
          <Apple className="h-4 w-4 flex-shrink-0" />
          Safari users: conversion requires macOS + Xcode. See the install guide for details.
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-neutral-400">
          <span>v1.1</span>
          <span>•</span>
          <span>Open Source</span>
          <span>•</span>
          <span>No Data Collection</span>
        </div>
      </div>
    </div>
  );
}
