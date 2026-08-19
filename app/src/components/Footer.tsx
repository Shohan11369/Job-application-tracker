export const Footer = ({ isDark }: { isDark: boolean }) => (
  <footer className={`py-10 text-center ${isDark ? 'bg-black border-t border-white/10 text-white/50' : 'bg-stone-50 border-t border-gray-200 text-gray-500'}`}>
    <div className="max-w-7xl mx-auto px-4">
      <p>&copy; 2026 JobTracker Inc. All rights reserved.</p>
    </div>
  </footer>
);
