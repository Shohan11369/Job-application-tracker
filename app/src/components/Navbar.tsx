"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, KanbanSquare, BarChart3, CalendarDays, PlusCircle, Menu, X, LogIn, UserPlus, Moon, Sun } from 'lucide-react';

const navLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Board', href: '/kanban', icon: KanbanSquare },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Calendar', href: '/calendar', icon: CalendarDays },
];

export const Navbar = ({ isDark, toggleTheme, onOpenLogin, onOpenSignup }: { isDark: boolean, toggleTheme: () => void, onOpenLogin: () => void, onOpenSignup: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`border-b sticky top-0 z-50 ${isDark ? 'bg-black border-white/10' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className={`flex items-center gap-2 font-bold text-xl ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
              <KanbanSquare size={28} />
              <span>JobTracker</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={`flex items-center gap-1 transition-colors ${isDark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-indigo-600'}`}>
                <link.icon size={18} />
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={toggleTheme} className={`p-2 rounded-lg transition-colors ${isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-900'}`}>
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={onOpenLogin} className={`font-medium flex items-center gap-1 ${isDark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-indigo-600'}`}>
              <LogIn size={18} />
              Login
            </button>
            <button onClick={onOpenSignup} className="flex items-center gap-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <UserPlus size={18} />
              Signup
            </button>
            <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              <PlusCircle size={18} />
              Add Job
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleTheme} className={`p-2 rounded-lg ${isDark ? 'text-white' : 'text-gray-600'}`}>
                {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={isDark ? 'text-white' : 'text-gray-600'}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={`md:hidden border-t p-4 space-y-4 ${isDark ? 'bg-black border-white/10' : 'bg-white border-gray-200'}`}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={`block flex items-center gap-2 py-2 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              <link.icon size={20} />
              {link.name}
            </Link>
          ))}
          <div className={`border-t pt-4 space-y-2 ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
            <button onClick={onOpenLogin} className={`flex items-center gap-2 py-2 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              <LogIn size={20} />
              Login
            </button>
            <button onClick={onOpenSignup} className={`flex items-center gap-2 py-2 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              <UserPlus size={20} />
              Signup
            </button>
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
