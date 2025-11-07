import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
          <Sparkles className="h-6 w-6 text-pink-600" />
          <span>BeautyConnect</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#services" className="hover:text-gray-900">Услуги</a>
          <a href="#pros" className="hover:text-gray-900">Мастера</a>
          <a href="#reviews" className="hover:text-gray-900">Отзывы</a>
          <a href="#contact" className="hover:text-gray-900">Контакты</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">Войти</button>
          <button className="rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-pink-500">Стать мастером</button>
        </div>

        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-gray-200">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            <a href="#services" className="block text-gray-700">Услуги</a>
            <a href="#pros" className="block text-gray-700">Мастера</a>
            <a href="#reviews" className="block text-gray-700">Отзывы</a>
            <a href="#contact" className="block text-gray-700">Контакты</a>
            <div className="pt-2 flex gap-3">
              <button className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">Войти</button>
              <button className="flex-1 rounded-lg bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-pink-500">Стать мастером</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
