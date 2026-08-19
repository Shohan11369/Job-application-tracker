import Link from 'next/link';

export const CTA = ({ isDark }: { isDark: boolean }) => (
  <section className={`py-20 ${isDark ? 'bg-black' : 'bg-stone-50'} ${isDark ? 'text-white' : 'text-black'} text-center`}>
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6">Ready to Land Your Dream Job?</h2>
      <p className={`text-xl mb-10 ${isDark ? 'text-white/70' : 'text-black/70'}`}>Join hundreds of developers tracking their success efficiently.</p>
      <Link href="/signup" className={`${isDark ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'} px-8 py-3 rounded-lg font-semibold transition`}>
        Get Started for Free
      </Link>
    </div>
  </section>
);
