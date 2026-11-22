import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiMail, FiZap, FiCode } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import { heroData, socialLinks } from '../constants';

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
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        padding: '130px 24px 60px',
        maxWidth: '1280px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
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
              background: '#FFF7ED',
              border: '1px solid #FDBA74',
              color: '#C2410C',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '20px',
              boxShadow: '0 2px 8px rgba(255, 107, 0, 0.1)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#FF6B00',
                boxShadow: '0 0 10px #FF6B00',
                display: 'inline-block',
              }}
            />
            <span>🔥 Open for Robotics & AI Collaborations</span>
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
                background: 'linear-gradient(135deg, #FF4500 0%, #FF6B00 50%, #FFA500 100%)',
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
              color: '#EA580C',
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
                background: '#FF6B00',
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
            {heroData.badges.map((badge, idx) => (
              <span
                key={idx}
                style={{
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
                {badge.label}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            <a
              href="#projects"
              className="btn-flame"
              style={{
                padding: '14px 28px',
                borderRadius: '14px',
                fontSize: '1rem',
              }}
            >
              <FaFire style={{ fontSize: '1.2rem' }} /> Explore Projects
            </a>

            <a
              href="#contact"
              className="btn-outline-flame"
              style={{
                padding: '13px 26px',
                borderRadius: '14px',
                fontSize: '1rem',
              }}
            >
              <FiMail style={{ fontSize: '1.1rem' }} /> Get In Touch
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FFFFFF',
                border: '1.5px solid #E2E8F0',
                color: '#1E293B',
                fontSize: '1.3rem',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF6B00';
                e.currentTarget.style.color = '#FF6B00';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.color = '#1E293B';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FiGithub />
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
              width: '340px',
              height: '340px',
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
              padding: '24px',
              border: '2px solid rgba(255, 107, 0, 0.2)',
              boxShadow: '0 20px 50px rgba(255, 107, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.04)',
              textAlign: 'center',
              maxWidth: '380px',
              width: '100%',
            }}
          >
            {/* Avatar with flame gradient border */}
            <div
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                margin: '0 auto 20px',
                padding: '5px',
                background: 'linear-gradient(135deg, #FF4500, #FF8A00, #FBBF24)',
                boxShadow: '0 10px 30px rgba(255, 107, 0, 0.35)',
              }}
            >
              <img
                src={heroData.avatar}
                alt="Toushif profile"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  display: 'block',
                  background: '#FFF7ED',
                }}
              />
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Toushif
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#EA580C', fontWeight: 600, marginBottom: '20px' }}>
              Robotics & AI Systems Builder
            </p>

            {/* Micro Stats inside Card */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                textAlign: 'left',
                borderTop: '1px solid rgba(255, 107, 0, 0.15)',
                paddingTop: '16px',
              }}
            >
              <div style={{ background: '#FFF7ED', padding: '10px 14px', borderRadius: '14px' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#C2410C' }}>ESP32-S3</div>
                <div style={{ fontSize: '0.75rem', color: '#7C2D12', fontWeight: 500 }}>Dual-Controller</div>
              </div>
              <div style={{ background: '#FFFBEB', padding: '10px 14px', borderRadius: '14px' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#B45309' }}>Jetson & ROS</div>
                <div style={{ fontSize: '0.75rem', color: '#78350F', fontWeight: 500 }}>Edge Vision</div>
              </div>
              <div style={{ background: '#FFF1F2', padding: '10px 14px', borderRadius: '14px' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#BE123C' }}>Doosan Cobot</div>
                <div style={{ fontSize: '0.75rem', color: '#881337', fontWeight: 500 }}>Object Sorting</div>
              </div>
              <div style={{ background: '#F0FDF4', padding: '10px 14px', borderRadius: '14px' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#15803D' }}>Autonomous</div>
                <div style={{ fontSize: '0.75rem', color: '#166534', fontWeight: 500 }}>AGV Logic</div>
              </div>
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
          marginTop: '60px',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(16px)',
          borderRadius: '20px',
          padding: '20px 32px',
          border: '1px solid rgba(255, 107, 0, 0.18)',
          boxShadow: '0 10px 30px rgba(255, 107, 0, 0.06)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
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
                background: 'linear-gradient(135deg, #FF4500, #FF8A00)',
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
          marginTop: '40px',
        }}
      >
        <a
          href="#about"
          aria-label="Scroll to About section"
          style={{
            color: '#FF6B00',
            fontSize: '1.4rem',
            animation: 'sparkFloat 2s ease-in-out infinite',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(255, 107, 0, 0.08)',
            border: '1px solid rgba(255, 107, 0, 0.25)',
          }}
        >
          <FiArrowDown />
        </a>
      </div>
    </section>
  );
};

export default Hero;
