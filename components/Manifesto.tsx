'use client';

import { motion } from 'framer-motion';

const PRINCIPLES = [
  {
    num: '01',
    title: 'Yours by default',
    body: 'Your money, your data, your terms. We hold the wallet — not the leash.',
  },
  {
    num: '02',
    title: 'Transparent stack',
    body: 'No hidden spreads, no dark-pattern fees. Pricing fits on a single screen.',
  },
  {
    num: '03',
    title: 'Built to outlast',
    body: 'Designed for the long game — not the quarterly earnings call.',
  },
  {
    num: '04',
    title: 'Connected by choice',
    body: 'Native bridges to P4X and the Paracord sphere. Use what you want, when you want.',
  },
];

export default function Manifesto() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-intaka-red mb-4">
          // Manifesto
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
          Banking shouldn't feel like a hostage situation.
        </h2>
        <p className="text-lg text-intaka-ink-2 leading-relaxed">
          Most fintech is megacorp drag dressed in app icons. Intaka is the other
          path: small team, sharp tools, no nonsense. We built the things we
          wished existed — and you can use them too.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRINCIPLES.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="panel panel-hover p-6 group"
          >
            <p className="font-mono text-xs text-intaka-red mb-4">{p.num}</p>
            <h3 className="font-display text-xl font-semibold mb-2 text-intaka-ink">
              {p.title}
            </h3>
            <p className="text-sm text-intaka-ink-2 leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
