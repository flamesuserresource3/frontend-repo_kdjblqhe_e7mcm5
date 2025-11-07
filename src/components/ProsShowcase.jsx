import { Star, MapPin, BadgeCheck } from 'lucide-react';

const pros = [
  {
    name: 'Анна Петрова',
    role: 'Парикмахер-стилист',
    rating: 4.9,
    reviews: 128,
    location: 'Москва',
    tags: ['Стрижка', 'Укладка', 'Окрашивание'],
    avatar: 'https://i.pravatar.cc/100?img=5'
  },
  {
    name: 'Мария Иванова',
    role: 'Мастер маникюра',
    rating: 4.8,
    reviews: 96,
    location: 'Санкт-Петербург',
    tags: ['Маникюр', 'Педикюр', 'Дизайн'],
    avatar: 'https://i.pravatar.cc/100?img=15'
  },
  {
    name: 'Екатерина Смирнова',
    role: 'Бровист/Визажист',
    rating: 4.95,
    reviews: 203,
    location: 'Казань',
    tags: ['Брови', 'Макияж', 'Ламинирование'],
    avatar: 'https://i.pravatar.cc/100?img=25'
  }
];

export default function ProsShowcase() {
  return (
    <section id="pros" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Топ мастера</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {pros.map((p) => (
            <div key={p.name} className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-5 hover:shadow-sm transition">
              <div className="flex items-center gap-4">
                <img src={p.avatar} alt={p.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{p.name}</h3>
                    <BadgeCheck className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600">{p.role}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <div className="inline-flex items-center gap-1"><Star className="h-4 w-4 text-yellow-500" /> {p.rating}</div>
                <div className="text-gray-500">{p.reviews} отзывов</div>
                <div className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-pink-600" /> {p.location}</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-1 text-xs rounded-full border border-black/10 bg-white">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex gap-2">
                <button className="flex-1 rounded-full px-4 py-2 text-sm bg-black text-white">Записаться</button>
                <button className="flex-1 rounded-full px-4 py-2 text-sm border border-black/10">Профиль</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
