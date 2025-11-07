import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Екатерина',
    text: 'Замечательный опыт! Мастер внимательная и профессиональная. Обязательно вернусь снова.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ирина',
    text: 'Быстрая запись и отличное качество. Удобно видеть портфолио заранее.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Светлана',
    text: 'Нашла мастера рядом с домом. Очень понравилась система отзывов.',
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-12 sm:py-16 bg-neutral-50/60 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">Отзывы клиентов</h2>
          <a href="#" className="text-sm font-medium text-fuchsia-600 hover:text-fuchsia-700">Оставить отзыв</a>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="text-base font-semibold text-neutral-900 dark:text-white">{r.name}</div>
                <div className="inline-flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className={`h-4 w-4 ${idx < r.rating ? 'fill-current' : ''}`} />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
