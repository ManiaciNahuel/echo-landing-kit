
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe } from 'lucide-react';
import '../styles/Navbar.scss';

const Navbar = ({ toggleTheme, isDarkMode, language, setLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageToggle = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navTexts = {
    en: {
      home: "Home",
      about: "About Us",
      services: "Services",
      contact: "Contact"
    },
    es: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      contact: "Contacto"
    }
  };

  const texts = navTexts[language];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <span>LOGO</span>
        </div>
        
        <div className="nav-right">
          <div className={`menu-items ${isMenuOpen ? 'menu-open' : ''}`}>
            <ul>
              <li onClick={() => scrollToSection('home')}>{texts.home}</li>
              <li onClick={() => scrollToSection('about')}>{texts.about}</li>
              <li onClick={() => scrollToSection('services')}>{texts.services}</li>
              <li onClick={() => scrollToSection('contact')}>{texts.contact}</li>
            </ul>
          </div>
          
          <div className="nav-controls">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button className="language-toggle" onClick={handleLanguageToggle} aria-label="Change language">
              <Globe size={20} />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
          
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
