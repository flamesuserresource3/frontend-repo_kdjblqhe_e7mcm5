import Spline from '@splinetool/react-spline';
import ClientOnly from './ClientOnly';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center" aria-label="Hero">
      {/* Background gradient should not block interactions with Spline */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-pink-50 via-white to-white" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10 py-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Красота ближе, чем кажется
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Находите лучших мастеров города и записывайтесь онлайн. Услуги бьюти‑индустрии в один клик.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#pros" className="inline-flex items-center rounded-lg bg-pink-600 px-5 py-3 text-white font-semibold shadow hover:bg-pink-500">Найти мастера</a>
            <a href="#services" className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-3 text-gray-700 font-semibold hover:bg-gray-50">Смотреть услуги</a>
          </div>
        </div>

        <div className="relative h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
          <ClientOnly fallback={<div className="w-full h-full bg-gradient-to-br from-pink-100 via-rose-50 to-white" /> }>
            <Spline
              scene="https://prod.spline.design/9O1oTb7hC9zKpH6Y/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </ClientOnly>
        </div>
      </div>
    </section>
  );
}
