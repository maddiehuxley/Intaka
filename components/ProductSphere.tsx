'use client';

import { motion } from 'framer-motion';

const SPHERE = [
  {
    name: 'Intaka',
    role: 'Fintech',
    tagline: 'Cards, transfers, accounts',
    color: '#FF1F2E',
    glow: 'rgba(255, 31, 46, 0.3)',
    href: '/',
    active: true,
  },
  {
    name: 'P4X',
    role: 'Exchange',
    tagline: 'Full-reserve crypto, transparent',
    color: '#00CFFF',
    glow: 'rgba(0, 207, 255, 0.3)',
    href: 'https://p4x.io',
    external: true,
  },
  {
    name: 'Paragram',
    role: 'Messaging',
    tagline: 'Self-hosted, encrypted',
    color: '#A78BFA',
    glow: 'rgba(167, 139, 250, 0.3)',
    href: 'https://paragram.app',
    external: true,
  },
  {
    name: 'Commerce',
    role: 'Marketplace',
    tagline: 'EU-first, asset-light',
    color: '#34D399',
    glow: 'rgba(52, 211, 153, 0.3)',
    href: 'https://paracord.com/commerce',
    external: true,
  },
];

export default function ProductSphere() {
  return (
    <section className="px-6 py-24 bg-intaka-panel/30 border-y border-intaka-line/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-intaka-red mb-4">
            // The Paracord Sphere
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            One ecosystem. Loosely held, tightly aligned.
          </h2>
          <p className="text-lg text-intaka-ink-2 leading-relaxed">
            Intaka isn't a standalone bet. It's part of a coordinated set of tools
            — each one solving a specific failure of the mainstream stack, each
            one designed to work with the others when you want it to.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SPHERE.map((node, i) => {
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`panel p-6 h-full transition-all relative overflow-hidden ${
                  node.active ? 'border-intaka-red/40' : ''
                }`}
                style={{
                  boxShadow: node.active
                    ? `0 0 40px -10px ${node.glow}`
                    : undefined,
                }}
              >
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-30"
                  style={{ background: node.color }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <p
                      className="font-display text-2xl font-bold tracking-wide"
                      style={{ color: node.color }}
                    >
                      {node.name}
                    </p>
                    {node.active && (
                      <span className="font-mono text-[10px] tracking-wider text-intaka-red uppercase px-2 py-1 rounded border border-intaka-red/30 bg-intaka-red/5">
                        You are here
                      </span>
                    )}
                  </div>

                  <p className="font-mono text-xs uppercase tracking-wider text-intaka-ink-3 mb-2">
                    {node.role}
                  </p>
                  <p className="text-sm text-intaka-ink-2 leading-relaxed">
                    {node.tagline}
                  </p>
                </div>
              </motion.div>
            );

            return node.external ? (
              <a
                key={node.name}
                href={node.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {Card}
              </a>
            ) : (
              <div key={node.name}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
