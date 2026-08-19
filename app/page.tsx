import React from 'react';
import Link from 'next/link';
import { Briefcase, CheckCircle2, Clock, XCircle, LayoutDashboard, Calendar, BarChart2 } from 'lucide-react';
import { Navbar } from './src/components/Navbar';
import { Hero } from './src/components/Hero';
import { FeaturedJobs } from './src/components/FeaturedJobs';
import { Features } from './src/components/Features';
import { HowItWorks } from './src/components/HowItWorks';
import { CTA } from './src/components/CTA';
import { Footer } from './src/components/Footer';

export default function HomePage() {
  // Mock metrics summary for initial home dashboard view
  const stats = [
    { label: 'Total Applications', count: 24, icon: Briefcase, color: 'text-blue-600 bg-blue-50' },
    { label: 'Interviewing', count: 5, icon: Clock, color: 'text-amber-600 bg-amber-50' },
    { label: 'Offers Received', count: 2, icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Rejected / Archived', count: 6, icon: XCircle, color: 'text-rose-600 bg-rose-50' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedJobs />
      <Features />
      <HowItWorks />
      
      {/* Metrics Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-20 px-4 sm:px-6 lg:px-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <h3 className="text-3xl font-bold text-slate-900 mt-1">{stat.count}</h3>
              </div>
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Modules Quick Access Grid */}
      <div className="max-w-7xl mx-auto pb-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-8 text-center">Core Workflows</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <LayoutDashboard className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Kanban Board</h3>
            <p className="text-sm text-slate-600 mb-4">Drag-and-drop to track applications.</p>
            <Link href="/kanban" className="text-indigo-600 font-semibold">Open Board &rarr;</Link>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <Calendar className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Calendar</h3>
            <p className="text-sm text-slate-600 mb-4">Schedule technical rounds.</p>
            <Link href="/calendar" className="text-purple-600 font-semibold">View Schedule &rarr;</Link>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <BarChart2 className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p className="text-sm text-slate-600 mb-4">Analyze success rates.</p>
            <Link href="/analytics" className="text-emerald-600 font-semibold">View Metrics &rarr;</Link>
          </div>
        </div>
      </div>
      
      <CTA />
      <Footer />
    </main>
  );
}