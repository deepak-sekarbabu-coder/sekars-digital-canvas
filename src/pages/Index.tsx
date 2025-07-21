import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
