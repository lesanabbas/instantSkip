import { useState } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Install from '@/components/Install';
import Privacy from '@/components/Privacy';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import DownloadModal from '@/components/DownloadModal';

export default function App() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950">
      <Nav onDownload={() => setDownloadOpen(true)} />
      <main>
        <Hero onDownload={() => setDownloadOpen(true)} />
        <Features />
        <Install />
        <Privacy />
        <FAQ />
      </main>
      <Footer onDownload={() => setDownloadOpen(true)} />
      <DownloadModal open={downloadOpen} onClose={() => setDownloadOpen(false)} />
    </div>
  );
}
