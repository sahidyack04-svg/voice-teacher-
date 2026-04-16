import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Admissions from '../components/Admissions';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import SmartSearch from '../components/SmartSearch';
import ChatAssistant from '../components/ChatAssistant';
import VoiceAssistant from '../components/VoiceAssistant';
import Recommendations from '../components/Recommendations';
import Contact from '../components/Contact';

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar glass">
        <h1>Wisdom Wealth International School</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#admissions">Admissions</a>
          <a href="#features">Facilities</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <Hero />
        <SmartSearch />
        <About />
        <Admissions />
        <Features />
        <Testimonials />
        <Gallery />
        <section className="ai-grid" aria-label="AI Services">
          <ChatAssistant />
          <VoiceAssistant />
          <Recommendations />
        </section>
        <Contact />
      </main>
    </div>
  );
}
