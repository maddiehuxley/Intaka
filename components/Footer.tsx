import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-intaka-line/40 mt-32 bg-intaka-dark/60">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <p className="font-display text-2xl font-bold tracking-wide text-intaka-ink mb-2">
            INTAKA
          </p>
          <p className="text-sm text-intaka-ink-2 max-w-xs">
            Money, off-grid. A modern fintech alternative — part of the Paracord
            product sphere.
          </p>
        </div>

        <div>
          <p className="font-display uppercase text-xs tracking-wider text-intaka-ink-3 mb-3">
            Products
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/card" className="text-intaka-ink-2 hover:text-intaka-ink">Card</Link></li>
            <li><Link href="/wallet" className="text-intaka-ink-2 hover:text-intaka-ink">Wallet</Link></li>
            <li><Link href="/transfers" className="text-intaka-ink-2 hover:text-intaka-ink">Transfers</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-display uppercase text-xs tracking-wider text-intaka-ink-3 mb-3">
            Sphere
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://p4x.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-intaka-ink-2 hover:text-intaka-ink"
              >
                P4X — Exchange
              </a>
            </li>
            <li>
              <a
                href="https://paragram.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-intaka-ink-2 hover:text-intaka-ink"
              >
                Paragram — Messaging
              </a>
            </li>
            <li>
              <a
                href="https://paracord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-intaka-ink-2 hover:text-intaka-ink"
              >
                Paracord — Parent
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display uppercase text-xs tracking-wider text-intaka-ink-3 mb-3">
            Legal
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="text-intaka-ink-2 hover:text-intaka-ink">Privacy</Link></li>
            <li><Link href="/terms" className="text-intaka-ink-2 hover:text-intaka-ink">Terms</Link></li>
            <li><Link href="/disclosures" className="text-intaka-ink-2 hover:text-intaka-ink">Disclosures</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-intaka-line/40 px-6 py-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-xs text-intaka-ink-3">
        <p>© {new Date().getFullYear()} Paracord Commerce s.r.o. — All rights reserved.</p>
        <p className="font-mono">
          Intaka is a fintech product. Banking services provided by licensed partner institutions.
        </p>
      </div>
    </footer>
  );
}
