import { Edit2, Users, ChevronRight, Droplet, Heart, Music, Bell, Clock } from 'lucide-react';

export function Profile() {
  return (
    <main className="pt-24 px-6 max-w-md mx-auto space-y-8 pb-32 min-h-screen">
      <section className="flex flex-col items-center text-center space-y-4">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8d7u13zajAq40VgnaYKc-yEBS97hzS1xvEgdLHc27SFeHeVCPOVejuEtoGlUqR7qel1FPcY-ddikN6tZD4FJzWhnUdW9y_BS_7eWv-r2AUTSM8j2gMXIbuZ5ibHLxvMabtHORAwdtz_D5yYspRjh7UiMR8p-eon6DCyMdGsYpLlk2VQ9xiOJHMa-i7ryEjx9i3ErZFqYVEg0Dr6d4Qw9FGOXbvZWSYda6XJ1X-qgJKHYREygw_YgZ95wDW8r7C-HWmHGg2YFWqY4"
              alt="User Avatar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute bottom-1 right-1 bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center shadow-md cursor-pointer">
            <Edit2 size={14} />
          </div>
        </div>
        <div>
          <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">林小溪</h2>
          <p className="text-on-surface-variant text-sm mt-1">花园等级 Lv.12 · 见习花匠</p>
        </div>
      </section>

      <section>
        <button className="w-full bg-secondary text-on-secondary py-6 px-8 rounded-xl flex items-center justify-between shadow-xl shadow-secondary/10 hover:opacity-90 transition-all active:scale-[0.98] cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="bg-secondary-fixed/20 p-3 rounded-full">
              <Users size={24} />
            </div>
            <div className="text-left">
              <span className="block font-bold font-headline">串门拜访</span>
              <span className="text-xs opacity-80">去看看朋友们的迷你花园吧</span>
            </div>
          </div>
          <ChevronRight size={24} />
        </button>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-headline font-bold text-lg px-2">收到的善意</h3>
          <span className="text-xs text-primary font-medium cursor-pointer">查看全部</span>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-surface-container-lowest p-5 rounded-lg shadow-[0px_10px_20px_rgba(62,43,20,0.03)] flex gap-4 items-start border-l-4 border-primary">
            <div className="bg-primary-container/30 p-2 rounded-full">
              <Droplet size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-on-surface leading-relaxed">
                一位陌生人为你浇灌了 <span className="font-bold text-primary">香水百合</span>
              </p>
              <span className="text-[10px] text-on-surface-variant mt-2 block">10分钟前 · 愿你今天心情愉快</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-5 rounded-lg shadow-[0px_10px_20px_rgba(62,43,20,0.03)] flex gap-4 items-start border-l-4 border-tertiary">
            <div className="bg-tertiary-container/30 p-2 rounded-full">
              <Heart size={20} className="text-tertiary" fill="currentColor" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-on-surface leading-relaxed">
                <span className="font-bold text-on-surface">阿强</span> 赞美了你的花园设计
              </p>
              <span className="text-[10px] text-on-surface-variant mt-2 block">2小时前 · 真是个宁静的小角落</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4 pb-4">
        <h3 className="font-headline font-bold text-lg px-2">空间氛围</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-secondary-container/50 aspect-square rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-secondary-container transition-colors cursor-pointer">
            <div className="bg-white/50 p-2 rounded-full">
              <Music size={20} className="text-secondary" />
            </div>
            <span className="text-[10px] font-medium text-on-secondary-container">背景音乐</span>
          </div>
          <div className="bg-secondary-container/50 aspect-square rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-secondary-container transition-colors cursor-pointer">
            <div className="bg-white/50 p-2 rounded-full">
              <Bell size={20} className="text-secondary" />
            </div>
            <span className="text-[10px] font-medium text-on-secondary-container">动态通知</span>
          </div>
          <div className="bg-secondary-container/50 aspect-square rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-secondary-container transition-colors cursor-pointer">
            <div className="bg-white/50 p-2 rounded-full">
              <Clock size={20} className="text-secondary" />
            </div>
            <span className="text-[10px] font-medium text-on-secondary-container">园艺提醒</span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-headline font-bold text-lg px-2">今日推荐</h3>
        <div className="relative h-48 rounded-xl overflow-hidden shadow-xl">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpmiKEa672H-cfgE8T8PYLD6W0nH24a9XanDr8jgtBE_xGoc7VF57JmOYXR1KdXrUGQw71WmcG5y195MRGWHY5-9nLmHugP7p3RRGohrnhs4tt5iwAhac38THCngjmxvkcGJV6VF-VKd_kPFopGTdStl6v8XfHQ2uBTAdXn9zjrUIKKiuE6qYPSmMtuOM8nrVyr17h9E1Jq8Gxije8rzVWA69cW0SFDmBr1tXk59vPHCK0Zab8qnCNT65MQR1qoyxEXTIhKPJjMvk"
            alt="Garden Preview"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <span className="text-white/80 text-[10px] uppercase tracking-widest font-bold">苏西的秘密花园</span>
            <p className="text-white font-medium text-sm">“这里种满了关于夏天的记忆”</p>
          </div>
        </div>
      </section>
    </main>
  );
}
