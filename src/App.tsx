import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CropDetection from './components/CropDetection';
import MarketplacePage from './components/marketplace/MarketplacePage';
import SchemesPage from './components/schemes/SchemesPage';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import invoice from './components/Invoice';


const router =  {

}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="detection">
          <CropDetection />
        </section>
        <section id="marketplace">
          <MarketplacePage />
        </section>
        <section id="schemes">
          <SchemesPage />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;