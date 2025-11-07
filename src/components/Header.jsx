import React, { useState } from 'react';
import { Menu, X, Sparkles, User } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur bg-white/60 dark:bg-neutral-900/60 border border-white/50 dark:border-white/10 shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="inline-flex items-center gap-2 font-semibold tracking-tight text-neutral-900 dark:text-white">
              <Sparkles className="h-5 w-5 text-pink-500" />
              BeautyConnect
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#categories" className="hover:text-pink-600 transition-colors">Категории</a>
              <a href="#pros" className="hover:text-pink-600 transition-colors">Мастера</a>
              <a href="#about" className="hover:text-pink-600 transition-colors">О нас</a>
              <button className="inline-flex items-center gap-2 rounded-full bg-pink-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-pink-700">
                <User className="h-4 w-4" /> Войти
              </button>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-neutral-200 dark:border-white/10 p-2"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-neutral-200/70 dark:border-white/10 px-4 py-3 space-y-2">
              <a href="#categories" className="block py-2" onClick={() => setOpen(false)}>Категории</a>
              <a href="#pros" className="block py-2" onClick={() => setOpen(false)}>Мастера</a>
              <a href="#about" className="block py-2" onClick={() => setOpen(false)}>О нас</a>
              <button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-pink-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-pink-700">
                <User className="h-4 w-4" /> Войти
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
