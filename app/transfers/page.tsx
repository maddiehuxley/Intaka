'use client';

import ComingSoon from '@/components/ComingSoon';
import { motion } from 'framer-motion';

export default function TransfersPage() {
  return (
    <ComingSoon
      product="Transfers"
      tagline="Send money like it's 2026, not 1996."
      description="SEPA Instant in seconds. International transfers without the SWIFT lottery. Recurring payments that actually arrive on time. The boring stuff, done right."
      visual={<TransferVisual />}
      features={[
        {
          title: 'SEPA Instant included',
          body: 'Free, sub-10-second transfers across the SEPA zone. Not a premium tier. Just default.',
        },
        {
          title: 'International, transparent',
          body: 'See the exact amount the recipient gets before you confirm. No "estimated" fees, no surprise haircuts.',
        },
        {
          title: 'Schedule and recur',
          body: 'Rent, salaries, savings — set it once, forget about it. Pause or edit any time.',
        },
        {
          title: 'Crypto-aware routing',
          body: 'Pay an Intaka or P4X user instantly via internal rails. No external network fees, no waiting.',
        },
      ]}
    />
  );
}

function TransferVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-[320px] md:w-[380px]"
    >
      <div className="panel p-6">
        <div className="flex items-center justify-between mb-6">
          <p className="font-mono text-xs uppercase tracking-wider text-intaka-ink-3">
            Send money
          </p>
          <span className="text-xs text-intaka-red font-mono">● Instant</span>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs text-intaka-ink-3 mb-2 font-mono">FROM</p>
            <div className="bg-intaka-panel-2/40 rounded-lg p-3 border border-intaka-line/40">
              <p className="text-sm text-intaka-ink-2">EUR Wallet</p>
              <p className="font-mono text-sm text-intaka-ink">8,420.10 €</p>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <div className="w-10 h-10 rounded-full bg-intaka-red flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2v12M3 9l5 5 5-5"
                  stroke="#0A0204"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          <div>
            <p className="text-xs text-intaka-ink-3 mb-2 font-mono">TO</p>
            <div className="bg-intaka-panel-2/40 rounded-lg p-3 border border-intaka-line/40">
              <p className="text-sm text-intaka-ink-2">Anna K.</p>
              <p className="font-mono text-xs text-intaka-ink-3">DE89 3704 ... 1300</p>
            </div>
          </div>

          <div className="pt-4 border-t border-intaka-line/40 flex justify-between items-baseline">
            <p className="text-xs text-intaka-ink-3 font-mono">SENDING</p>
            <p className="font-display text-2xl font-bold text-intaka-ink">
              €250.<span className="text-intaka-ink-2 text-base">00</span>
            </p>
          </div>

          <div className="flex justify-between text-xs font-mono">
            <span className="text-intaka-ink-3">Fee</span>
            <span className="text-intaka-red">€0.00</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
