import { useState } from 'react';
import { Menu, X, Sparkles, Calendar, User } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Категории', href: '#categories' },
    { label: 'Мастера', href: '#pros' },
    { label: 'Отзывы', href: '#reviews' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-rose-500 via-fuchsia-500 to-violet-500 text-white shadow-lg shadow-fuchsia-500/30">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">BeautyConnect</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
              <User className="h-4 w-4" /> Войти
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md active:scale-[0.99] transition">
              <Calendar className="h-4 w-4" /> Забронировать
            </button>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:text-neutral-200 dark:hover:bg-neutral-900"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button className="rounded-xl border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200">Войти</button>
                <button className="rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-3 py-2 text-sm font-semibold">Забронировать</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
