import { motion } from 'framer-motion';
import { Scissors, Brush, Sparkles, Wand2, SprayCan, Droplets } from 'lucide-react';

const items = [
  { icon: Scissors, label: 'Стрижка' },
  { icon: Brush, label: 'Маникюр' },
  { icon: Sparkles, label: 'Брови' },
  { icon: Wand2, label: 'Макияж' },
  { icon: SprayCan, label: 'Окрашивание' },
  { icon: Droplets, label: 'СПА' },
];

export default function Categories() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute -z-[1] inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-pink-200 blur-3xl opacity-40 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-200 blur-3xl opacity-40 rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Популярные категории</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((Item, i) => (
            <motion.div
              key={Item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="p-5 rounded-2xl border border-black/10 bg-white/70 backdrop-blur hover:shadow-sm transition"
            >
              <div className="flex items-center gap-3">
                <Item.icon className="h-5 w-5 text-pink-600" />
                <span className="font-medium">{Item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
