import { Lock, Flower2 } from 'lucide-react';

export function Collection() {
  return (
    <main className="pt-24 px-6 pb-32 space-y-8 min-h-screen">
      <section className="relative overflow-hidden rounded-xl h-48 flex flex-col justify-center px-8 bg-surface-container-low shadow-[0px_20px_40px_rgba(62,43,20,0.04)]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7N_-FOk0xpTRkN_qdxi-zLTqSEkO9FDoSWLcwYKsMFPNCzGWBknz1AiObpj1uOOGq5CNzHuHV1q-MKFkrWssIcHcnjHUiZbH5-U86LFadV7925jhzyKcrA0beRIGQ9DTBhBkxMZHed_F4RS3qmiEF5PWds86OJlnVs8nE5JeRkEsScj2_xx3jLpdbpuZiQsnd4NP9Sjv_xf5hBzgLmpYQICz731w-AGBZoksCHg2vPV752n7VK2DirYujnfgdTKt-Q7RT03rgZIQ"
            alt="Meadow"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 space-y-2">
          <span className="text-xs font-bold tracking-[0.2em] text-primary/60">DAILY QUOTE</span>
          <p className="text-xl font-medium text-on-surface leading-relaxed max-w-[80%]">
            “在这繁忙的世界，愿你拥有一片属于自己的呼吸之地。”
          </p>
          <p className="text-sm text-secondary italic opacity-80">— 莫奈的花园</p>
        </div>
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl"></div>
      </section>

      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-on-surface font-headline">治愈图鉴</h2>
          <span className="text-sm font-medium text-primary">已收集 4/12</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-1 space-y-3 group">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-white shadow-[0px_10px_30px_rgba(62,43,20,0.04)] transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5zIwsmytnYYFsxVa_2Zu8t2eTMToHsAl4n3CWu8SWq_5HyC5pJIcitRWqIFdm4chdlz8BLTwnY2IrOVeXM_HVGG8Zeiw0IpVjyV2RqSQ0sNTfU3eijGah4dUEqlBeU9-F3SwAWWjFhVaoBTsdu8_ouqTeH009_6L8wn4mckK269EJf46sIZLydJhx3Vn2PnWyKvNHM4kxEqd5fkuzynUVYMEzlXk__HjzLFt62ph0ost7QZrRpXDlxdLfgMtPbbGhhoFKkdi6D4U"
                alt="Breeze Lily"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-1">
              <h3 className="font-semibold text-on-surface">微风百合</h3>
              <p className="text-xs text-secondary opacity-60">Breeze Lily</p>
            </div>
          </div>

          <div className="col-span-1 space-y-3 mt-4 group">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-white shadow-[0px_10px_30px_rgba(62,43,20,0.04)] transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqXf0zJkLpiMr8Ro9M-CiJD0j3dW4nHWBNNfNB6aNxnLTSoacP4ixeI9bGlsr0Ww1mD6jy_KsR0uCB-hM05aVZ8xIE12pF1fnTnJcHgIaN8b5m4-2-bRfriDIQKJ37oGLN8BY-DGG2M-Gnl9fB0LDjmntqFH-ihF9Vm7zit5zAtKoqWCjJy3K2MTGkNF2ys0U02FB-WYQLqWUkx0I2tgpOsFFSExI8JK-E-eR78h7MqUZIZ2pY1qGxLiMYTWIjE9PlBf3CzR8m_-o"
                alt="Quiet Lavender"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-1">
              <h3 className="font-semibold text-on-surface">寂静薰衣草</h3>
              <p className="text-xs text-secondary opacity-60">Quiet Lavender</p>
            </div>
          </div>

          <div className="col-span-1 space-y-3 group">
            <div className="aspect-[3/4] rounded-lg bg-surface-container-low flex items-center justify-center relative overflow-hidden">
              <Flower2 className="text-on-surface/10 scale-150 absolute opacity-20" size={48} />
              <div className="relative z-10 w-24 h-32 opacity-20 grayscale brightness-125">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0Nti17nJNXTNWP--KvPsUnBj3J4s4-MwPGDeKTxsKpEmWMRWlLX5nauqcXYN-e0TsBhxDfn1NSbVl82ViWAjS3XKU3WYbUHieo_Fjsjg3U7g3a8HRfNtKZaitCCqb0BcXRXjxDNiLb_TMsOEyr-rtaAV1d4ScRe6yGqMC2HRotZ_XP1I6COeviKrKmhjW4rdtzs7llNFwdhEBtDhhywoum__FU30odF0FLczzEr04uKQ04a13LvUvFsW3qUAd2OQwoju4VuFgvBw"
                  alt="Unknown"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-secondary/5 backdrop-blur-[2px]"></div>
            </div>
            <div className="px-1 opacity-40">
              <h3 className="font-semibold text-on-surface">？？？</h3>
              <p className="text-xs text-secondary italic">未探索</p>
            </div>
          </div>

          <div className="col-span-1 space-y-3 mt-8 group">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-white shadow-[0px_10px_30px_rgba(62,43,20,0.04)] transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJzFAu7w93CPW3Es9uwTOYR8-yL3-QfUAKbZaXRLrqHpvbQ7OGlG4VroC7DKYsEKQzSpfT6MeNVTeCpbf2ODHTthgq8TSpFPFnOMgW4W8NYlVDTw3aXhz3VsYoo2PkaDCipVpstJhrV26VMNV1CSUbiuZMOV7MUl0IBW3hPN84LeRIg03iAOXYKlU8-5mq2vYJy_M813YNIRQ9vXcMrfxCFHirM1Jt19Ly7Z1iW4e9syl3YZIVLyZvWXzbkmFtwSEiU9ZGJJEFw6o"
                alt="Sunlight Daisy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-1">
              <h3 className="font-semibold text-on-surface">朝阳雏菊</h3>
              <p className="text-xs text-secondary opacity-60">Sunlight Daisy</p>
            </div>
          </div>

          <div className="col-span-1 space-y-3 group">
            <div className="aspect-[3/4] rounded-lg bg-surface-container-low flex items-center justify-center relative overflow-hidden">
              <Flower2 className="text-on-surface/10 scale-150 absolute opacity-20" size={48} />
              <div className="relative z-10 w-20 h-28 opacity-20 grayscale">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk1zMAEGsa2j5c7M7Jz6ekhB-sE72Xx4VQc6I3q2IuboksxtjHVUmnEpLfrnw9mH987cvA9ZAWy_mfifX764mpH1RZEmdi37QLzECdv9oAQgSnnfD7U7z01FY8aQo_ol69b5_1Z7ciaNSmHGxRSy0VNt1Nc32lJOOiOip89agvkvp0LCkvd8V2tYffCknS_1t42IHHHzEE7xwd4eNCYBkuwe4CjBIF9Zp-ooY4BU8zWrcrRkc7YHhfj_pSzo19II1CeYrru4MFBMI"
                  alt="Unknown"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-secondary/5 backdrop-blur-[2px]"></div>
            </div>
            <div className="px-1 opacity-40">
              <h3 className="font-semibold text-on-surface">？？？</h3>
              <p className="text-xs text-secondary italic">未探索</p>
            </div>
          </div>

          <div className="col-span-1 space-y-3 group">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-white shadow-[0px_10px_30px_rgba(62,43,20,0.04)] transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbcaSKSsccuRXz-0l0klwu937GGaXkEyJr5p88ss1FNtbQGG0vYswSS7jKi9ZVubSsSPUFKW22y0i-vf8ZzJFNEvwS9yN_tBPEPP8amqqv9jngpjWwQdss3-iKonOsp6g60MKB3I4g1MIFa2TI7fTUs3ZKexAEl1e9VLVAec40KUzeEya36-nC8LLXHKd6wAj0cqFvVpuTEhfl6nQjvwDcz_GkQvEjax9pkWOH1ZgYgmzI8he1yVsd8XvC1WjkX5B0ZZgCkSCpYfM"
                alt="Morning Dew Rose"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-1">
              <h3 className="font-semibold text-on-surface">晨露玫瑰</h3>
              <p className="text-xs text-secondary opacity-60">Morning Dew Rose</p>
            </div>
          </div>

          <div className="col-span-1 space-y-3 mt-4 group">
            <div className="aspect-[3/4] rounded-lg bg-surface-container-low flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-secondary/5 backdrop-blur-[2px]"></div>
              <Lock className="text-on-surface/20" size={32} />
            </div>
            <div className="px-1 opacity-40">
              <h3 className="font-semibold text-on-surface">？？？</h3>
              <p className="text-xs text-secondary italic">待解锁</p>
            </div>
          </div>

          <div className="col-span-1 space-y-3 group">
            <div className="aspect-[3/4] rounded-lg bg-surface-container-low flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-secondary/5 backdrop-blur-[2px]"></div>
              <Lock className="text-on-surface/20" size={32} />
            </div>
            <div className="px-1 opacity-40">
              <h3 className="font-semibold text-on-surface">？？？</h3>
              <p className="text-xs text-secondary italic">待解锁</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 bg-primary-container/30 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-[0px_20px_40px_rgba(75,96,87,0.04)]">
        <div className="flex-1 space-y-4">
          <span className="px-3 py-1 bg-primary text-on-primary text-[10px] font-bold tracking-widest rounded-full">RECOMMENDED</span>
          <h3 className="text-2xl font-bold text-on-primary-container font-headline">今日花语：希望</h3>
          <p className="text-on-primary-container/80 leading-relaxed">
            雏菊的花语是天真、和平、希望以及纯洁。在你的数字花园中，它们正静静地等待着你的关注，与你一同生长。
          </p>
          <button className="bg-primary text-on-primary px-8 py-3 rounded-full text-sm font-semibold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all cursor-pointer">
            开始收集
          </button>
        </div>
        <div className="w-full md:w-1/3 aspect-square rounded-lg rotate-3 overflow-hidden shadow-xl">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8evtmPloEEgk8ttPKKaBVAbH_uTN4l4uZKWPUeZeBqy-uSSoEx1eo38_N-MD4wXo_X8mArxQVJKRJRzbBlYposZSFb1ExwN0BUd87DT-jAJBSk7mXsCLPd6A_I_FQw2kwvoWIbjt1cfpPECqvf4CN_VzV9a4xKjdun1whwQ-G9bapuiJQr5B7x7Z6ZyXl0Pz9JwCpkVSCmcaOi_3AkTIGrS_9Vhx6dCleWnOyXy6HCz-DvIUY52emA9xIWwuS4CJeZDp8oDzAXKI"
            alt="Garden detail"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
    </main>
  );
}
