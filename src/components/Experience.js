import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiChevronDown } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const [openItems, setOpenItems] = useState([0]); // First item open by default

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const experiences = [
    {
      title: 'Head of Global Retail and Digital Engineering Technology Services – Converse',
      company: 'NIKE',
      period: 'Nov 2019 – Present',
      achievements: [
        'Directed and executed roadmap for end-to-end re-platforming of Converse.com, delivering 33% digital revenue growth and strengthening global e-commerce infrastructure for a $2B brand.',
        'Spearheaded Digital Commerce launch across 13 European countries, enabling scalable expansion, localized market access, and enhanced consumer reach.',
        'Led strategic expansion of Converse By You customization into Europe and China, generating 30% of total revenue through personalized, localized digital experiences.',
        'Manage globally distributed teams handling 3.3K+ monthly incidents at 96%+ SLA, overseeing North America/Western Europe stores, e-commerce reliability, and site reliability engineering.',
        'Develop and execute bot mitigation, fraud prevention, and transaction analysis strategies using Forter, Kasada, and Akamai to protect digital revenue streams.',
        'Architect and own roadmap for scalable launch and supply chain strategies for high-demand events, achieving 40x traffic surges and $10M+ in sales during sneaker drops.',
        'Lead global holiday readiness sustaining 80%+ YoY growth in peak periods.',
        'Designed and implemented enterprise-wide observability framework with Splunk, Catchpoint, and New Relic to enhance system performance and proactive issue resolution.',
        'Led IT Service Management transformation using ServiceNow, PagerDuty, and JIRA, improving operational efficiency and incident response.',
        'Direct technology for pop-up activations (music festivals, sports events) validating new markets, fostering community, unlocking revenue streams, and piloting innovations.',
        'Drive AI adoption across the technology organization, automating processes and building agents that saved thousands of hours in development and operations.',
      ],
    },
    {
      title: 'Director, Data Integration (Interim) – Converse',
      company: 'NIKE',
      period: 'Feb 2025 – Oct 2025',
      achievements: [
        'Led global engineering teams in designing, building, and maintaining data integration, API, and workflow platforms connecting core systems (SAP, IBM MQ, Manhattan WM, ToolsGroup, FlexPLM, Aptos, 3PL vendors).',
        'Directed real-time data integration initiatives on AWS, Apache NiFi, and Kafka streaming.',
        'Managed EDI team in technical documentation, B2B partner onboarding (representing 45% of business), and seamless integrations.',
        'Executed legacy-to-cloud migrations to improve cost efficiency, reliability, and scalability.',
      ],
    },
    {
      title: 'Senior Product Manager, Digital Technology',
      company: 'Digitas',
      period: 'Nov 2017 – Nov 2019',
      achievements: [
        'Led product redesign for Fortune 100 client, increasing YoY engagement by 26% through innovative features and user-centric development.',
        'Directed product managers and developers in A/B testing with Adobe Target, boosting sign-up conversions by 2%.',
        'Collaborated with UX and Data Science teams to deliver solutions and present actionable insights to executive stakeholders.',
      ],
    },
    {
      title: 'Business Systems Analyst II',
      company: 'Liberty Mutual Insurance',
      period: 'Nov 2014 – Nov 2017',
      achievements: [
        'Managed legacy claims system upgrade for $25B premium book, prioritizing features based on market research and business needs.',
        'Built automated reporting tool that retired 78 legacy systems and reduced monthly close time by 20%.',
        'Trained call center teams, driving 50% higher user adoption via demos and hands-on support.',
      ],
    },
    {
      title: 'Technical Consultant',
      company: 'Cognizant Technology Solutions',
      period: 'May 2013 – Nov 2014',
      achievements: [
        'Contributed to mobile redesign project, improving conversion rates and NPS through responsive, user-focused design.',
        'Created automation scripts (Selenium, HP Quality Center), cutting QA testing time by 60%.',
        'Led disaster recovery planning for major insurer, ensuring protection of critical customer data.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Professional Experience</h2>
        <p className="section-subtitle">
          Over a decade of driving innovation and delivering measurable results
        </p>

        <div className="timeline">
          {experiences.map((exp, index) => {
            const isOpen = openItems.includes(index);
            
            return (
              <motion.div
                key={index}
                className={`timeline-item ${isOpen ? 'open' : 'closed'}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-marker">
                  <FiBriefcase />
                </div>
                <div className="timeline-content">
                  <div 
                    className="timeline-header"
                    onClick={() => toggleItem(index)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && toggleItem(index)}
                  >
                    <div className="header-main">
                      <h3>{exp.title}</h3>
                      <span className="company">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                    <motion.div
                      className="chevron"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiChevronDown />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        className="achievements"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
