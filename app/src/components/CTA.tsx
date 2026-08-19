import Link from 'next/link';

export const CTA = () => (
  <section className="py-20 bg-indigo-600 text-white text-center">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6">Ready to Land Your Dream Job?</h2>
      <p className="text-xl mb-10 text-indigo-100">Join hundreds of developers tracking their success efficiently.</p>
      <Link href="/signup" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
        Get Started for Free
      </Link>
    </div>
  </section>
);
