import { Menu, Settings, Sun } from 'lucide-react';

export function TopBar({ title, showSettings = false, showSun = false }: { title: string, showSettings?: boolean, showSun?: boolean }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0px_20px_40px_rgba(62,43,20,0.06)]">
      <div className="flex items-center gap-4">
        <button className="text-emerald-800 dark:text-emerald-400 cursor-pointer hover:bg-emerald-50/50 p-2 rounded-full transition-colors">
          <Menu size={24} />
        </button>
      </div>
      <h1 className="font-headline tracking-widest font-bold text-lg text-emerald-900 dark:text-emerald-50 text-center flex-1">
        {title}
      </h1>
      <div className="flex items-center gap-2">
        {showSun && (
          <div className="flex items-center gap-2 bg-secondary-container/50 px-3 py-1 rounded-full">
            <Sun size={16} className="text-secondary" />
            <span className="text-xs font-bold text-on-secondary-container">124</span>
          </div>
        )}
        {showSettings && (
          <button className="hover:bg-emerald-50/50 transition-colors p-2 rounded-full cursor-pointer">
            <Settings size={24} className="text-emerald-800" />
          </button>
        )}
        {!showSun && !showSettings && <div className="w-10"></div>}
      </div>
    </header>
  );
}
