import React from 'react';
import { FlameIcon, GitHubIcon, LinkedInIcon, MailIcon, ArrowUpIcon } from './icons/Icons';
import { socialLinks, navLinks } from '../constants';
import ThemeControl from './ThemeControl';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        background: '#FFFFFF',
        borderTop: '2px solid var(--border-light)',
        padding: '48px clamp(16px, 4vw, 24px) 32px',
        color: '#64748B',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        {/* Docked Theme & Atmosphere Controller (No timer, scroll-docked) */}
        <ThemeControl />

        <div
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            paddingBottom: '24px',
            borderBottom: '1px solid #F1F5F9',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                background: 'var(--gradient-flame)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '1rem',
              }}
            >
              <FlameIcon />
            </span>
            <span
              style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#0F172A',
                letterSpacing: '-0.02em',
              }}
            >
              Toushif
            </span>
          </div>

          {/* Quick Nav */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                style={{
                  color: '#475569',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--flame-600)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="btn-outline-flame"
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85rem',
            }}
          >
            <ArrowUpIcon /> Back to top
          </button>
        </div>

        {/* Bottom credits & social links */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.88rem',
          }}
        >
          <div>
            © {currentYear} <strong>Toushif</strong>. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '14px' }}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                color: '#475569',
                fontSize: '1.25rem',
                transition: 'color 0.2s ease, transform 0.2s ease',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--flame-600)';
                e.currentTarget.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#475569';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <GitHubIcon />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                color: '#475569',
                fontSize: '1.25rem',
                transition: 'color 0.2s ease, transform 0.2s ease',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--flame-600)';
                e.currentTarget.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#475569';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <LinkedInIcon />
            </a>
            <a
              href={socialLinks.email}
              aria-label="Email"
              style={{
                color: '#475569',
                fontSize: '1.25rem',
                transition: 'color 0.2s ease, transform 0.2s ease',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--flame-600)';
                e.currentTarget.style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#475569';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
