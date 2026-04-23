import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
  });

  // SEO optimization for the main page
  useSEO({
    title: 'Deepak Sekarbabu - Full Stack Developer & Solution Architect | TCS Stockholm',
    description:
      'Professional Full Stack Developer with 12+ years experience in Java, Spring Boot, Microservices, React, and Cloud technologies. Currently Assistant Technical Consultant at TCS Stockholm, specializing in enterprise solutions and modern web development.',
    keywords:
      'Deepak Sekarbabu, Full Stack Developer, Java Developer, Spring Boot, Microservices, React, TypeScript, Cloud Computing, Solution Architect, TCS, Stockholm, Software Engineer, Assistant Technical Consultant',
    type: 'profile',
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const nextTheme = !prev;
      localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
      return nextTheme;
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
