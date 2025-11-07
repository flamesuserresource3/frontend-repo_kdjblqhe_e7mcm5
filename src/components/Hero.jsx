import { motion } from 'framer-motion';
import { Sparkles, Star, Shield } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6pLRlX2Y5LzYQj3O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/70 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-500" /> Платформа для мастеров красоты и клиентов
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Найдите идеального мастера рядом с вами
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
            BeautyConnect — маркетплейс, где специалисты по красоте встречают своих клиентов. Бронируйте услуги, просматривайте портфолио и читайте отзывы в одном месте.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#categories" className="inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 text-sm font-semibold shadow-sm hover:shadow-md active:scale-[0.99] transition">Начать поиск</a>
            <a href="#pros" className="inline-flex items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 px-5 py-3 text-sm font-semibold text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition">Стать мастером</a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-neutral-600 dark:text-neutral-300">
            <div className="inline-flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" /> Рейтинги и отзывы</div>
            <div className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-500" /> Защищённые бронирования</div>
            <div className="inline-flex items-center gap-2 col-span-2 sm:col-span-1"><Sparkles className="h-4 w-4 text-fuchsia-500" /> Портфолио работ</div>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
      </div>
    </section>
  );
}
