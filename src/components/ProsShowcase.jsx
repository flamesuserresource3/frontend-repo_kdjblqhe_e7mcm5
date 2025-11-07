import { motion } from 'framer-motion';
import { Star, MapPin, BadgeCheck } from 'lucide-react';

const pros = [
  {
    id: 1,
    name: 'Анна',
    role: 'Визажист',
    rating: 4.9,
    reviews: 128,
    location: 'Москва',
    avatar: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400&auto=format&fit=crop',
    tags: ['Макияж', 'Свадебный', 'Образ для фотосессии'],
  },
  {
    id: 2,
    name: 'Мария',
    role: 'Мастер маникюра',
    rating: 4.8,
    reviews: 96,
    location: 'Санкт-Петербург',
    avatar: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=400&auto=format&fit=crop',
    tags: ['Гель-лак', 'Дизайн', 'SPA'],
  },
  {
    id: 3,
    name: 'Ольга',
    role: 'Парикмахер-стилист',
    rating: 5.0,
    reviews: 210,
    location: 'Казань',
    avatar: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=400&auto=format&fit=crop',
    tags: ['Стрижки', 'Окрашивание', 'Укладка'],
  },
];

export default function ProsShowcase() {
  return (
    <section id="pros" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">Топ мастера рядом</h2>
          <a href="#" className="text-sm font-medium text-fuchsia-600 hover:text-fuchsia-700">Открыть каталог</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pros.map((pro, i) => (
            <motion.div
              key={pro.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={pro.avatar} alt={pro.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{pro.name}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{pro.role}</p>
                  </div>
                  <div className="inline-flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{pro.rating}</span>
                  </div>
                </div>
                <div className="mt-2 inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                  <MapPin className="h-3.5 w-3.5" /> {pro.location}
                  <span className="mx-2">•</span>
                  <BadgeCheck className="h-3.5 w-3.5 text-emerald-500" /> {pro.reviews} отзывов
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {pro.tags.map((t) => (
                    <span key={t} className="rounded-full border border-neutral-200 dark:border-neutral-800 px-2.5 py-1 text-xs text-neutral-600 dark:text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button className="rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-2 text-sm font-semibold">Записаться</button>
                  <button className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm font-semibold text-neutral-800 dark:text-neutral-100">Профиль</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
