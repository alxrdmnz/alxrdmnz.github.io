import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiTrendingUp, FiStar } from 'react-icons/fi';
import './Awards.css';

const Awards = () => {
  const awards = [
    {
      icon: <FiAward />,
      title: 'Nike Milestone Award',
      description: 'Awarded by Nike executives for digital transformation leadership and measurable technology impact across global operations.',
    },
    {
      icon: <FiStar />,
      title: "Boston's Future Leaders Program",
      description: 'Competitively selected for Harvard Business School\'s leadership cohort, recognized for innovation and leadership potential.',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Consistent Excellence, 13-Year Career',
      description: 'A career-long record of top performance. Most recently at Nike with 6 consecutive years of high-performance ratings, including 2 Exceptional and 3 Highly Successful reviews. Consistent across every role, every company, every year.',
    },
  ];

  return (
    <section id="awards" className="awards">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Awards & Recognition</h2>
        <p className="section-subtitle">
          A track record of performance recognized at the highest levels
        </p>

        <div className="awards-grid">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="award-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="award-icon">{award.icon}</div>
              <h3>{award.title}</h3>
              <p>{award.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Awards;
