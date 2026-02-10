import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For now, we'll create a mailto link
    const mailtoLink = `mailto:alexardmunoz@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setFormStatus('Thank you! Your default email client should open with the pre-filled message.');
    
    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setFormStatus('');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'alexardmunoz@gmail.com',
      link: 'mailto:alexardmunoz@gmail.com',
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'New York, NY',
      link: null,
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: '/in/alexardmunoz',
      link: 'https://www.linkedin.com/in/alexardmunoz/',
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: '@alxrdmnz',
      link: 'https://github.com/alxrdmnz',
    },
  ];

  return (
    <section id="contact" className="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Get In Touch</h2>
        <p className="section-subtitle">
          Let's connect and explore opportunities to collaborate
        </p>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-detail">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <span className="contact-label">{item.label}</span>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <FiSend />
              Send Message
            </button>

            {formStatus && <p className="form-status">{formStatus}</p>}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
