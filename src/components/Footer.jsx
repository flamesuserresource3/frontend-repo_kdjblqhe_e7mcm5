export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} BeautyConnect. Все права защищены.</p>
          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-900">Условия использования</a>
            <a href="#" className="hover:text-gray-900">Поддержка</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
