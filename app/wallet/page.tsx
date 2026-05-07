'use client';

import ComingSoon from '@/components/ComingSoon';
import { motion } from 'framer-motion';

export default function WalletPage() {
  return (
    <ComingSoon
      product="Wallet"
      tagline="One account. Multiple currencies. None of the friction."
      description="Hold EUR, USD, GBP, and CZK side by side. Move between them at the real rate, not the bank rate. Send and receive on local rails — IBAN in EU, sort code in UK, ACH in US — without juggling apps."
      visual={<WalletVisual />}
      features={[
        {
          title: 'Real-rate FX',
          body: 'Mid-market exchange rates with one transparent fee. No spread games hidden in the conversion.',
        },
        {
          title: 'Multi-currency by default',
          body: 'Hold balances in EUR, USD, GBP, CZK. More currencies as the BaaS partner expands.',
        },
        {
          title: 'Local rails, native',
          body: 'EUR via SEPA Instant. GBP via Faster Payments. USD via ACH and wire. CZK domestic.',
        },
        {
          title: 'P4X bridge',
          body: 'Link your P4X exchange account and move between fiat and crypto without leaving the app.',
        },
      ]}
    />
  );
}

function WalletVisual() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-[320px] md:w-[400px]"
    >
      <div className="panel p-6 space-y-3">
        <div className="flex justify-between items-center mb-2">
          <p className="font-mono text-xs uppercase tracking-wider text-intaka-ink-3">
            Total balance
          </p>
          <span className="text-xs text-intaka-red font-mono">● Live</span>
        </div>
        <p className="font-display text-4xl font-bold text-intaka-ink">
          €12,847.<span className="text-intaka-ink-2 text-2xl">32</span>
        </p>

        <div className="space-y-2 mt-6 pt-6 border-t border-intaka-line/40">
          {[
            { code: 'EUR', name: 'Euro', amount: '8,420.10', flag: '🇪🇺' },
            { code: 'USD', name: 'US Dollar', amount: '3,114.80', flag: '🇺🇸' },
            { code: 'GBP', name: 'Pound', amount: '892.40', flag: '🇬🇧' },
            { code: 'CZK', name: 'Koruna', amount: '420.02', flag: '🇨🇿' },
          ].map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-intaka-panel-2/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{c.flag}</span>
                <div>
                  <p className="font-display font-semibold text-sm text-intaka-ink">
                    {c.code}
                  </p>
                  <p className="text-xs text-intaka-ink-3">{c.name}</p>
                </div>
              </div>
              <p className="font-mono text-sm text-intaka-ink">{c.amount}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
