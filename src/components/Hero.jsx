
import React from 'react';
import '../styles/Hero.scss';

const Hero = ({ language }) => {
  const heroTexts = {
    en: {
      title: "Boost your online presence with a professional website",
      subtitle: "Show the best of your brand, connect with your audience, and grow your opportunities.",
      cta: "Learn More"
    },
    es: {
      title: "Impulsá tu presencia digital con una web profesional",
      subtitle: "Mostrá lo mejor de tu marca, conectá con tus clientes y generá más oportunidades.",
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
