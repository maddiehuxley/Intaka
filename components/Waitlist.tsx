'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { createClient } from '@/lib/supabase';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('waitlist')
        .insert({ email, source: 'intaka_landing' });

      if (error) {
        if (error.code === '23505') {
          setStatus('success');
          setMessage("You're already on the list. We'll be in touch.");
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setMessage("You're in. We'll reach out when there's something to show.");
      }
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage('Something broke. Try again in a moment.');
    }
  };

  return (
    <section
      id="waitlist"
      className="px-6 py-32 max-w-3xl mx-auto text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-intaka-red mb-4">
          // Early access
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
          Get on the list.
        </h2>
        <p className="text-lg text-intaka-ink-2 mb-10 max-w-xl mx-auto">
          We're a small team building deliberately. No mass invites, no growth
          hacks — just a list of people we want to ship to first.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            placeholder="you@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            className="input-base flex-1"
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="btn-primary whitespace-nowrap disabled:opacity-50"
          >
            {status === 'loading' ? 'Adding…' : status === 'success' ? '✓ Done' : 'Join waitlist'}
          </button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-6 text-sm ${
              status === 'error' ? 'text-red-400' : 'text-intaka-ink-2'
            }`}
          >
            {message}
          </motion.p>
        )}

        <p className="mt-8 font-mono text-xs text-intaka-ink-3 tracking-wide">
          No spam. No data sales. Unsubscribe in one click.
        </p>
      </motion.div>
    </section>
  );
}
