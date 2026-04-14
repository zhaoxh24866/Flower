import { Droplet, Leaf, Check, CheckCircle2 } from 'lucide-react';

export function Habits() {
  return (
    <main className="pt-24 px-6 pb-32 max-w-2xl mx-auto min-h-screen">
      <section className="mb-10">
        <div className="relative overflow-hidden bg-secondary-container rounded-xl p-8 shadow-sm">
          <div className="absolute -right-4 -top-4 opacity-10">
            <Leaf size={120} fill="currentColor" />
          </div>
          <h2 className="font-headline text-2xl font-bold mb-6 tracking-tight text-on-secondary-container">今日成长</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest/80 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Droplet size={24} className="text-blue-600" fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">水滴收集</p>
                <p className="font-headline text-xl font-extrabold">12</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest/80 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Leaf size={24} className="text-orange-600" fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">养分肥料</p>
                <p className="font-headline text-xl font-extrabold">5</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex justify-between items-end mb-2">
          <h3 className="font-headline text-xl font-semibold tracking-tight">习惯森林</h3>
          <span className="text-sm font-medium text-primary">已完成 1/3</span>
        </div>

        <div className="bg-surface-container-lowest p-5 rounded-lg flex items-center justify-between group transition-all duration-300 hover:translate-x-1">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBylYaybHIkjYhsENvmFqlz_3zrhb5sljwJuBCyqDXghtZEklTXU7l6iJwzcxT0VX-OP75FLqtAWu0hOIypZ0B-YzCXugM_e5ZjKh1pflXgMXmRaCiYI3wdkxXb2dvnDiWsVSy2jSwUwrXpAriluUOm23n5jtbd8wyT-lqVCNVLzAb3Mi0fFIMzeeKmHrbEUuqArZ4ABOJxrXsNwtkmkTed9TriqpE52nfqPnOZUWvkRikJkkp5mzu1y11GNxweYxAQITt5cIAHoXU"
                alt="Water"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="font-semibold text-on-surface">Drink 8 cups of water</h4>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-[11px] text-blue-600 font-medium">
                  <Droplet size={14} fill="currentColor" /> +2 水滴
                </span>
              </div>
            </div>
          </div>
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary-container text-on-secondary-container transition-all active:scale-95">
            <Check size={24} />
          </button>
        </div>

        <div className="bg-surface-container-lowest p-5 rounded-lg flex items-center justify-between group transition-all duration-300">
          <div className="flex items-center gap-5 opacity-60">
            <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlM7iBHq4zSo7a4OGUa6SHOosgD6KMaUI6CCek72UkdjU-IFlrWqxABW_jgZeuxx7qfLVaPjTxV_YEPNKLuwv2zQUu3jFyHz_mPnbtDuhTdfgRPtxo5TtqTj6-jwfYKVqt6LZZcZTG5m9IsuRduZQjg2NTmMhEmWEnf0hvPkbElivnGyXH-ijDEbPXyb8J7hm_8z0IgygCrCad7ZJzV9l7U7hKIVQkQ6Sd179eFpvZG0wOWx-c49n9u_ccmqjB8MBkNwDhXnBb4hg"
                alt="Sleep"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="font-semibold text-on-surface line-through">Sleep before 11 PM</h4>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-[11px] text-orange-600 font-medium">
                  <Leaf size={14} fill="currentColor" /> +1 肥料
                </span>
              </div>
            </div>
          </div>
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-primary-container text-primary transition-all">
            <CheckCircle2 size={24} fill="currentColor" className="text-primary-container" />
          </button>
        </div>

        <div className="bg-surface-container-lowest p-5 rounded-lg flex items-center justify-between group transition-all duration-300 hover:translate-x-1">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-surface-container-low flex items-center justify-center overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqGeQnW4Acxn_0lP54S0jSiSLWJLQCCTMafSzNMvR5PtXpxzomvK4olr8oM7v_kZt8pJbrAnWH7nmRC67H5o8zvI5p5guWCA6TS2JbQcP-7jVF-LIOujYu6QpmUhG2CRGYi_nzP0cnbIg0ZoCWya1TxtuGnCULueQNt2dU0o8xfs0K6EoPC9WUI8b1WKPox3f77SAb02I4C_nhAFM1Fj_CWkc6Ly-HGJmTU4JeibhezVNIjHaqfk9NEWgWBX817I4o-nz3Ra7cLvE"
                alt="Meditation"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="font-semibold text-on-surface">10 mins Meditation</h4>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-[11px] text-blue-600 font-medium">
                  <Droplet size={14} fill="currentColor" /> +3 水滴
                </span>
                <span className="flex items-center gap-1 text-[11px] text-orange-600 font-medium">
                  <Leaf size={14} fill="currentColor" /> +1 肥料
                </span>
              </div>
            </div>
          </div>
          <button className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary-container text-on-secondary-container transition-all active:scale-95">
            <Check size={24} />
          </button>
        </div>
      </section>

      <section className="mt-16 text-center">
        <div className="inline-flex flex-col items-center opacity-30">
          <Leaf size={36} className="mb-2" />
          <p className="text-xs italic">森林正在悄悄生长</p>
        </div>
      </section>
    </main>
  );
}
