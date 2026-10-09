import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Friction from './components/Friction';
import Services from './components/Services';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main App component (Modularized for 2026 Best Practices)
 * Every section is now its own component for better maintainability and performance.
 */
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Friction />
        <Services />
        <Roadmap />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
