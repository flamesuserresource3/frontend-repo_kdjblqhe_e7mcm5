import { Brush, Scissors, SprayCan, Droplets } from 'lucide-react';

const items = [
  { title: 'Парикмахерские услуги', icon: Scissors, color: 'bg-pink-100 text-pink-700' },
  { title: 'Маникюр и педикюр', icon: Brush, color: 'bg-rose-100 text-rose-700' },
  { title: 'Косметология', icon: SprayCan, color: 'bg-fuchsia-100 text-fuchsia-700' },
  { title: 'Макияж и брови', icon: Droplets, color: 'bg-purple-100 text-purple-700' },
];

export default function Categories() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Популярные категории</h2>
          <a href="#" className="text-pink-600 font-semibold">Смотреть все</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ title, icon: Icon, color }) => (
            <div key={title} className="group rounded-xl border border-gray-200 p-5 hover:shadow-sm transition-shadow bg-white">
              <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-4 font-semibold text-gray-900 leading-tight">{title}</p>
              <p className="mt-1 text-sm text-gray-500">Найдите мастеров рядом</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
