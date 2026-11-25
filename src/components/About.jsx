import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioIcon } from './icons/Icons';
import { aboutData } from '../constants';

const About = () => {
  return (
    <section id="about" style={{ padding: 'clamp(60px, 10vh, 100px) clamp(16px, 4vw, 24px)', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '50px' }}
      >
        <h2
          style={{
            fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
            fontWeight: 800,
            color: '#0F172A',
            letterSpacing: '-0.02em',
          }}
        >
          From Hardware To{' '}
          <span
            style={{
              background: 'var(--gradient-flame)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Autonomous AI
          </span>
        </h2>
        <p
          style={{
            color: '#475569',
            maxWidth: '750px',
            margin: '16px auto 0',
            fontSize: '1.05rem',
            lineHeight: '1.7',
          }}
        >
          {aboutData.intro}
        </p>
      </motion.div>

      {/* 4 Feature Pillars */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
          gap: 'clamp(16px, 3vw, 24px)',
        }}
      >
        {aboutData.cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '32px 26px',
              border: '1.5px solid var(--border-light)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = 'var(--flame-500)';
              e.currentTarget.style.boxShadow = '0 16px 36px var(--border-glow), 0 4px 12px rgba(0, 0, 0, 0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-light)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)';
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '18px',
                background: 'var(--flame-50)',
                border: '1.5px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                color: 'var(--flame-600)',
                marginBottom: '20px',
                boxShadow: '0 4px 12px var(--border-light)',
              }}
            >
              <PortfolioIcon name={card.icon} />
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
              {card.title}
            </h3>

            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: '1.65', flexGrow: 1 }}>
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
