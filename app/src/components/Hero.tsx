import React from 'react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Supercharge Your <br />
            <span className="text-indigo-600">Career Pipeline</span> & Job Search
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Intelligent pipeline management, Zod validation safety, and automated tracking to keep your job hunt organized and stress-free.
          </p>
          <div className="mt-10 flex gap-4">
            <Link href="/add-job" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Get Started
            </Link>
            <Link href="/kanban" className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Kanban Board
            </Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
          <div className="h-64 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-300 font-semibold text-lg">
            [ Visual Application Mockup ]
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Active Applications</span>
              <span className="text-sm font-bold text-indigo-600">12</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">Interviews Scheduled</span>
              <span className="text-sm font-bold text-indigo-600">3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
