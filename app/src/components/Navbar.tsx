"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, KanbanSquare, BarChart3, CalendarDays, PlusCircle, Menu, X, LogIn, UserPlus } from 'lucide-react';

const navLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Board', href: '/kanban', icon: KanbanSquare },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Calendar', href: '/calendar', icon: CalendarDays },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600">
              <KanbanSquare size={28} />
              <span>JobTracker</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-600 hover:text-indigo-600 flex items-center gap-1 transition-colors">
                <link.icon size={18} />
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-gray-600 hover:text-indigo-600 font-medium flex items-center gap-1">
              <LogIn size={18} />
              Login
            </Link>
            <Link href="/signup" className="flex items-center gap-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <UserPlus size={18} />
              Signup
            </Link>
            <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              <PlusCircle size={18} />
              Add Job
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="block text-gray-600 hover:text-indigo-600 flex items-center gap-2 py-2">
              <link.icon size={20} />
              {link.name}
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-4 space-y-2">
            <Link href="/login" className="flex items-center gap-2 text-gray-600 py-2">
              <LogIn size={20} />
              Login
            </Link>
            <Link href="/signup" className="flex items-center gap-2 text-gray-600 py-2">
              <UserPlus size={20} />
              Signup
            </Link>
            <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg">
              <PlusCircle size={18} />
              Add Job
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
