
import React from 'react';
import '../styles/Footer.scss';

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();

  const footerTexts = {
    en: {
      marca: "Brand",
      company: "Company Name",
      rights: "All Rights Reserved",
      navigation: "Navigation",
      home: "Home",
      about: "About Us",
      services: "Services",
      contact: "Contact",
      connect: "Connect With Us",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    es: {
      marca: "Tu Marca",
      company: "Nombre de la Empresa",
      rights: "Todos los Derechos Reservados",
      navigation: "Navegación",
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      contact: "Contacto",
      connect: "Conéctate con Nosotros",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio"
    }
  };

  const texts = footerTexts[language];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="logo-placeholder">{texts.marca}</div>
            <p>{texts.company}</p>
          </div>
          
          <div className="footer-links">
            <div className="link-column">
              <h4>{texts.navigation}</h4>
              <ul>
                <li onClick={() => scrollToSection('home')}>{texts.home}</li>
                <li onClick={() => scrollToSection('about')}>{texts.about}</li>
                <li onClick={() => scrollToSection('services')}>{texts.services}</li>
                <li onClick={() => scrollToSection('contact')}>{texts.contact}</li>
              </ul>
            </div>
            
            <div className="link-column">
              <h4>{texts.connect}</h4>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><div className="social-icon">FB</div></a>
                <a href="#" aria-label="Twitter"><div className="social-icon">TW</div></a>
                <a href="#" aria-label="Instagram"><div className="social-icon">IG</div></a>
                <a href="#" aria-label="LinkedIn"><div className="social-icon">LI</div></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {texts.company}. {texts.rights}.</p>
          <div className="legal-links">
            <a href="#">{texts.privacy}</a>
            <a href="#">{texts.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
