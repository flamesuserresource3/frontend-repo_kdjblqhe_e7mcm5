import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProsShowcase from './components/ProsShowcase';

function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} BeautyConnect. Все права защищены.</p>
          <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Пользовательское соглашение</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProsShowcase />
      </main>
      <Footer />
    </div>
  );
}
