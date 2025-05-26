
import React, { useState } from 'react';
import '../styles/Services.scss';

const Services = ({ language }) => {
  const [showMore, setShowMore] = useState(false);

  const serviceTexts = {
  en: {
    title: "Your Services", // Cambio de "Our Services" a "Your Services"
    subtitle: "What You Offer", // Cambio de "What We Offer" a "What You Offer"
    description: "Here, you can showcase the wide range of services designed to meet the unique needs of your business and help you achieve your goals.", // Ajuste de la descripción
    viewMore: "View More",
    viewLess: "View Less",
    services: [
      {
        title: "[Service Title]", // Genérico
        description: "Describe here one of the key solutions you provide, explaining its core benefit to your clients.", // Genérico
        icon: "💡" // Puedes usar el icono que quieras, o dejarlo como placeholder
      },
      {
        title: "[Service Title]", // Genérico
        description: "Detail another one of your offerings, highlighting how it addresses a specific challenge or need.", // Genérico
        icon: "📈"
      },
      {
        title: "[Service Title]", // Genérico
        description: "Present a third essential service, focusing on the unique value it brings to your target audience.", // Genérico
        icon: "🛠️"
      },
      {
        title: "[Service Title]", // Genérico
        description: "Elaborate on a fourth service, emphasizing its impact on improving your clients' operations or results.", // Genérico
        icon: "🌐"
      },
      {
        title: "[Service Title]", // Genérico
        description: "Outline a fifth service, illustrating how it contributes to the growth and success of those you serve.", // Genérico
        icon: "🤝"
      },
      {
        title: "[Service Title]", // Genérico
        description: "Explain a sixth service, highlighting any specialized expertise or unique approach you bring.", // Genérico
        icon: "🌟"
      }
    ]
  },
  es: {
    title: "Tus Servicios", // Cambio de "Nuestros Servicios" a "Tus Servicios"
    subtitle: "Lo Que Tú Ofreces", // Cambio de "Lo Que Ofrecemos" a "Lo Que Tú Ofreces"
    description: "Aquí, puedes mostrar la amplia gama de servicios diseñados para satisfacer las necesidades únicas de tu negocio y ayudarte a alcanzar tus objetivos.", // Ajuste de la descripción
    viewMore: "Ver Más",
    viewLess: "Ver Menos",
    services: [
      {
        title: "[Título de Servicio]", // Genérico
        description: "Describe aquí una de las soluciones clave que proporcionas, explicando su beneficio principal para tus clientes.", // Genérico
        icon: "💡"
      },
      {
        title: "[Título de Servicio]", // Genérico
        description: "Detalla otra de tus ofertas, resaltando cómo aborda un desafío o necesidad específica.", // Genérico
        icon: "📈"
      },
      {
        title: "[Título de Servicio]", // Genérico
        description: "Presenta un tercer servicio esencial, centrándote en el valor único que aporta a tu público objetivo.", // Genérico
        icon: "🛠️"
      },
      {
        title: "[Título de Servicio]", // Genérico
        description: "Desarrolla un cuarto servicio, enfatizando su impacto en la mejora de las operaciones o resultados de tus clientes.", // Genérico
        icon: "🌐"
      },
      {
        title: "[Título de Servicio]", // Genérico
        description: "Esboza un quinto servicio, ilustrando cómo contribuye al crecimiento y éxito de aquellos a quienes sirves.", // Genérico
        icon: "🤝"
      },
      {
        title: "[Título de Servicio]", // Genérico
        description: "Explica un sexto servicio, destacando cualquier experiencia especializada o enfoque único que aportes.", // Genérico
        icon: "🌟"
      }
    ]
  }
};

  const texts = serviceTexts[language];
  const visibleServices = showMore ? texts.services : texts.services.slice(0, 6);

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
      </div>
    </section>
  );
};

export default Services;
