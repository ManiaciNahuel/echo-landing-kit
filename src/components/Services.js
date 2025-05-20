
import React, { useState } from 'react';
import '../styles/Services.scss';

const Services = ({ language }) => {
  const [showMore, setShowMore] = useState(false);

  const serviceTexts = {
    en: {
      title: "Our Services",
      subtitle: "What We Offer",
      description: "We provide a wide range of services designed to meet your business needs and help you achieve your goals.",
      viewMore: "View More",
      viewLess: "View Less",
      services: [
        {
          title: "Service 1",
          description: "A comprehensive solution designed to optimize your business operations.",
          icon: "📊"
        },
        {
          title: "Service 2",
          description: "Custom strategies tailored to your specific industry needs.",
          icon: "🚀"
        },
        {
          title: "Service 3",
          description: "Innovative approaches to solve complex business challenges.",
          icon: "💡"
        },
        {
          title: "Service 4",
          description: "Expert consultation to guide your business decisions.",
          icon: "👨‍💼"
        },
        {
          title: "Service 5",
          description: "Advanced tools to improve efficiency and productivity.",
          icon: "🔧"
        },
        {
          title: "Service 6",
          description: "Ongoing support to ensure long-term success and growth.",
          icon: "📈"
        }
      ]
    },
    es: {
      title: "Nuestros Servicios",
      subtitle: "Lo Que Ofrecemos",
      description: "Proporcionamos una amplia gama de servicios diseñados para satisfacer las necesidades de tu negocio y ayudarte a alcanzar tus objetivos.",
      viewMore: "Ver Más",
      viewLess: "Ver Menos",
      services: [
        {
          title: "Servicio 1",
          description: "Una solución integral diseñada para optimizar las operaciones de tu negocio.",
          icon: "📊"
        },
        {
          title: "Servicio 2",
          description: "Estrategias personalizadas adaptadas a las necesidades específicas de tu industria.",
          icon: "🚀"
        },
        {
          title: "Servicio 3",
          description: "Enfoques innovadores para resolver desafíos empresariales complejos.",
          icon: "💡"
        },
        {
          title: "Servicio 4",
          description: "Consultoría experta para guiar tus decisiones de negocio.",
          icon: "👨‍💼"
        },
        {
          title: "Servicio 5",
          description: "Herramientas avanzadas para mejorar la eficiencia y productividad.",
          icon: "🔧"
        },
        {
          title: "Servicio 6",
          description: "Soporte continuo para asegurar el éxito y crecimiento a largo plazo.",
          icon: "📈"
        }
      ]
    }
  };

  const texts = serviceTexts[language];
  const visibleServices = showMore ? texts.services : texts.services.slice(0, 3);

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="section-title">{texts.title}</h2>
        <h3>{texts.subtitle}</h3>
        <p className="services-description">{texts.description}</p>
        
        <div className="services-grid">
          {visibleServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        
        <button className="view-toggle-button" onClick={() => setShowMore(!showMore)}>
          {showMore ? texts.viewLess : texts.viewMore}
        </button>
      </div>
    </section>
  );
};

export default Services;
