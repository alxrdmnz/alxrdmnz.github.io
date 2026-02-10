import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiTool, FiAward, FiTrendingUp } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiTrendingUp />,
      title: 'Product Management',
      skills: [
        'Product Strategy & Roadmapping',
        'User Experience Design',
        'A/B Testing & Experimentation',
        'Data-Driven Decision Making',
        'Stakeholder Management',
        'Go-to-Market Strategy',
        'Feature Prioritization',
        'Customer Research & Insights',
      ],
    },
    {
      icon: <FiCode />,
      title: 'Programming & Development',
      skills: [
        'React / Next.js',
        'Python',
        'Java',
        'NodeJS',
        'CSS3 / HTML5',
        'REST APIs',
        'Spring Boot Framework',
        'Claude',
        'Cursor',
      ],
    },
    {
      icon: <FiServer />,
      title: 'Cloud & Infrastructure',
      skills: [
        'AWS & Azure',
        'Salesforce Commerce Cloud',
        'ServiceNow',
        'CI/CD Pipelines (Jenkins)',
        'Apache Kafka',
        'Akamai & Cloudflare CDN',
        'Apache NiFi',
      ],
    },
    {
      icon: <FiDatabase />,
      title: 'Data & Integration',
      skills: [
        '3PL Integrations',
        'Order Management Systems',
        'Apache Kafka',
        'Supply Chain Management',
        'Payment Integrations',
        'Point of Sales Systems',
      ],
    },
    {
      icon: <FiTool />,
      title: 'Tools & Security',
      skills: [
        'Splunk',
        'New Relic',
        'Kasada Bot Manager',
        'Fraud Protection',
        'Github',
        'JIRA',
        'PagerDuty',
        'Catchpoint',
      ],
    },
  ];

  const certificationCategories = [
    {
      category: 'Leadership & Product Management',
      certs: [
        'Boston\'s Future Leaders Program - Harvard Business School',
        'Digital Product Management - University of Virginia',
        'Certified Product Manager - General Assembly',
      ],
    },
    {
      category: 'Cloud & Infrastructure',
      certs: [
        'Certified Cloud Practitioner - Amazon Web Services',
      ],
    },
    {
      category: 'Agile & Operations',
      certs: [
        'Certified Scrum Developer - Scrum Alliance',
        'ITIL 4 Foundations - AXELOS Global Best Practice',
      ],
    },
    {
      category: 'Security & Observability',
      certs: [
        'Bot Manager Advanced - Akamai',
        'Certified Power User - Splunk',
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Skills & Expertise</h2>
        <p className="section-subtitle">
          Comprehensive technical proficiency and industry certifications
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="certifications"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="certifications-header">
            <FiAward />
            <h3>Certifications & Qualifications</h3>
          </div>
          <div className="certifications-grid">
            {certificationCategories.map((category, index) => (
              <div key={index} className="cert-category">
                <h4 className="cert-category-title">{category.category}</h4>
                <div className="cert-list">
                  {category.certs.map((cert, i) => (
                    <div key={i} className="cert-item">
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
