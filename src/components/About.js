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
          Bridging product strategy, engineering execution, and business impact
        </p>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a hybrid product and engineering leader, equally comfortable defining product roadmaps and user 
              experiences as I am architecting technical solutions and leading engineering teams. Currently leading 
              tech services for Converse.com and global retail operations at NIKE/Converse, I've delivered 33% 
              digital revenue growth through strategic product decisions and technical execution, launched digital 
              commerce across 13 European countries, and architected systems supporting <strong>$10M+ in event sales</strong> 
              with <strong>40x traffic spikes</strong>.
            </p>
            <p>
              My background spans both product management and engineering leadership. I've led product redesigns that 
              increased engagement by 26%, directed A/B testing strategies boosting conversions, defined go-to-market 
              strategies for new features, and collaborated with UX, data science, and business stakeholders to deliver 
              customer-centric solutions. This dual perspective allows me to balance customer needs with technical 
              feasibility, prioritize features based on business impact, and translate complex technical concepts into 
              compelling product narratives.
            </p>
            <p>
              Throughout my career, I've focused on being deeply connected across the organization: engineering, product, 
              operations, and business teams. I'm known for absorbing complexity, making data-driven decisions, and 
              driving execution across functional boundaries. When teams need someone who understands both the "what" 
              and the "how," I'm the go-to person because I speak both languages fluently.
            </p>
            <p>
              My work spans product strategy, technical architecture, and operational excellence. I define product 
              roadmaps aligned with business goals, lead digital commerce modernization, implement AI-driven features, 
              architect fraud prevention systems, and direct technology for experiential retail activations at music 
              festivals and sports events. I'm passionate about connecting customer insights, business strategy, and 
              technical innovation to deliver scalable growth and measurable impact.
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
                <li>Product Strategy & Roadmapping</li>
                <li>E-commerce Platform Engineering</li>
                <li>Data-Driven Product Decisions</li>
                <li>Digital Transformation</li>
                <li>Engineering & Product Leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
