import Hero from '@/components/Hero';
import Manifesto from '@/components/Manifesto';
import ProductSphere from '@/components/ProductSphere';
import Waitlist from '@/components/Waitlist';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <ProductSphere />
      <Waitlist />
    </>
  );
}
