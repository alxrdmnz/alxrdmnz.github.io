import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiTrendingUp, FiStar, FiZap, FiCheckCircle } from 'react-icons/fi';
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
      icon: <FiZap />,
      title: '2x Exceptional Rating',
      description: 'Earned the highest possible annual performance rating twice — awarded to fewer than 5% of the organization.',
    },
    {
      icon: <FiCheckCircle />,
      title: '3x Highly Successful Rating',
      description: 'Consistently rated Highly Successful across three consecutive review cycles, reflecting sustained high performance.',
    },
    {
      icon: <FiTrendingUp />,
      title: '5 Years of Top-Tier Performance',
      description: 'Five consecutive years of top performance ratings across the Nike organization — a record of consistent excellence.',
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
