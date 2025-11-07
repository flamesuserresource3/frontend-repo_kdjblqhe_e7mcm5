import { useEffect, useState } from 'react';
import { Star, MapPin, BadgeCheck, RefreshCw } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function ProsShowcase() {
  const [masters, setMasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [seeding, setSeeding] = useState(false);

  const loadMasters = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch(`${API_BASE}/api/masters`);
      if (!res.ok) throw new Error('Не удалось загрузить мастеров');
      const data = await res.json();
      setMasters(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e.message || 'Ошибка загрузки');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMasters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const seedDemo = async () => {
    try {
      setSeeding(true);
      const res = await fetch(`${API_BASE}/api/seed`, { method: 'POST' });
      if (!res.ok) throw new Error('Не удалось загрузить демо-данные');
      await loadMasters();
    } catch (e) {
      setError(e.message || 'Ошибка загрузки демо-данных');
    } finally {
      setSeeding(false);
    }
  };

  return (
    <section id="pros" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Топ‑мастера рядом</h2>
          <button onClick={seedDemo} disabled={seeding} className="inline-flex items-center gap-2 text-sm font-semibold text-pink-600 hover:text-pink-500 disabled:opacity-60">
            <RefreshCw className={`h-4 w-4 ${seeding ? 'animate-spin' : ''}`} /> Загрузить демо‑данные
          </button>
        </div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-48 rounded-xl bg-white border border-gray-200 animate-pulse" />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">{error}</div>
        )}

        {!loading && !error && masters.length === 0 && (
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-gray-600">
            База пока пуста. Нажмите "Загрузить демо‑данные".
          </div>
        )}

        {!loading && !error && masters.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {masters.map((m) => (
              <article key={m._id} className="group rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm transition-shadow">
                <div className="flex items-start gap-4">
                  <img src={m.avatar || `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(m.name || 'pro')}`} alt={m.name} className="h-16 w-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900 leading-tight">{m.name}</h3>
                      <BadgeCheck className="h-4 w-4 text-pink-600" />
                    </div>
                    <p className="mt-0.5 text-sm text-gray-600 flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {m.city || 'Ваш город'}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{m.bio || 'Опытный мастер бьюти‑индустрии'}</p>
                    <div className="mt-3 flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.round(m.rating || 5) ? '' : 'opacity-30'}`} />
                      ))}
                      <span className="ml-2 text-xs text-gray-500">{m.reviewsCount || 0} отзывов</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <a href="#" className="flex-1 inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">Профиль</a>
                  <a href="#contact" className="flex-1 inline-flex items-center justify-center rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-pink-500">Записаться</a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
