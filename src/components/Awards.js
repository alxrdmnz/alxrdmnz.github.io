import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiTrendingUp, FiStar } from 'react-icons/fi';
import './Awards.css';

const Awards = () => {
  const awards = [
    {
      icon: <FiAward />,
      title: 'Nike Milestone Award',
      description: 'Awarded by Nike Execs for exceptional contributions and achievements in digital transformation and technology leadership',
      year: '',
    },
    {
      icon: <FiStar />,
      title: 'Boston\'s Future Leaders Program',
      description: 'Harvard Business School - Selected for demonstrated leadership potential and innovation',
      year: '',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Significant Performance',
      description: 'Prior 5 Years – Yearly Review - Recognized for outstanding leadership and delivery of measurable business impact',
      year: '',
    },
  ];

  const performanceRatings = [
    {
      rating: '2x Exceptional',
      description: 'Exceeded all expectations with outstanding contributions',
    },
    {
      rating: '3x Highly Successful',
      description: 'Consistently delivered superior results and performance',
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
          Recognized for excellence in leadership and innovation
        </p>

        <div className="awards-grid">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="award-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="award-icon">{award.icon}</div>
              <h3>{award.title}</h3>
              <p>{award.description}</p>
              {award.year && <span className="award-year">{award.year}</span>}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="performance-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Performance Excellence</h3>
          <div className="performance-grid">
            {performanceRatings.map((item, index) => (
              <div key={index} className="performance-card">
                <div className="performance-rating">{item.rating}</div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Awards;
