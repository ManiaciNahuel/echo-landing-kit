
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../styles/Index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('es'); // Default language: Spanish
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 50
    });
  }, []);
  // Apply theme based on localStorage or system preference on component mount
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(prefersDark);
    }

    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Update theme in localStorage and document whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Update language in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <Navbar
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Services language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Index;
