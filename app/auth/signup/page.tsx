'use client';

import AuthShell from '@/components/AuthShell';
import { useState } from 'react';
import { createClient } from '@/lib/supabase';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { source: 'intaka_landing' } },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // Also add to waitlist
      await supabase.from('waitlist').insert({ email, source: 'intaka_signup' });
      setSuccess(true);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <AuthShell
        title="Check your email"
        subtitle="We sent you a confirmation link."
        altLink={{ text: 'Wrong address?', href: '/auth/signup', cta: 'Try again' }}
      >
        <p className="text-sm text-intaka-ink-2 leading-relaxed">
          Click the link in your inbox to confirm your account. We'll let you know
          as soon as Intaka opens up.
        </p>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      title="Create your account"
      subtitle="Reserve your spot in the early access list."
      altLink={{
        text: 'Already have an account?',
        href: '/auth/login',
        cta: 'Sign in',
      }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-mono text-xs uppercase tracking-wider text-intaka-ink-3 block mb-2">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-base"
            placeholder="you@domain.com"
          />
        </div>

        <div>
          <label className="font-mono text-xs uppercase tracking-wider text-intaka-ink-3 block mb-2">
            Password
          </label>
          <input
            type="password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-base"
            placeholder="At least 8 characters"
          />
        </div>

        {error && (
          <p className="text-sm text-red-400 font-mono">{error}</p>
        )}

        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? 'Creating…' : 'Create account'}
        </button>
      </form>
    </AuthShell>
  );
}
