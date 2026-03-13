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
          Product strategy, engineering execution, and business impact
        </p>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hybrid product and engineering leader with 12+ years at NIKE/Converse. I'm equally comfortable 
              defining product roadmaps as I am architecting technical systems, delivering <strong>33% digital 
              revenue growth</strong>, scaling commerce across 16 countries, and engineering platforms that handle{' '}
              <strong>$10M+ drops at 40x traffic</strong>.
            </p>
            <p>
              I absorb complexity and drive execution across engineering, product, operations, and 
              business teams. I translate technical depth into business impact and customer insight into shipped work.
            </p>
            <p>
              Beyond my leadership role, I take on select client engagements for companies and founders looking to 
              build or modernize their digital presence. Whether it's a new website, an e-commerce platform, 
              an end-to-end customer journey, or a product built from scratch, I bring the same standards I apply 
              at global scale to every project. If you have something you're building, get in touch.
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
              <p><strong>Head of Global Retail, Digital & Engineering</strong></p>
              <p>Converse at NIKE, Inc.</p>
              <p>Nov 2019 – Present</p>
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
