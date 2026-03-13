import React from 'react';
import { motion } from 'framer-motion';
import { FiPackage, FiExternalLink } from 'react-icons/fi';
import './Packages.css';

const Packages = () => {
  return (
    <section id="packages" className="packages-section">
      <motion.div
        className="packages-inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="packages-icon-wrap">
          <FiPackage className="packages-icon" />
        </div>
        <h2>For Businesses</h2>
        <p className="section-subtitle">
          Fixed-scope digital experience packages for small-to-mid-size businesses. Clear deliverables, optional add-ons, and one point of contact.
        </p>
        <p className="packages-teaser">
          Three tiers: conversion-ready site (Foundations), full redesign with integrations (Growth), and e-commerce or custom builds (Full Stack). View the one-pager for scope, timelines, and add-ons.
        </p>
        <motion.div
          className="packages-cta"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="/digital-packages-one-pager.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary packages-cta-primary"
            aria-label="View packages and get a quote (opens in new window)"
          >
            <FiExternalLink />
            View packages & get a quote
          </a>
          <a href="#contact" className="btn btn-secondary packages-cta-secondary">
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Packages;
