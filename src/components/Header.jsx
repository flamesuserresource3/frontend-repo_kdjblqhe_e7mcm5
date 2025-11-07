import { useState } from 'react';
import { Menu, X, Sparkles, Calendar, User } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <nav className="hidden md:flex items-center gap-8 text-sm">
      <a href="#services" className="hover:text-pink-500 transition-colors">Услуги</a>
      <a href="#pros" className="hover:text-pink-500 transition-colors">Мастера</a>
      <a href="#about" className="hover:text-pink-500 transition-colors">О нас</a>
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <Sparkles className="h-5 w-5 text-pink-600" />
          <span>BeautyConnect</span>
        </a>

        <NavLinks />

        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-black text-white hover:bg-gray-800 transition">
            <Calendar className="h-4 w-4" /> Записаться
          </button>
          <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border border-black/10 hover:bg-black/5 transition">
            <User className="h-4 w-4" /> Войти
          </button>
        </div>

        <button aria-label="Toggle menu" onClick={() => setOpen(v => !v)} className="md:hidden inline-flex p-2 rounded-lg border border-black/10">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            <a href="#services" onClick={() => setOpen(false)} className="py-2">Услуги</a>
            <a href="#pros" onClick={() => setOpen(false)} className="py-2">Мастера</a>
            <a href="#about" onClick={() => setOpen(false)} className="py-2">О нас</a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm bg-black text-white">
                <Calendar className="h-4 w-4" /> Записаться
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm border border-black/10">
                <User className="h-4 w-4" /> Войти
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
