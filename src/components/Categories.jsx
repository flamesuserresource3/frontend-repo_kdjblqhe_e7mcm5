import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Brush, Sparkles, SprayCan, Wand2, Droplets } from 'lucide-react';

const categories = [
  { key: 'hair', label: 'Стрижки и укладки', icon: Scissors, color: 'from-rose-500 to-fuchsia-500' },
  { key: 'makeup', label: 'Макияж', icon: Brush, color: 'from-violet-500 to-indigo-500' },
  { key: 'nails', label: 'Маникюр и педикюр', icon: Sparkles, color: 'from-amber-500 to-rose-500' },
  { key: 'tan', label: 'Уход за кожей', icon: Wand2, color: 'from-emerald-500 to-teal-500' },
  { key: 'spa', label: 'SPA и релакс', icon: SprayCan, color: 'from-sky-500 to-cyan-500' },
  { key: 'brows', label: 'Брови и ресницы', icon: Droplets, color: 'from-pink-500 to-purple-500' },
];

export default function Categories() {
  const grid = useMemo(() => categories, []);
  return (
    <section id="categories" className="py-12 sm:py-16 bg-neutral-50/60 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">Популярные категории</h2>
          <a href="#" className="text-sm font-medium text-fuchsia-600 hover:text-fuchsia-700">Смотреть все</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {grid.map((c, i) => (
            <motion.a
              key={c.key}
              href={`#category-${c.key}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-4 shadow-sm hover:shadow-md transition"
            >
              <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-tr ${c.color} opacity-20 blur-2xl`} />
              <div className="relative flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900">
                  <c.icon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                </span>
                <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{c.label}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
