'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const NAV = [
  { href: '/card', label: 'Card' },
  { href: '/wallet', label: 'Wallet' },
  { href: '/transfers', label: 'Transfers' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md border-b border-intaka-line/40 bg-intaka-dark/70"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="font-display text-2xl font-bold tracking-wide text-intaka-ink">
            INTAKA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display uppercase text-sm tracking-wider text-intaka-ink-2 hover:text-intaka-red transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://p4x.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display uppercase text-sm tracking-wider text-intaka-ink-3 hover:text-intaka-ink transition-colors flex items-center gap-1.5"
          >
            <span className="text-cyan-400">P4X</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className="opacity-60"
            >
              <path
                d="M2 8L8 2M8 2H3M8 2V7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/auth/login"
            className="font-display uppercase text-sm tracking-wider text-intaka-ink-2 hover:text-intaka-ink transition-colors"
          >
            Sign in
          </Link>
          <Link href="#waitlist" className="btn-primary text-xs px-5 py-2.5">
            Join waitlist
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-intaka-ink p-2"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden border-t border-intaka-line/40 bg-intaka-dark/95"
        >
          <nav className="flex flex-col p-6 gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display uppercase text-sm tracking-wider text-intaka-ink-2 hover:text-intaka-red"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://p4x.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display uppercase text-sm tracking-wider text-cyan-400"
            >
              P4X (sister)
            </a>
            <div className="pt-4 border-t border-intaka-line/40 flex flex-col gap-3">
              <Link href="/auth/login" onClick={() => setOpen(false)} className="btn-secondary">
                Sign in
              </Link>
              <Link href="#waitlist" onClick={() => setOpen(false)} className="btn-primary">
                Join waitlist
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
