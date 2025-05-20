
import React, { useState } from 'react';
import '../styles/Contact.scss';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactTexts = {
    en: {
      title: "Contact Us",
      subtitle: "Get In Touch",
      description: "Have questions or need more information? Fill out the form below and we'll get back to you as soon as possible.",
      name: "Full Name",
      email: "Email Address",
      subject: "Subject",
      message: "Your Message",
      submit: "Send Message",
      required: "This field is required",
      invalidEmail: "Please enter a valid email address",
      success: "Your message has been sent successfully!",
      error: "There was an error sending your message. Please try again.",
      address: "123 Business Avenue, City",
      phone: "+1 (234) 567-8901",
      email_contact: "info@company.com"
    },
    es: {
      title: "Contáctanos",
      subtitle: "Ponte en Contacto",
      description: "¿Tienes preguntas o necesitas más información? Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      subject: "Asunto",
      message: "Tu Mensaje",
      submit: "Enviar Mensaje",
      required: "Este campo es obligatorio",
      invalidEmail: "Por favor ingresa un correo electrónico válido",
      success: "¡Tu mensaje ha sido enviado con éxito!",
      error: "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.",
      address: "Avenida Empresarial 123, Ciudad",
      phone: "+34 123 456 789",
      email_contact: "info@empresa.com"
    }
  };

  const texts = contactTexts[language];

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = texts.required;
    if (!formData.email.trim()) {
      errors.email = texts.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = texts.invalidEmail;
    }
    if (!formData.subject.trim()) errors.subject = texts.required;
    if (!formData.message.trim()) errors.message = texts.required;
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error for this field when typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">{texts.title}</h2>
        <h3>{texts.subtitle}</h3>
        <p className="contact-description">{texts.description}</p>
        
        <div className="contact-content">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{texts.name}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">{texts.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">{texts.subject}</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className={formErrors.subject ? 'error' : ''}
                />
                {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">{texts.message}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={formErrors.message ? 'error' : ''}
                ></textarea>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>
              
              <button type="submit" className="submit-button">{texts.submit}</button>
              
              {submitStatus === 'success' && (
                <div className="success-message">{texts.success}</div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message form-error">{texts.error}</div>
              )}
            </form>
          </div>
          
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <p>{texts.address}</p>
            </div>
            <div className="info-item">
              <div className="info-icon">📞</div>
              <p>{texts.phone}</p>
            </div>
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <p>{texts.email_contact}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
