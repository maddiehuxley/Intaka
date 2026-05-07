'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative px-6 pt-20 pb-32 overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-intaka-red/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-intaka-red/30 bg-intaka-red/5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-intaka-red animate-pulse" />
          <span className="font-mono text-xs tracking-wider text-intaka-ink-2 uppercase">
            Joining the Paracord product sphere
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
        >
          <span className="text-intaka-ink">Money,</span>
          <br />
          <span className="aurora-text">off-grid.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-intaka-ink-2 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A card, a wallet, and transfers — built clean, transparent, and on your
          side. Your money, where the megacorps can't watch it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <Link href="#waitlist" className="btn-primary">
            Join the waitlist
          </Link>
          <Link href="/card" className="btn-secondary">
            See the card
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <CardMockup />
        </motion.div>
      </div>
    </section>
  );
}

function CardMockup() {
  return (
    <motion.div
      initial={{ rotateX: 20, rotateY: -10 }}
      animate={{ rotateX: 8, rotateY: -4 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      whileHover={{ rotateX: 0, rotateY: 0, scale: 1.03 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className="relative w-[340px] md:w-[420px] aspect-[1.586/1] rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(255,31,46,0.4)]"
    >
      {/* Card background — matches your card design */}
      <div className="absolute inset-0 bg-gradient-to-br from-intaka-dark via-intaka-red-deep to-intaka-red" />

      {/* Wave lines (decorative SVG matching card aesthetic) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        viewBox="0 0 420 264"
        preserveAspectRatio="none"
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <path
            key={i}
            d={`M -20 ${20 + i * 12} Q 100 ${10 + i * 14}, 200 ${50 + i * 10} T 440 ${
              30 + i * 12
            }`}
            stroke="#FF1F2E"
            strokeWidth="0.6"
            fill="none"
            opacity={0.5 - i * 0.02}
          />
        ))}
      </svg>

      {/* Chip */}
      <div className="absolute top-12 left-8 w-12 h-9 rounded-md bg-gradient-to-br from-yellow-300 to-yellow-600">
        <div className="absolute inset-1 grid grid-cols-3 grid-rows-2 gap-0.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-yellow-700/40 rounded-sm" />
          ))}
        </div>
      </div>

      {/* Wordmark */}
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
