import React from 'react';

export default function Footer() {
  return (
    <footer id="about" className="relative py-10 border-t border-neutral-200/70 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} BeautyConnect. Все права защищены.</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-pink-600">Политика</a>
            <a href="#" className="hover:text-pink-600">Условия</a>
            <a href="#" className="hover:text-pink-600">Контакты</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
