import { Home, Leaf, Flower2, User } from 'lucide-react';

export type Tab = 'home' | 'habits' | 'collection' | 'profile';

interface BottomNavProps {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
}

export function BottomNav({ activeTab, onChange }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: Home, label: '首页' },
    { id: 'habits', icon: Leaf, label: '习惯' },
    { id: 'collection', icon: Flower2, label: '藏集' },
    { id: 'profile', icon: User, label: '我的' },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-t-[3rem] shadow-[0px_-10px_30px_rgba(62,43,20,0.04)]">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex flex-col items-center justify-center px-6 py-2 rounded-full transition-all duration-500 cursor-pointer ${
              isActive
                ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-900 dark:text-emerald-100 scale-110 active:scale-95'
                : 'text-emerald-800/50 dark:text-emerald-500/50 hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 active:scale-95'
            }`}
          >
            <Icon size={24} className="mb-1" strokeWidth={isActive ? 2.5 : 2} />
            <span className="font-body text-[10px] font-medium leading-relaxed">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
