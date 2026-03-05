import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Clients.css';

const clients = [
  {
    name: 'Nike',
    slug: 'nike',
    color: '#111111',
  },
  {
    name: 'Converse',
    localImage: '/logo-converse.svg',
    darkInvert: true,
    color: '#111111',
  },
  {
    name: 'Bank of America',
    slug: 'bankofamerica',
    color: '#E31837',
  },
  {
    name: 'Merrill Lynch',
    localImage: '/logo-merrill-lynch.png',
    color: '#0072CE',
  },
  {
    name: 'Comcast',
    localImage: '/logo-comcast.png',
    color: '#CC0000',
  },
  {
    name: 'Liberty Mutual',
    localImage: '/logo-liberty-mutual.png',
    color: '#002663',
  },
];

const ClientLogo = ({ client, index }) => {
  const [imgError, setImgError] = useState(false);
  const src = client.localImage || `https://cdn.simpleicons.org/${client.slug}`;
  const isLocalWhiteBg = client.localImage && !client.darkInvert;

  return (
    <motion.div
      className="client-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <div className="client-logo-wrap">
        {!imgError ? (
          <img
            src={src}
            alt={`${client.name} logo`}
            className={`client-logo-img${isLocalWhiteBg ? ' client-logo-img--local' : ''}`}
            onError={() => setImgError(true)}
          />
        ) : (
          <span
            className="client-logo-fallback"
            style={{ color: client.color }}
          >
            {client.name.split(' ').map((w) => w[0]).join('')}
          </span>
        )}
      </div>
      <span className="client-name">{client.name}</span>
    </motion.div>
  );
};

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Companies I've Worked With</h2>
        <p className="section-subtitle">
          Proud to have driven impact across global brands and financial institutions
        </p>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <ClientLogo key={client.slug} client={client} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Clients;
