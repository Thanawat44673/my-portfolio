import { useEffect } from 'react';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Only activate scroll-reveal hiding when user hasn't opted out of motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      document.documentElement.setAttribute('data-motion', 'ready');
    }

    // Listen for changes (user may toggle reduced-motion while viewing)
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => {
      if (e.matches) {
        document.documentElement.removeAttribute('data-motion');
      } else {
        document.documentElement.setAttribute('data-motion', 'ready');
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
