import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiUser, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { socialLinks } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:toushif.ahammad.m@gmail.com?subject=${subject}&body=${body}`;
    }, 500);
  };

  return (
    <section id="contact" style={{ padding: '100px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '50px' }}
      >
        <span
          style={{
            color: 'var(--flame-600)',
            fontSize: '0.92rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Let's Collaborate
        </span>
        <h2
          style={{
            fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
            fontWeight: 800,
            marginTop: '8px',
            color: '#0F172A',
            letterSpacing: '-0.02em',
          }}
        >
          Get In{' '}
          <span
            style={{
              background: 'var(--gradient-flame)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Touch
          </span>
        </h2>
        <p style={{ color: '#475569', maxWidth: '600px', margin: '14px auto 0', fontSize: '1.02rem' }}>
          Have an exciting robotics project, edge AI opportunity, or want to discuss code access? Let's connect!
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'start',
        }}
      >
        {/* Left Column: Direct Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '36px',
            border: '1.5px solid var(--border-light)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
            Ready to ignite new ideas
          </h3>
          <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '28px', fontSize: '0.96rem' }}>
            I am passionate about building tangible engineering solutions. Whether you are an engineer, researcher, recruiter, or fellow builder, I'd love to hear from you.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 20px',
                borderRadius: '16px',
                background: 'var(--flame-50)',
                border: '1.5px solid var(--border-light)',
                color: '#0F172A',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF6B00';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = '#FFEDD5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#FDBA74';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = '#FFF7ED';
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #FF4500, #FF8A00)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  color: '#fff',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(255, 107, 0, 0.3)',
                }}
              >
                <FiGithub />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#EA580C', fontWeight: 700, textTransform: 'uppercase' }}>
                  GitHub
                </div>
                <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem' }}>github.com/Tash000</div>
              </div>
            </a>

            <a
              href={socialLinks.email}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 20px',
                borderRadius: '16px',
                background: 'var(--flame-50)',
                border: '1.5px solid var(--border-light)',
                color: '#0F172A',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--flame-500)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px var(--border-glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'var(--gradient-flame)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  color: '#fff',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px var(--border-glow)',
                }}
              >
                <FiMail />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--flame-600)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Email
                </div>
                <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>{socialLinks.emailRaw}</div>
              </div>
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 20px',
                borderRadius: '16px',
                background: 'var(--flame-50)',
                border: '1.5px solid var(--border-light)',
                color: '#0F172A',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--flame-500)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px var(--border-glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'var(--gradient-flame)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  color: '#fff',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px var(--border-glow)',
                }}
              >
                <FiLinkedin />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--flame-600)', fontWeight: 700, textTransform: 'uppercase' }}>
                  LinkedIn
                </div>
                <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>linkedin.com/in/toushif092025</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '36px',
            border: '1.5px solid #FED7AA',
            boxShadow: '0 8px 24px rgba(255, 107, 0, 0.06)',
          }}
        >
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '36px 16px' }}>
              <FiCheckCircle style={{ fontSize: '3.5rem', color: '#16A34A', marginBottom: '16px' }} />
              <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                Message Client Triggered!
              </h4>
              <p style={{ color: '#475569', lineHeight: '1.6' }}>
                Your email draft is prepared. Looking forward to our conversation!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-outline-flame"
                style={{
                  marginTop: '20px',
                  padding: '10px 22px',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', color: '#334155', marginBottom: '6px', fontWeight: 600 }}>
                  <FiUser style={{ verticalAlign: 'middle', marginRight: '6px', color: '#EA580C' }} /> Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    borderRadius: '14px',
                    background: '#F8FAFC',
                    border: '1.5px solid #E2E8F0',
                    color: '#0F172A',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.25s ease',
                    fontFamily: 'inherit',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#FF6B00';
                    e.target.style.background = '#FFFFFF';
                    e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 0, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0';
                    e.target.style.background = '#F8FAFC';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', color: '#334155', marginBottom: '6px', fontWeight: 600 }}>
                  <FiMail style={{ verticalAlign: 'middle', marginRight: '6px', color: '#EA580C' }} /> Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    borderRadius: '14px',
                    background: '#F8FAFC',
                    border: '1.5px solid #E2E8F0',
                    color: '#0F172A',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'all 0.25s ease',
                    fontFamily: 'inherit',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#FF6B00';
                    e.target.style.background = '#FFFFFF';
                    e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 0, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0';
                    e.target.style.background = '#F8FAFC';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', color: '#334155', marginBottom: '6px', fontWeight: 600 }}>
                  <FiMessageSquare style={{ verticalAlign: 'middle', marginRight: '6px', color: '#EA580C' }} /> Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What would you like to build or discuss?"
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    borderRadius: '14px',
                    background: '#F8FAFC',
                    border: '1.5px solid #E2E8F0',
                    color: '#0F172A',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'all 0.25s ease',
                    fontFamily: 'inherit',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#FF6B00';
                    e.target.style.background = '#FFFFFF';
                    e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 0, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0';
                    e.target.style.background = '#F8FAFC';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-flame"
                style={{
                  padding: '14px 28px',
                  borderRadius: '14px',
                  fontSize: '1rem',
                  justifyContent: 'center',
                  marginTop: '6px',
                }}
              >
                <FiSend /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
