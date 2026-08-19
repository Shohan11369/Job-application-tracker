import { ShieldCheck, Zap, BarChart3 } from 'lucide-react';

export const Features = () => {
  const features = [
    { title: 'Type-Safe Data', desc: 'Robust validation with Zod ensures your job data is always clean and consistent.', icon: ShieldCheck },
    { title: 'Fast Pipeline', desc: 'Drag-and-drop Kanban board designed for speed and clarity.', icon: Zap },
    { title: 'Insightful Analytics', desc: 'Visualize your progress with automated conversion and success metrics.', icon: BarChart3 },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Built for Modern Job Hunters</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition">
              <f.icon className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
