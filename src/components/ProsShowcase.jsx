import React from 'react';
import { Star, MapPin, BadgeCheck, Calendar } from 'lucide-react';

const pros = [
  {
    name: 'Анна Петрова',
    role: 'Визажист',
    rating: 4.9,
    reviews: 182,
    location: 'Москва',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Ирина Смирнова',
    role: 'Мастер маникюра',
    rating: 4.8,
    reviews: 240,
    location: 'Санкт-Петербург',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
  },
  {
    name: 'Мария Иванова',
    role: 'Парикмахер-стилист',
    rating: 5.0,
    reviews: 320,
    location: 'Казань',
    verified: false,
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=300&auto=format&fit=crop',
  },
];

export default function ProsShowcase() {
  return (
    <section id="pros" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Топ‑мастера рядом с вами</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">Проверенные профили с высоким рейтингом</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-pink-600 text-white px-4 py-2 text-sm hover:bg-pink-700">
            <Calendar className="h-4 w-4" /> Забронировать
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pros.map((p) => (
            <article key={p.name} className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <img src={p.avatar} alt={p.name} className="h-14 w-14 rounded-xl object-cover" />
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <h3 className="font-semibold truncate">{p.name}</h3>
                    {p.verified && <BadgeCheck className="h-4 w-4 text-sky-500" />}
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate">{p.role}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium">{p.rating}</span>
                  <span className="text-neutral-500">({p.reviews})</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <MapPin className="h-4 w-4" /> {p.location}
                </div>
              </div>
              <div className="mt-4">
                <button className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 dark:bg-white dark:text-neutral-900">
                  Записаться
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
