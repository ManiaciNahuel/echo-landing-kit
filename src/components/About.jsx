
import React from 'react';
import '../styles/About.scss';

const About = ({ language }) => {
  const aboutTexts = {
    en: {
      title: "About Us",
      subtitle: "Who We Are",
      paragraph1: "We are a dedicated team of professionals committed to providing exceptional solutions for our clients. With years of experience in the industry, we understand the unique challenges businesses face today.",
      paragraph2: "Our mission is to help companies achieve their goals through innovative approaches and cutting-edge technology. We pride ourselves on our attention to detail and customer satisfaction.",
      values: "Our Values",
      value1: "Excellence",
      value2: "Innovation",
      value3: "Integrity",
      value1_desc: "We strive for excellence in everything we do.",
      value2_desc: "We embrace new ideas and creative solutions.",
      value3_desc: "We conduct business with honesty and transparency."
    },
    es: {
      title: "Sobre Nosotros",
      subtitle: "Quiénes Somos",
      paragraph1: "Somos un equipo dedicado de profesionales comprometidos con brindar soluciones excepcionales para nuestros clientes. Con años de experiencia en la industria, entendemos los desafíos únicos que enfrentan las empresas hoy en día.",
      paragraph2: "Nuestra misión es ayudar a las empresas a alcanzar sus objetivos mediante enfoques innovadores y tecnología de vanguardia. Nos enorgullecemos de nuestra atención al detalle y la satisfacción del cliente.",
      values: "Nuestros Valores",
      value1: "Excelencia",
      value2: "Innovación",
      value3: "Integridad",
      value1_desc: "Nos esforzamos por la excelencia en todo lo que hacemos.",
      value2_desc: "Adoptamos nuevas ideas y soluciones creativas.",
      value3_desc: "Conducimos negocios con honestidad y transparencia."
    }
  };

  const texts = aboutTexts[language];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">{texts.title}</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>{texts.subtitle}</h3>
            <p>{texts.paragraph1}</p>
            <p>{texts.paragraph2}</p>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder"></div>
          </div>
        </div>
        
        <div className="values-container">
          <h3>{texts.values}</h3>
          <div className="values-grid">
            <div className="value-card">
              <h4>{texts.value1}</h4>
              <p>{texts.value1_desc}</p>
            </div>
            <div className="value-card">
              <h4>{texts.value2}</h4>
              <p>{texts.value2_desc}</p>
            </div>
            <div className="value-card">
              <h4>{texts.value3}</h4>
              <p>{texts.value3_desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
