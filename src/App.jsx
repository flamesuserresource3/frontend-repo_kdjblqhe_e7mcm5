import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProsShowcase from './components/ProsShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white">
      <Header />
      <main className="pt-24">
        <Hero />
        <Categories />
        <ProsShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
