import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Intaka — Money, Off-Grid',
  description:
    'A modern, transparent fintech alternative. Cards, transfers, and crypto rewards — built by people tired of megacorp banking.',
  metadataBase: new URL('https://intaka.com'),
  openGraph: {
    title: 'Intaka — Money, Off-Grid',
    description:
      'A modern, transparent fintech alternative. Cards, transfers, and crypto rewards.',
    type: 'website',
  },
  icons: {
    icon: '/logos/intaka-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
