import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiMail } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa';
import { navLinks, socialLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 40);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPos = scrollTop + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActive(navLinks[i].title);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 28px' : '18px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 253, 249, 0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-light)',
        boxShadow: scrolled ? '0 4px 20px var(--border-light)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: 'var(--gradient-flame)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '1.2rem',
              boxShadow: 'var(--shadow-flame)',
            }}
          >
            <FaFire />
          </div>
          <span
            style={{
              fontSize: '1.35rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #0F172A 30%, var(--flame-600) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Toushif
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'none', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '8px', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => {
              const isActive = active === link.title;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setActive(link.title)}
                    style={{
                      display: 'block',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      color: isActive ? 'var(--flame-600)' : '#334155',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.92rem',
                      textDecoration: 'none',
                      background: isActive ? 'var(--flame-50)' : 'transparent',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = 'var(--flame-600)';
                        e.currentTarget.style.background = 'var(--flame-50)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#334155';
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#334155',
                background: 'var(--flame-50)',
                border: '1px solid var(--border-light)',
                fontSize: '1.15rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--flame-600)';
                e.currentTarget.style.borderColor = 'var(--flame-600)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#334155';
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <FiGithub />
            </a>

            <a
              href="#contact"
              className="btn-flame"
              style={{
                padding: '9px 18px',
                borderRadius: '12px',
                fontSize: '0.88rem',
              }}
            >
              <FiMail /> Let's Connect
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="mobile-toggle">
          <button
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle Menu"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'var(--flame-50)',
              border: '1px solid var(--border-light)',
              color: 'var(--flame-600)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.3rem',
              cursor: 'pointer',
            }}
          >
            {toggle ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '2px solid rgba(255, 107, 0, 0.2)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
              padding: '24px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(false);
                }}
                style={{
                  color: active === link.title ? '#EA580C' : '#0F172A',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  padding: '8px 0',
                }}
              >
                {link.title}
              </a>
            ))}
            <div style={{ paddingTop: '12px', borderTop: '1px solid #FED7AA', display: 'flex', gap: '12px' }}>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px',
                  borderRadius: '12px',
                  background: '#FFF7ED',
                  color: '#EA580C',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                <FiGithub /> GitHub
              </a>
              <a
                href="#contact"
                onClick={() => setToggle(false)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #FF4500, #FF8A00)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                <FiMail /> Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 820px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
