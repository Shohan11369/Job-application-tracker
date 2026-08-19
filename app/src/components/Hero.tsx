import React from 'react';
import Link from 'next/link';

export const Hero = ({ isDark }: { isDark: boolean }) => {
  return (
    <section className={`py-20 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className={`text-5xl font-extrabold tracking-tight leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Supercharge Your <br />
            <span className="text-indigo-500">Career Pipeline</span> & Job Search
          </h1>
          <p className={`mt-6 text-xl ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
            Intelligent pipeline management, Zod validation safety, and automated tracking to keep your job hunt organized and stress-free.
          </p>
          <div className="mt-10 flex gap-4">
            <Link href="/add-job" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Get Started
            </Link>
            <Link href="/kanban" className={`px-8 py-3 rounded-lg font-semibold transition-colors border ${isDark ? 'bg-black text-white border-white/20 hover:bg-white/10' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}>
              Explore Kanban Board
            </Link>
          </div>
        </div>
        
        <div className={`p-6 rounded-2xl shadow-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100'}`}>
          <div className={`h-64 rounded-xl flex items-center justify-center font-semibold text-lg ${isDark ? 'bg-indigo-900/20 text-indigo-400' : 'bg-indigo-50 text-indigo-300'}`}>
            [ Visual Application Mockup ]
          </div>
          <div className="mt-6 space-y-4">
            <div className={`flex justify-between items-center p-3 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
              <span className={`text-sm font-medium ${isDark ? 'text-white/70' : 'text-gray-700'}`}>Active Applications</span>
              <span className="text-sm font-bold text-indigo-500">12</span>
            </div>
            <div className={`flex justify-between items-center p-3 rounded-lg ${isDark ? 'bg-black/50' : 'bg-gray-50'}`}>
              <span className={`text-sm font-medium ${isDark ? 'text-white/70' : 'text-gray-700'}`}>Interviews Scheduled</span>
              <span className="text-sm font-bold text-indigo-500">3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
