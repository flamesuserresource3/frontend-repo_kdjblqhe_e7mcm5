import ClientOnly from './ClientOnly';
import Spline from '@splinetool/react-spline';
import { Sparkles, Star, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <ClientOnly fallback={<div className=\"w-full h-full bg-gradient-to-b from-pink-50 to-white\" /> }>
          <Spline scene="https://prod.spline.design/7d7K2zvQfC1vQx1l/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </ClientOnly>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur px-3 py-1 text-sm">
            <Sparkles className="h-4 w-4 text-pink-600" />
            <span>Маркетплейс красоты нового поколения</span>
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
            Найдите лучшего мастера рядом с вами
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            Бронирование в один клик. Проверенные специалисты. Прозрачные цены.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-black text-white">
              Начать поиск
            </a>
            <a href="#pros" className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-black/10 bg-white/70 backdrop-blur">
              Смотреть мастеров
            </a>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <li className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" /> Рейтинг и отзывы
            </li>
            <li className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-600" /> Гарантия качества
            </li>
          </ul>
        </div>
        <div className="relative hidden md:block">
          <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-sm">
            <p className="text-sm text-gray-600">Популярно сейчас</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-xl border border-black/10 bg-white">Стрижка</div>
              <div className="p-3 rounded-xl border border-black/10 bg-white">Маникюр</div>
              <div className="p-3 rounded-xl border border-black/10 bg-white">Брови</div>
              <div className="p-3 rounded-xl border border-black/10 bg-white">Макияж</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
