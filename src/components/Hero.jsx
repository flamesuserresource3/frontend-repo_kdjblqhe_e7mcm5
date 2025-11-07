import React from 'react';
import Spline from '@splinetool/react-spline';
import ClientOnly from './ClientOnly';
import { Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <ClientOnly fallback={<div className="w-full h-full bg-gradient-to-b from-pink-50 to-white" /> }>
          <Spline scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </ClientOnly>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-black/40 backdrop-blur px-3 py-1 text-xs font-medium text-pink-700 ring-1 ring-black/5">
            <Sparkles className="h-3.5 w-3.5 text-pink-600" /> Маркетплейс красоты
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Найдите своего идеального мастера красоты
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            Бронируйте услуги у проверенных специалистов рядом с вами. От стрижек до макияжа — всё в одном месте.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#categories" className="inline-flex items-center justify-center rounded-xl bg-pink-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-pink-700">
              Начать поиск
            </a>
            <a href="#pros" className="inline-flex items-center justify-center rounded-xl bg-white/80 dark:bg-black/40 backdrop-blur px-5 py-3 text-sm font-medium ring-1 ring-black/5 hover:bg-white">
              Смотреть мастеров
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <Star className="h-4 w-4 text-yellow-500" /> 4.9 средняя оценка • 10k+ бронирований
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/30 to-white dark:from-black/0 dark:via-black/40 dark:to-black" />
    </section>
  );
}
