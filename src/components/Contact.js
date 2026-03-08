import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import './Contact.css';

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

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Let's Work Together</h2>
        <p className="section-subtitle">
          Open to client projects, new career opportunities, and conversations worth having
        </p>

        <div className="contact-cards">
          {contactInfo.map((item, index) => {
            const CardWrapper = item.link ? motion.a : motion.div;
            const wrapperProps = item.link
              ? {
                  href: item.link,
                  target: item.link.startsWith('http') ? '_blank' : '_self',
                  rel: item.link.startsWith('http') ? 'noopener noreferrer' : '',
                }
              : {};

            return (
              <CardWrapper
                key={index}
                className={`contact-card${item.link ? ' contact-card--link' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                {...wrapperProps}
              >
                <div className="contact-icon">{item.icon}</div>
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </CardWrapper>
            );
          })}
        </div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="mailto:alexardmunoz@gmail.com" className="btn btn-primary">
            <FiMail /> Say Hello
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
