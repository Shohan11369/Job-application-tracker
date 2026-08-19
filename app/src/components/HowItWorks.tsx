export const HowItWorks = ({ isDark }: { isDark: boolean }) => {
  const steps = [
    { num: '01', title: 'Add Job', desc: 'Enter details of the job application.' },
    { num: '02', title: 'Track Status', desc: 'Move it across the Kanban board.' },
    { num: '03', title: 'Analyze', desc: 'Monitor your success and interviews.' },
  ];
  return (
    <section className={`py-20 ${isDark ? 'bg-black' : 'bg-stone-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl font-bold mb-12 ${isDark ? 'text-white' : 'text-black'}`}>How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i}>
              <div className={`text-4xl font-extrabold mb-4 ${isDark ? 'text-white/20' : 'text-black/20'}`}>{s.num}</div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{s.title}</h3>
              <p className={isDark ? 'text-white/70' : 'text-black/70'}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
