import { Sun, Droplet, Package } from 'lucide-react';

export function Home() {
  return (
    <main className="flex-1 flex flex-col relative garden-gradient pt-24 pb-32 min-h-screen">
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-container/30 organic-shape-1 -z-10 opacity-60"></div>
      <div className="absolute bottom-40 right-[-20px] w-80 h-80 bg-secondary-container/30 organic-shape-1 -z-10 opacity-50 rotate-45"></div>

      <div className="px-8 mt-4">
        <div className="glass-panel p-6 rounded-lg shadow-sm flex flex-col gap-3 border border-white/20">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs font-medium text-primary opacity-70 uppercase tracking-widest">当前状态</p>
              <h2 className="text-2xl font-bold font-headline text-on-surface">含苞待放</h2>
            </div>
            <span className="text-xs font-bold text-primary bg-primary-container px-3 py-1 rounded-full">65%</span>
          </div>
          <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full w-[65%] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]"></div>
          </div>
          <p className="text-[10px] text-on-surface-variant font-medium tracking-tight">还需要 3 次浇水即可看到第一朵花绽放</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative px-6 mt-8">
        <div className="absolute top-4 right-8 flex flex-col items-center">
          <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md mb-1">
            <Sun size={24} className="text-secondary" />
          </div>
          <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">采集阳光</span>
        </div>

        <div className="relative w-full max-w-[320px] aspect-square flex flex-col items-center justify-end">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full opacity-40"></div>
            <div className="absolute top-20 right-5 w-3 h-3 bg-white rounded-full opacity-20"></div>
            <div className="absolute bottom-40 left-5 w-2 h-2 bg-white rounded-full opacity-30"></div>
          </div>

          <div className="w-48 h-64 mb-[-40px] z-10">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj1swL0cYaD2rMJ7PgsePY6u8xP5gKu7D2Ku574wq3mF8oqsl3ZLkGpGUGsmrj7VAuCEEghM9qVgZGrZh5DCwCRpTluOTKCeBEAueEpsmWIHDTt5XzKv1qlx31dzJOg6rPIDutoekcU2atQgtzGC5heBNqMaXjk8yxStIc8i20aiyF_rdpfXfdZSypt8wV4rICo4eCRxGahAUSKXrbRyQxON799B02oJMFbg3ImUSth5O0Xa8D9AEfYOzMn8ZYekuKWu-fM9PIjrE"
              alt="Plant bud"
              className="w-full h-full object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-40 h-12 bg-secondary rounded-b-lg shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
          </div>
          <div className="w-48 h-6 bg-black/5 blur-xl rounded-full mt-2"></div>
        </div>
      </div>

      <div className="fixed bottom-32 left-0 w-full flex justify-between px-10 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center group">
          <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0px_10px_30px_rgba(0,0,0,0.1)] active:scale-90 transition-transform cursor-pointer">
            <Droplet size={32} className="text-blue-500" fill="currentColor" />
            <div className="absolute -top-1 -right-1 bg-error-container text-on-error-container text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">5</div>
          </div>
          <span className="mt-2 text-xs font-bold text-primary-dim opacity-80">浇水</span>
        </div>

        <div className="pointer-events-auto flex flex-col items-center group">
          <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0px_10px_30px_rgba(0,0,0,0.1)] active:scale-90 transition-transform cursor-pointer">
            <Package size={32} className="text-amber-700" fill="currentColor" />
            <div className="absolute -top-1 -right-1 bg-error-container text-on-error-container text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">2</div>
          </div>
          <span className="mt-2 text-xs font-bold text-primary-dim opacity-80">施肥</span>
        </div>
      </div>
    </main>
  );
}
