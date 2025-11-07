import React from 'react';
import { Brush, Scissors, SprayCan, Droplets, Calendar } from 'lucide-react';

const items = [
  { icon: Scissors, title: 'Стрижки и укладки', desc: 'Парикмахерские услуги для любого события' },
  { icon: Brush, title: 'Макияж', desc: 'Дневной, вечерний, свадебный' },
  { icon: SprayCan, title: 'Маникюр и педикюр', desc: 'Гель-лак, дизайн, уход' },
  { icon: Droplets, title: 'Косметология', desc: 'Уходовые и аппаратные процедуры' },
];

export default function Categories() {
  return (
    <section id="categories" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Категории услуг</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">Выберите направление и найдите мастера рядом</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 dark:bg-white dark:text-neutral-900">
            <Calendar className="h-4 w-4" /> Забронировать
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
