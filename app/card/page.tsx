'use client';

import ComingSoon from '@/components/ComingSoon';
import { motion } from 'framer-motion';

export default function CardPage() {
  return (
    <ComingSoon
      product="Card"
      tagline="A debit card that doesn't try to be a casino."
      description="Tap, swipe, spend — same as any card. Different in every way that matters: real transparency on fees, a privacy stance that isn't lip service, and a future-proof bridge to crypto rewards through P4X when the time is right."
      visual={<CardVisual />}
      features={[
        {
          title: 'Real fees, on one screen',
          body: 'No per-transaction surprises, no FX hidden in the rate. The pricing page is shorter than your morning email.',
        },
        {
          title: 'Privacy as a feature',
          body: 'We do not sell transaction data. We do not let third-party analytics ride along. Standard practice in 2027 — we just do it now.',
        },
        {
          title: 'Crypto rewards, opt-in',
          body: 'Link your P4X account and route a slice of your cashback into BTC, ETH, or stables. Off by default — your call.',
        },
        {
          title: 'Issued by a regulated partner',
          body: 'Card and accounts are issued through a licensed EU partner. Your funds are held under the same protections as a normal bank.',
        },
        {
          title: 'Built for the EU first',
          body: 'IBANs, SEPA, multi-currency from day one. UK and broader rails follow.',
        },
        {
          title: 'Apple Pay, Google Pay, day one',
          body: 'Add to your phone in under a minute. Physical card optional, virtual always available.',
        },
      ]}
    />
  );
}

function CardVisual() {
  return (
    <motion.div
      initial={{ rotateX: 20, rotateY: -10 }}
      animate={{ rotateX: 8, rotateY: -4 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      whileHover={{ rotateX: 0, rotateY: 0, scale: 1.05 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className="relative w-[360px] md:w-[440px] aspect-[1.586/1] rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(255,31,46,0.5)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-intaka-dark via-intaka-red-deep to-intaka-red" />

      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        viewBox="0 0 440 277"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <path
            key={i}
            d={`M -20 ${20 + i * 12} Q 100 ${10 + i * 14}, 220 ${50 + i * 10} T 460 ${
              30 + i * 12
            }`}
            stroke="#FF1F2E"
            strokeWidth="0.6"
            fill="none"
            opacity={0.5 - i * 0.02}
          />
        ))}
      </svg>

      <div className="absolute top-12 left-8 w-12 h-9 rounded-md bg-gradient-to-br from-yellow-300 to-yellow-600">
        <div className="absolute inset-1 grid grid-cols-3 grid-rows-2 gap-0.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-yellow-700/40 rounded-sm" />
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 text-right">
        <p className="font-display font-bold text-2xl text-intaka-ink tracking-wider leading-none">
          INTAKA
        </p>
        <p className="font-display text-[10px] text-intaka-ink/70 tracking-[0.2em] uppercase mt-1">
          Debit Card
        </p>
      </div>
    </motion.div>
  );
}
