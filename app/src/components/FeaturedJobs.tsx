import Link from 'next/link';
import { Briefcase, MapPin, DollarSign } from 'lucide-react';

const jobs = [
  { id: 1, title: 'Senior Frontend Engineer', company: 'TechCorp', location: 'Remote', salary: '$120k - $150k' },
  { id: 2, title: 'Product Designer', company: 'DesignStudio', location: 'New York, NY', salary: '$100k - $130k' },
  { id: 3, title: 'Backend Developer', company: 'DataSystems', location: 'San Francisco, CA', salary: '$110k - $140k' },
];

export const FeaturedJobs = ({ isDark }: { isDark: boolean }) => (
  <section className={`py-20 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>Latest Job Openings</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className={`p-6 rounded-2xl border shadow-sm ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100'}`}>
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{job.title}</h3>
            <p className={`text-sm mb-4 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>{job.company}</p>
            <div className={`space-y-2 text-sm mb-6 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
              <div className="flex items-center gap-2"><MapPin size={16} /> {job.location}</div>
              <div className="flex items-center gap-2"><DollarSign size={16} /> {job.salary}</div>
            </div>
            <Link href={`/jobs/${job.id}`} className={`block text-center py-2 rounded-lg font-medium transition ${isDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/jobs" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          View All Jobs
        </Link>
      </div>
    </div>
  </section>
);
