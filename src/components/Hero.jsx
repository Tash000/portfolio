import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FlameIcon, MailIcon, GitHubIcon, LinkedInIcon, ArrowDownIcon, PortfolioIcon } from './icons/Icons';
import { heroData, socialLinks } from '../constants';
import avatarImg from '../assets/avatar.png';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = heroData.tagline;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section
      id="hero"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        padding: 'clamp(130px, 14vh, 160px) clamp(16px, 4vw, 24px) clamp(16px, 2.5vh, 28px)',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(28px, 5vw, 48px)',
          alignItems: 'center',
        }}
      >
        {/* Left Column: Energetic Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Status Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'var(--flame-50)',
              border: '1px solid var(--border-light)',
              color: 'var(--flame-700)',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '20px',
              boxShadow: '0 2px 10px var(--border-glow)',
              transition: 'all 0.3s ease',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--flame-500)',
                boxShadow: '0 0 10px var(--flame-500)',
                display: 'inline-block',
              }}
            />
            <span>Open for Robotics & AI Collaborations</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              color: '#0F172A',
              marginBottom: '16px',
            }}
          >
            {heroData.greeting}{' '}
            <span
              style={{
                background: 'var(--gradient-flame)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              {heroData.name}
            </span>
          </h1>

          {/* Typewriter Tagline */}
          <div
            style={{
              minHeight: '2.5rem',
              fontSize: 'clamp(1.1rem, 2.4vw, 1.45rem)',
              fontWeight: 700,
              color: 'var(--flame-600)',
              marginBottom: '16px',
              fontFamily: 'var(--font-main)',
            }}
          >
            <span>{displayText}</span>
            <span
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1.2em',
                background: 'var(--flame-500)',
                verticalAlign: 'middle',
                marginLeft: '4px',
                animation: 'pulseFlameGlow 1s infinite',
              }}
            />
          </div>

          <p
            style={{
              fontSize: '1.08rem',
              color: '#475569',
              lineHeight: 1.7,
              maxWidth: '560px',
              marginBottom: '28px',
            }}
          >
            {heroData.description}. Building physical humanoid robotics, computer vision pipelines, autonomous AGV logic, and intelligent software agents that bring hardware to life.
          </p>

          {/* Pill Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
            {heroData.badges.map((badge, idx) => {
              const emojiMatch = badge.label.match(/^(\p{Extended_Pictographic}(?:\uFE0F|\u200D\p{Extended_Pictographic})*)\s+(.+)$/u);
              const badgeIcon = badge.icon || (emojiMatch ? emojiMatch[1] : null);
              const badgeText = emojiMatch ? emojiMatch[2] : badge.label;

              return (
                <span
                  key={idx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '10px',
                    background: '#FFFFFF',
                    border: '1px solid rgba(255, 107, 0, 0.2)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#334155',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  {badgeIcon && (
                    <PortfolioIcon
                      name={badgeIcon}
                      size="1em"
                      color={badge.color || 'var(--flame-600)'}
                    />
                  )}
                  <span>{badgeText}</span>
                </span>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <a
              href="#projects"
              className="btn-flame"
              style={{
                padding: '14px 28px',
                borderRadius: '14px',
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <FlameIcon size="1.2rem" /> Explore Projects
            </a>

            <a
              href="#contact"
              className="btn-outline-flame"
              style={{
                padding: '13px 26px',
                borderRadius: '14px',
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <MailIcon size="1.1rem" /> Get In Touch
            </a>
          </div>
        </motion.div>

        {/* Right Column: Avatar & Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
        >
          {/* Glowing Aura Ring */}
          <div
            style={{
              position: 'absolute',
              width: 'min(340px, 85vw)',
              height: 'min(340px, 85vw)',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 107, 0, 0.25) 0%, rgba(245, 158, 11, 0.15) 50%, transparent 70%)',
              filter: 'blur(30px)',
              zIndex: 0,
            }}
          />

          {/* Profile Card Container */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(16px)',
              borderRadius: '32px',
              padding: 'clamp(18px, 4vw, 24px)',
              border: '2px solid rgba(255, 107, 0, 0.2)',
              boxShadow: '0 20px 50px rgba(255, 107, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.04)',
              textAlign: 'center',
              maxWidth: 'min(380px, 100%)',
              width: '100%',
            }}
          >
            {/* Avatar with flame gradient border */}
            <div
              style={{
                width: 'clamp(140px, 38vw, 180px)',
                height: 'clamp(140px, 38vw, 180px)',
                borderRadius: '50%',
                margin: '0 auto 20px',
                padding: '5px',
                background: 'var(--gradient-flame)',
                boxShadow: 'var(--shadow-flame)',
              }}
            >
              <img
                src={avatarImg}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = heroData.avatar;
                }}
                alt="Toushif profile"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  display: 'block',
                  background: 'var(--flame-50)',
                }}
              />
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Toushif
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--flame-600)', fontWeight: 600, marginBottom: '20px' }}>
              Robotics & AI Systems Builder
            </p>

            {/* Micro Stats inside Card */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                textAlign: 'left',
                borderTop: '1px solid var(--border-light)',
                paddingTop: '16px',
              }}
            >
              <div style={{ background: 'var(--flame-50)', padding: '10px 14px', borderRadius: '14px' }}>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--flame-700)' }}>Designer</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--flame-900)', fontWeight: 500 }}>CAD & Hardware</div>
              </div>
              <div style={{ background: '#FFFBEB', padding: '10px 14px', borderRadius: '14px' }}>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#B45309' }}>Python & C++</div>
                <div style={{ fontSize: '0.75rem', color: '#78350F', fontWeight: 500 }}>Systems & Logic</div>
              </div>
              <div style={{ background: '#FFF1F2', padding: '10px 14px', borderRadius: '14px' }}>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#BE123C' }}>AI & ML</div>
                <div style={{ fontSize: '0.75rem', color: '#881337', fontWeight: 500 }}>Vision & Agents</div>
              </div>
              <div style={{ background: '#F0FDF4', padding: '10px 14px', borderRadius: '14px' }}>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#15803D' }}>Linux & Backend</div>
                <div style={{ fontSize: '0.75rem', color: '#166534', fontWeight: 500 }}>Embedded & Cloud</div>
              </div>
            </div>

            {/* Social Links inside Profile Card */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginTop: '12px',
              }}
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  borderRadius: '14px',
                  background: '#FFFFFF',
                  border: '1.5px solid var(--border-light)',
                  color: '#0F172A',
                  textDecoration: 'none',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--flame-500)';
                  e.currentTarget.style.color = 'var(--flame-600)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px var(--border-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.color = '#0F172A';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.03)';
                }}
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  borderRadius: '14px',
                  background: '#FFFFFF',
                  border: '1.5px solid var(--border-light)',
                  color: '#0F172A',
                  textDecoration: 'none',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--flame-500)';
                  e.currentTarget.style.color = 'var(--flame-600)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px var(--border-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.color = '#0F172A';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.03)';
                }}
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          marginTop: '32px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(16px)',
          borderRadius: '20px',
          padding: '18px clamp(16px, 3.5vw, 32px)',
          border: '1px solid var(--border-light)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        {heroData.stats.map((stat, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                background: 'var(--gradient-flame)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll Down Indicator */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <a
          href="#about"
          aria-label="Scroll to About section"
          style={{
            color: 'var(--flame-600)',
            fontSize: '1.4rem',
            animation: 'sparkFloat 2s ease-in-out infinite',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'var(--flame-50)',
            border: '1px solid var(--border-light)',
            boxShadow: '0 2px 8px var(--border-glow)',
          }}
        >
          <ArrowDownIcon />
        </a>
      </div>
    </section>
  );
};

export default Hero;
