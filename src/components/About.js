import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>About Me</h2>
        <p className="section-subtitle">
          Connecting technology, operations, and business impact
        </p>

        <div className="about-content">
          <div className="about-text">
            <p>
              I currently lead tech services for Converse.com and global retail operations at NIKE/Converse. 
              My teams have delivered 33% digital revenue growth through end-to-end re-platforming and 
              launched digital commerce across 13 European countries. We support <strong>3.3K+ incidents per month 
              at 96%+ SLA</strong>, architect systems that withstand <strong>40x traffic spikes</strong>, and enable 
              high-demand product launches driving <strong>$10M+ in event sales</strong>.
            </p>
            <p>
              Throughout my career, I've focused on being deeply connected across the organization. 
              I'm known for having visibility into what's happening in every corner, absorbing complexity, 
              and driving execution. When teams need support or information, I'm often the go-to person 
              because I understand how to connect the dots and keep things moving forward.
            </p>
            <p>
              My work spans the full technology spectrum for a $2B brand. I lead initiatives in digital 
              commerce modernization, AI-driven automation, fraud prevention and bot mitigation, 
              observability frameworks using Splunk and New Relic, and supply chain integration across 
              SAP, IBM MQ, Manhattan WM, and 3PL vendors. I also direct technology for pop-up activations 
              at music festivals and sports events, validating new markets and piloting innovations.
            </p>
            <p>
              I'm passionate about connecting engineering, operations, retail, and emerging tech to unlock 
              scalable revenue growth and operational excellence. My leadership style focuses on elevating 
              teams, working through complex challenges systematically, and delivering measurable impact.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Education</h3>
              <p><strong>Bachelor's Degree</strong></p>
              <p>Information Management & Technology</p>
              <p>Syracuse University</p>
            </div>

            <div className="highlight-card">
              <h3>Current Role</h3>
              <p><strong>Head of Global Retail and Digital Engineering</strong></p>
              <p>Technology Services – Converse</p>
              <p>NIKE, Inc. (Nov 2019 – Present)</p>
            </div>

            <div className="highlight-card">
              <h3>Specializations</h3>
              <ul>
                <li>E-commerce Platform Scaling</li>
                <li>Digital Transformation</li>
                <li>AI-Enabled Solutions</li>
                <li>Global Systems Architecture</li>
                <li>Team Leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
