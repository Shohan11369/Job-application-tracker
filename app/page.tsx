"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, CheckCircle2, Clock, XCircle, LayoutDashboard, Calendar, BarChart2 } from 'lucide-react';
import { Navbar } from './src/components/Navbar';
import { Hero } from './src/components/Hero';
import { FeaturedJobs } from './src/components/FeaturedJobs';
import { Features } from './src/components/Features';
import { HowItWorks } from './src/components/HowItWorks';
import { CTA } from './src/components/CTA';
import { Footer } from './src/components/Footer';
import { AuthModal } from './src/components/AuthModal';

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  const [authModal, setAuthModal] = useState<{isOpen: boolean, type: 'login' | 'signup'}>({ isOpen: false, type: 'login' });

  const openAuth = (type: 'login' | 'signup') => setAuthModal({ isOpen: true, type });
  const closeAuth = () => setAuthModal({ ...authModal, isOpen: false });

  const stats = [
    { label: 'Total Applications', count: 24, icon: Briefcase, color: 'text-blue-600 bg-blue-50' },
    { label: 'Interviewing', count: 5, icon: Clock, color: 'text-amber-600 bg-amber-50' },
    { label: 'Offers Received', count: 2, icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Rejected / Archived', count: 6, icon: XCircle, color: 'text-rose-600 bg-rose-50' },
  ];

  return (
    <main className={`min-h-screen transition-colors ${isDark ? 'bg-black' : 'bg-white'}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} onOpenLogin={() => openAuth('login')} onOpenSignup={() => openAuth('signup')} />
      <AuthModal isOpen={authModal.isOpen} onClose={closeAuth} type={authModal.type} isDark={isDark} />
      <Hero isDark={isDark} />
...

      {/* Metrics Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-20 px-4 sm:px-6 lg:px-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className={`p-6 rounded-2xl border shadow-sm flex items-center justify-between ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-100'}`}>
              <div>
                <p className={`text-sm font-medium ${isDark ? 'text-white/50' : 'text-slate-500'}`}>{stat.label}</p>
                <h3 className={`text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.count}</h3>
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
        <h2 className={`text-xl font-semibold mb-8 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>Core Workflows</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-2xl border shadow-sm ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-100'}`}>
            <LayoutDashboard className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Kanban Board</h3>
            <p className={`text-sm mb-4 ${isDark ? 'text-white/60' : 'text-slate-600'}`}>Drag-and-drop to track applications.</p>
            <Link href="/kanban" className="text-indigo-600 font-semibold">Open Board &rarr;</Link>
          </div>
          <div className={`p-6 rounded-2xl border shadow-sm ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-100'}`}>
            <Calendar className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Calendar</h3>
            <p className={`text-sm mb-4 ${isDark ? 'text-white/60' : 'text-slate-600'}`}>Schedule technical rounds.</p>
            <Link href="/calendar" className="text-purple-600 font-semibold">View Schedule &rarr;</Link>
          </div>
          <div className={`p-6 rounded-2xl border shadow-sm ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-100'}`}>
            <BarChart2 className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Analytics</h3>
            <p className={`text-sm mb-4 ${isDark ? 'text-white/60' : 'text-slate-600'}`}>Analyze success rates.</p>
            <Link href="/analytics" className="text-emerald-600 font-semibold">View Metrics &rarr;</Link>
          </div>
        </div>
      </div>

      <CTA isDark={isDark} />
      <Footer isDark={isDark} />
    </main>
  );
}