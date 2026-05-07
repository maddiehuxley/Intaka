'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface Feature {
  title: string;
  body: string;
}

interface ComingSoonProps {
  product: string;
  tagline: string;
  description: string;
  features: Feature[];
  visual?: ReactNode;
}

export default function ComingSoon({
  product,
  tagline,
  description,
  features,
  visual,
}: ComingSoonProps) {
  return (
    <div className="px-6 py-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-intaka-red/30 bg-intaka-red/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-intaka-red animate-pulse" />
            <span className="font-mono text-xs tracking-wider text-intaka-ink-2 uppercase">
              Coming soon
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-bold leading-[0.95] mb-4">
            <span className="text-intaka-ink">Intaka</span>{' '}
            <span className="aurora-text">{product}</span>
          </h1>

          <p className="text-xl text-intaka-ink-2 mb-4 font-display tracking-wide">
            {tagline}
          </p>

          <p className="text-lg text-intaka-ink-2 leading-relaxed mb-8">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/#waitlist" className="btn-primary">
              Join waitlist
            </Link>
            <Link href="/" className="btn-secondary">
              ← Back home
            </Link>
          </div>
        </motion.div>

        {visual && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            {visual}
          </motion.div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="panel panel-hover p-6"
          >
            <h3 className="font-display text-xl font-semibold mb-2 text-intaka-ink">
              {f.title}
            </h3>
            <p className="text-sm text-intaka-ink-2 leading-relaxed">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
