import React from 'react';
import { motion } from 'framer-motion';
import { FiMusic, FiZap, FiTrendingUp, FiGlobe, FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    type: 'work',
    label: 'Work Project',
    icon: <FiZap />,
    title: 'Sneaker Launch Experience',
    company: 'Converse',
    description:
      'Built the end-to-end sneaker launch platform from 0 to 1: a branded waiting room and queue experience that puts fans in line for high-demand drops before they go live. Scaled to a record-breaking $10M drop with 40x traffic surge, with zero downtime. Sneaker Launch now drives 7-10% of total digital revenue.',
    stats: [
      { value: '$10M', label: 'Record Drop' },
      { value: '40x', label: 'Traffic Surge' },
      { value: '7–10%', label: 'of Digital Revenue' },
    ],
    image: '/sneaker-launch.png',
    imageAlt: 'Converse Sneaker Launch, branded waiting room experience',
    tech: ['Salesforce Commerce Cloud', 'Queue-it', 'Akamai CDN', 'Apache Kafka', 'React'],
  },
  {
    type: 'work',
    label: 'Work Project',
    icon: <FiGlobe />,
    title: 'Converse.com Global Replatform',
    company: 'Converse',
    description:
      'Replatform of Converse.com from the Nike.com infrastructure, establishing an independent, scalable global e-commerce foundation. Drove 33% digital revenue growth and expanded reach across 16 European countries, 6 currencies, and 11 languages, enabling localized market access and long-term scalable expansion for a global consumer base.',
    stats: [
      { value: '33%', label: 'Digital Revenue Growth' },
      { value: '16', label: 'European Countries' },
      { value: '11', label: 'Languages' },
    ],
    image: '/converse-web.png',
    imageAlt: 'Converse.com global e-commerce replatform',
    tech: ['Salesforce Commerce Cloud', 'Akamai CDN', 'Multi-currency', 'Localization', 'CI/CD'],
  },
  {
    type: 'work',
    label: 'Work Project',
    icon: <FiTrendingUp />,
    title: 'Merrill.com Digital Experience',
    company: 'Bank of America / Merrill Lynch',
    description:
      'Led the product redesign of Merrill.com for Fortune 100 client Bank of America, delivering a suite of personal finance, investment, and college savings calculators to help customers chart their financial path. Drove a 26% YoY engagement lift and a 2% boost in sign-up conversions through rigorous A/B testing and data-driven UX iteration.',
    stats: [
      { value: '26%', label: 'YoY Engagement' },
      { value: '2%', label: 'Conversion Lift' },
    ],
    image: '/merrill-web.png',
    imageAlt: 'Merrill.com digital experience redesign for Bank of America',
    tech: ['Adobe Target', 'A/B Testing', 'React', 'Data Science', 'UX Design'],
  },
  {
    type: 'personal',
    label: 'Side Project',
    icon: <FiMusic />,
    title: 'TempoFlow',
    description:
      'Build a Spotify playlist from the artists and tracks you love. Sign in, pick your favorites, and we\'ll generate a playlist you can save straight to your account.',
    liveUrl: 'https://tempoflowmusic.vercel.app/',
    repoUrl: 'https://github.com/alxrdmnz/my-music-app',
    image: '/tempoflow.png',
    imageAlt: 'TempoFlow, Spotify playlist builder from your favorite artists',
    tech: ['Next.js', 'Spotify API', 'OAuth PKCE'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Projects</h2>
        <p className="section-subtitle">
          Work I'm proud of, from enterprise builds to personal experiments
        </p>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <div className="project-header-row">
                  <div className={`project-icon project-icon--${project.type}`}>
                    {project.icon}
                  </div>
                  <span className={`project-badge project-badge--${project.type}`}>
                    {project.label}
                  </span>
                </div>
                {project.company && (
                  <p className="project-company">{project.company}</p>
                )}
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {project.stats && (
                  <div className="project-stats">
                    {project.stats.map((s) => (
                      <div key={s.label} className="project-stat">
                        <span className="project-stat-value">{s.value}</span>
                        <span className="project-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {project.tech && (
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="project-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {(project.liveUrl || project.repoUrl) && (
                  <div className="project-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link-primary"
                      >
                        <FiExternalLink />
                        Live site
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link project-link-secondary"
                      >
                        <FiGithub />
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
