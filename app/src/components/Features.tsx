import { ShieldCheck, Zap, BarChart3 } from 'lucide-react';

export const Features = ({ isDark }: { isDark: boolean }) => {
  const features = [
    { title: 'Type-Safe Data', desc: 'Robust validation with Zod ensures your job data is always clean and consistent.', icon: ShieldCheck },
    { title: 'Fast Pipeline', desc: 'Drag-and-drop Kanban board designed for speed and clarity.', icon: Zap },
    { title: 'Insightful Analytics', desc: 'Visualize your progress with automated conversion and success metrics.', icon: BarChart3 },
  ];
  return (
    <section className={`py-20 ${isDark ? 'bg-black' : 'bg-stone-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-black'}`}>Built for Modern Job Hunters</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className={`p-6 border rounded-2xl hover:shadow-lg transition ${isDark ? 'border-white/10' : 'border-black/10'}`}>
              <f.icon className="w-10 h-10 text-indigo-500 mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>{f.title}</h3>
              <p className={isDark ? 'text-white/70' : 'text-black/70'}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
