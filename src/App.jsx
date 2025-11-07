import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProsShowcase from './components/ProsShowcase';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProsShowcase />
      </main>
      <footer id="about" className="border-t border-black/5 py-12 mt-10 bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BeautyConnect. Все права защищены.</p>
          <nav className="flex items-center gap-5">
            <a href="#" className="hover:text-pink-600">Политика</a>
            <a href="#" className="hover:text-pink-600">Условия</a>
            <a href="#" className="hover:text-pink-600">Контакты</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
