
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
    title: "Contact YOUR COMPANY", // Cambio a genérico para el título principal
    subtitle: "Get In Touch With Your Clients", // Énfasis en "Your Business"
    description: "Here's where your customers can easily reach you. Whether they have questions, need more information, or want to discuss a project, this is their direct line to your team.", // Descripción re-enfocada
    name: "Your Name", // Campo para que el cliente imagine el nombre de SU cliente
    email: "Your Email Address", // Campo para el email de SU cliente
    subject: "Subject of Your Inquiry", // Más genérico para el asunto de SU cliente
    message: "Your Message Here", // El mensaje de SU cliente
    submit: "Send Message",
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
    success: "Your message has been sent successfully!", // Mensaje de éxito para el envío del formulario de SU cliente
    error: "There was an error sending your message. Please try again.", // Mensaje de error para el envío del formulario de SU cliente
    address: "123 Street, California", // Placeholder para la dirección del cliente
    phone: "+19112030405", // Placeholder para el teléfono del cliente
    email_contact: "emailadress@mail.com" // Placeholder para el email del cliente
  },
  es: {
    title: "Contacta a TU MARCA", // Cambio a genérico para el título principal
    subtitle: "Permiti que se tus clientes se pongan en contacto", // Énfasis en "Tu Negocio"
    description: "Aquí es donde tus clientes pueden contactarte fácilmente. Ya sea que tengan preguntas, necesiten más información o quieran discutir un proyecto, esta es su línea directa con tu equipo.", // Descripción re-enfocada
    name: "Tu Nombre Completo", // Campo para que el cliente imagine el nombre de SU cliente
    email: "Tu Correo Electrónico", // Campo para el email de SU cliente
    subject: "Asunto de Tu Consulta", // Más genérico para el asunto de SU cliente
    message: "Tu Mensaje Aquí", // El mensaje de SU cliente
    submit: "Enviar Mensaje",
    required: "Este campo es obligatorio",
    invalidEmail: "Por favor ingresa un correo electrónico válido",
    success: "¡Tu mensaje ha sido enviado con éxito!", // Mensaje de éxito para el envío del formulario de SU cliente
    error: "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.", // Mensaje de error para el envío del formulario de SU cliente
    address: "Calle Numero 1234", // Placeholder para la dirección del cliente
    phone: "+549112030405", // Placeholder para el teléfono del cliente
    email_contact: "correoelectronico@mail.com" // Placeholder para el email del cliente
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
