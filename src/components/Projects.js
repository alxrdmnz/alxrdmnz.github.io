import React from 'react';
import { motion } from 'framer-motion';
import { FiMusic, FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'TempoFlow',
    description:
      'Build a Spotify playlist from the artists and tracks you love. Sign in, pick your favorites, and we\'ll generate a playlist you can save straight to your account.',
    liveUrl: 'https://tempoflowmusic.vercel.app/',
    repoUrl: 'https://github.com/alxrdmnz/my-music-app',
    image: '/tempoflow.png',
    imageAlt: 'TempoFlow — Spotify playlist builder from your favorite artists',
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
        <h2>Side Projects</h2>
        <p className="section-subtitle">
          Things I build for fun and to keep learning
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
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-link"
                aria-label={`View ${project.title} live site`}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project-image"
                />
              </a>
              <div className="project-content">
                <div className="project-icon">
                  <FiMusic />
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.tech && (
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="project-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                  >
                    <FiExternalLink />
                    Live site
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-secondary"
                  >
                    <FiGithub />
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
