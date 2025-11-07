import React, { useEffect, useState } from 'react';
import { Star, MapPin, BadgeCheck, Calendar, RefreshCw } from 'lucide-react';
import BookingModal from './BookingModal';

export default function ProsShowcase() {
  const [masters, setMasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const baseUrl = import.meta.env.VITE_BACKEND_URL;

  const fetchMasters = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${baseUrl}/api/masters`);
      if (!res.ok) throw new Error(`Ошибка загрузки: ${res.status}`);
      const data = await res.json();
      setMasters(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const seedDemo = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${baseUrl}/api/seed`, { method: 'POST' });
      if (!res.ok) throw new Error('Не удалось заполнить демо-данные');
      await fetchMasters();
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMasters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-5 h-40" />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 text-red-700 p-4 text-sm">
            Произошла ошибка: {error}
          </div>
        )}

        {!loading && !error && masters.length === 0 && (
          <div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 p-8 text-center">
            <p className="text-neutral-700 dark:text-neutral-300">Пока нет мастеров. Вы можете заполнить демо-данные для примера.</p>
            <button onClick={seedDemo} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 disabled:opacity-60" disabled={loading}>
              <RefreshCw className="h-4 w-4" /> Заполнить демо-данные
            </button>
          </div>
        )}

        {!loading && !error && masters.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {masters.map((p) => (
              <article key={p.id} className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <img src={p.avatar} alt={p.name} className="h-14 w-14 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1">
                      <h3 className="font-semibold truncate">{p.name}</h3>
                      {p.verified && <BadgeCheck className="h-4 w-4 text-sky-500" />}
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate">{p.role || 'Мастер красоты'}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium">{p.rating?.toFixed ? p.rating.toFixed(1) : p.rating}</span>
                    <span className="text-neutral-500">({p.reviews_count})</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400">
                    <MapPin className="h-4 w-4" /> {p.city || 'Город'}
                  </div>
                </div>
                <div className="mt-4">
                  <button onClick={() => setSelected(p)} className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 dark:bg-white dark:text-neutral-900">
                    Записаться
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
      <BookingModal open={!!selected} onClose={() => setSelected(null)} master={selected} />
    </section>
  );
}
