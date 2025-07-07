import React, { useEffect } from 'react';
import '../styles/About.scss';

const About = ({ language }) => {

  const aboutTexts = {
    en: {
      title: "About Us",
      subtitle: "Who We Are",
      paragraph1: "Every business has a unique story and a clear vision. This section is the perfect space for you to share who you are, describing the essence, values, and passion that drive your brand.",
      paragraph2: "Here you can detail what motivates you, your mission, and your goals, explaining how you turn your vision into reality. Furthermore, it's an opportunity to express why you exist, highlighting the problem you solve or the specific need you fulfill for your own clients.",
      values: "Our Values",
      value1: "Our Value",
      value2: "Our Value",
      value3: "Our Value",
      value4: "Our Value",
      value5: "Our Value",
      value6: "Our Value",
      value1_desc: "Describe here a fundamental pillar that guides every decision and action in your business.",
      value2_desc: "Express here an essential quality that sets your brand apart and defines your way of working.",
      value3_desc: "Detail here the ethical principle or central philosophy that underpins all your operations.",
      value4_desc: "Describe here a fundamental pillar that guides every decision and action in your business.",
      value5_desc: "Express here an essential quality that sets your brand apart and defines your way of working.",
      value6_desc: "Detail here the ethical principle or central philosophy that underpins all your operations."
    },
    es: {
      title: "Sobre Nosotros",
      subtitle: "Quiénes Somos",
      paragraph1: "Cada negocio tiene una historia única y una visión clara. Esta sección es el espacio perfecto para que compartas quién eres, describiendo la esencia, los valores y la pasión que impulsan tu marca.",
      paragraph2: "Aquí podrás detallar qué te mueve, tu misión y tus objetivos, explicando cómo transformas tu visión en realidad. Además, es la oportunidad de expresar por qué existes, destacando el problema que resuelves o la necesidad específica que satisfaces para tus propios clientes.",
      values: "Nuestros Valores",
      value1: "Tu Valor",
      value2: "Tu Valor",
      value3: "Tu Valor",
      value4: "Tu Valor",
      value5: "Tu Valor",
      value6: "Tu Valor",
      value1_desc: "Describe aquí un pilar fundamental que guía cada decisión y acción en tu negocio.",
      value2_desc: "Expresa aquí una cualidad esencial que diferencia tu marca y define tu forma de trabajar.",
      value3_desc: "Detalla aquí el principio ético o la filosofía central que sustenta todas tus operaciones.",
      value4_desc: "Describe aquí un pilar fundamental que guía cada decisión y acción en tu negocio.",
      value5_desc: "Expresa aquí una cualidad esencial que diferencia tu marca y define tu forma de trabajar.",
      value6_desc: "Detalla aquí el principio ético o la filosofía central que sustenta todas tus operaciones."
    }
  };

  const texts = aboutTexts[language];

  return (
    <section id="about" className="about-section" >
      <div className="about-container">
        <h2 className="section-title">{texts.title}</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>{texts.subtitle}</h3>
            <p>{texts.paragraph1}</p>
            <p>{texts.paragraph2}</p>
          </div>
          
          <div className="about-image">
            <div
              className="image-placeholder"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-anchor-placement="center-bottom"
              data-aos-once="false"
              data-aos-mirror="true"
            >
            </div>
          </div>
        </div>
        
        <div className="values-container">
          <h3>{texts.values}</h3>
          <div className="values-grid">
            <div className="value-card" data-aos="fade-up-right">
              <h4>{texts.value1}</h4>
              <p>{texts.value1_desc}</p>
            </div>
            <div className="value-card" data-aos="fade-up">
              <h4>{texts.value2}</h4>
              <p>{texts.value2_desc}</p>
            </div>
            <div className="value-card" data-aos="fade-up-left">
              <h4>{texts.value3}</h4>
              <p>{texts.value3_desc}</p>
            </div>
            <div className="value-card" data-aos="fade-up-right">
              <h4>{texts.value4}</h4>
              <p>{texts.value4_desc}</p>
            </div>
            <div className="value-card" data-aos="fade-up">
              <h4>{texts.value5}</h4>
              <p>{texts.value5_desc}</p>
            </div>
            <div className="value-card" data-aos="fade-up-left">
              <h4>{texts.value6}</h4>
              <p>{texts.value6_desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
