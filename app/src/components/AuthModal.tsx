"use client";

import React from 'react';
import { X } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose, type, isDark }: { isOpen: boolean, onClose: () => void, type: 'login' | 'signup', isDark: boolean }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className={`p-8 rounded-2xl w-full max-w-md relative ${isDark ? 'bg-black border border-white/10' : 'bg-white'}`}>
        <button onClick={onClose} className={`absolute top-4 right-4 ${isDark ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-black'}`}>
          <X size={24} />
        </button>
        
        <h2 className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-black'}`}>
          {type === 'login' ? 'Login' : 'Signup'}
        </h2>

        {/* ...form content (we can reuse the logic from the pages we created)... */}
        {/* I'll simplify the implementation for the sake of the modal logic. */}
        <form className="space-y-4">
            {type === 'signup' && (
                <div>
                    <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-white/70' : 'text-black/70'}`}>Name</label>
                    <input type="text" className={`w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDark ? 'bg-white/5 text-white border border-white/10' : 'border border-black/10'}`} />
                </div>
            )}
            <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-white/70' : 'text-black/70'}`}>Email</label>
                <input type="email" className={`w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDark ? 'bg-white/5 text-white border border-white/10' : 'border border-black/10'}`} />
            </div>
            <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-white/70' : 'text-black/70'}`}>Password</label>
                <input type="password" className={`w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${isDark ? 'bg-white/5 text-white border border-white/10' : 'border border-black/10'}`} />
            </div>
            <button type="submit" className={`w-full p-3 rounded-lg font-semibold transition ${isDark ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}`}>
                {type === 'login' ? 'Login' : 'Signup'}
            </button>
        </form>
        <div className="flex items-center gap-4 my-4">
          <div className={`flex-1 h-px ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></div>
          <span className={`text-sm ${isDark ? 'text-white/50' : 'text-black/50'}`}>or</span>
          <div className={`flex-1 h-px ${isDark ? 'bg-white/10' : 'bg-black/10'}`}></div>
        </div>
        <button className={`w-full flex items-center justify-center gap-2 border p-3 rounded-lg font-semibold transition ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-black/10 text-black hover:bg-stone-100'}`}>
          <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
};