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
        'Define and execute product roadmap for end-to-end re-platforming of Converse.com, delivering 33% digital revenue growth through strategic feature prioritization, user research, and cross-functional alignment across engineering, design, and business teams.',
        'Led product strategy and go-to-market execution for Digital Commerce launch across 13 European countries, conducting market research, defining localization requirements, and driving adoption through data-driven iterations.',
        'Owned product vision for Converse By You customization expansion into Europe and China, generating 30% of total revenue through customer insight analysis, A/B testing, and personalized experience design.',
        'Manage globally distributed engineering teams handling 3.3K+ monthly incidents at 96%+ SLA, balancing product innovation with operational reliability and customer experience metrics.',
        'Develop and execute product strategy for bot mitigation, fraud prevention, and transaction security using Forter, Kasada, and Akamai, protecting digital revenue streams while optimizing conversion rates.',
        'Architect product and technical roadmap for high-demand product launches, achieving 40x traffic surges and $10M+ in sales through capacity planning, user flow optimization, and real-time monitoring.',
        'Lead product planning for global holiday readiness, sustaining 80%+ YoY growth through feature rollouts, performance optimization, and customer journey improvements.',
        'Define product requirements and implement enterprise-wide observability framework with Splunk, Catchpoint, and New Relic to enhance customer experience through proactive issue detection.',
        'Led IT Service Management product transformation using ServiceNow, PagerDuty, and JIRA, improving operational efficiency through user-centered design and workflow optimization.',
        'Direct technology and product strategy for experiential retail pop-ups at music festivals and sports events, validating product-market fit, gathering customer feedback, and piloting innovations.',
        'Champion AI product adoption across the organization, defining use cases, measuring ROI, and building automation agents that saved thousands of hours while improving customer experiences.',
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
        'Led end-to-end product redesign for Fortune 100 client, conducting user research, defining product requirements, prioritizing features, and driving execution across design and engineering teams—resulting in 26% increase in YoY engagement.',
        'Owned A/B testing strategy and experimentation roadmap using Adobe Target, designing tests, analyzing conversion metrics, and iterating based on user behavior data to boost sign-up conversions by 2%.',
        'Collaborated with UX designers and data scientists to define product vision, create customer journey maps, validate hypotheses through analytics, and present product performance insights to C-level stakeholders.',
        'Managed product backlog, sprint planning, and stakeholder communications, balancing business objectives with user needs and technical constraints.',
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
