import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProsShowcase from './components/ProsShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="pt-16">
        <Hero />
        <Categories />
        <ProsShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
