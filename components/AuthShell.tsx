'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';

export default function AuthShell({
  title,
  subtitle,
  children,
  altLink,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  altLink: { text: string; href: string; cta: string };
}) {
  return (
    <div className="px-6 py-20 min-h-[calc(100vh-200px)] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Link href="/" className="inline-block mb-8">
          <span className="font-display text-2xl font-bold tracking-wide aurora-text">
            INTAKA
          </span>
        </Link>

        <div className="panel p-8">
          <h1 className="font-display text-3xl font-bold mb-2">{title}</h1>
          <p className="text-sm text-intaka-ink-2 mb-8">{subtitle}</p>

          {children}

          <p className="mt-8 text-sm text-center text-intaka-ink-2">
            {altLink.text}{' '}
            <Link href={altLink.href} className="text-intaka-red hover:text-intaka-red-glow">
              {altLink.cta}
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-intaka-ink-3 font-mono">
          Pre-launch. Sign-up adds you to the waitlist.
        </p>
      </motion.div>
    </div>
  );
}
