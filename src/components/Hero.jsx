
import React from 'react';
import '../styles/Hero.scss';

const Hero = ({ language }) => {
  const heroTexts = {
    en: {
      title: "Innovative Solutions for Your Business",
      subtitle: "Transform your ideas into reality with our expert services",
      cta: "Learn More"
    },
    es: {
      title: "Soluciones Innovadoras para tu Negocio",
      subtitle: "Transforma tus ideas en realidad con nuestros servicios expertos",
      cta: "Conocer Más"
    }
  };

  const texts = heroTexts[language];

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-logo">
          <div className="logo-placeholder"></div>
        </div>
        <h1>{texts.title}</h1>
        <p>{texts.subtitle}</p>
        <button className="cta-button" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
          {texts.cta}
        </button>
      </div>
      <div className="hero-background">
        <div className="bg-shape"></div>
      </div>
    </section>
  );
};

export default Hero;
