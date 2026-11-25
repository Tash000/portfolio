import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GitHubIcon,
  ExternalLinkIcon,
  LockIcon,
  UnlockIcon,
  MailIcon,
  CheckIcon,
  StarIcon,
  LightbulbIcon,
  PortfolioIcon,
} from './icons/Icons';
import { projectsData } from '../constants';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'featured', label: 'Featured', icon: '🔥' },
  { id: 'Robotics', label: 'Robotics', icon: '🤖' },
  { id: 'AI & Full-Stack', label: 'AI & Full-Stack', icon: '⚡' },
  { id: 'Dev Tools', label: 'Dev Tools', icon: '🛠️' },
  { id: 'private', label: 'Private (Request Access)', icon: '🔒' },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [requestModalProject, setRequestModalProject] = useState(null);
  const [requestSent, setRequestSent] = useState(false);

  // Filter only visible projects configured in src/constants/projects.js
  const visibleProjects = projectsData.filter((project) => project.visible !== false);

  const filteredProjects = visibleProjects.filter((project) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'featured') return project.featured;
    if (selectedCategory === 'private') return project.isPrivate;
    return project.category === selectedCategory;
  });

  const handleRequestAccess = (project) => {
    setRequestModalProject(project);
    setRequestSent(false);
  };

  const confirmRequestEmail = (project) => {
    const subject = encodeURIComponent(`Access Request: ${project.title}`);
    const body = encodeURIComponent(
      `Hi Toushif,\n\nI was reviewing your portfolio and would like to request repository access / technical discussion for:\n\nProject: ${project.title}\nCategory: ${project.category}\n\nPlease let me know if we can connect.\n\nBest regards,`
    );
    window.location.href = `mailto:toushif.ahammad.m@gmail.com?subject=${subject}&body=${body}`;
    setRequestSent(true);
    setTimeout(() => {
      setRequestModalProject(null);
    }, 2000);
  };

  return (
    <section id="projects" style={{ padding: 'clamp(28px, 3.5vh, 42px) clamp(16px, 4vw, 24px) clamp(24px, 3vh, 36px)', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '24px' }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--flame-600)',
            fontSize: '0.92rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          <PortfolioIcon name="⚡" size="1em" /> Innovation Showcase
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
          Featured{' '}
          <span
            style={{
              background: 'var(--gradient-flame)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Projects
          </span>
        </h2>
        <p
          style={{
            color: '#475569',
            maxWidth: '650px',
            margin: '14px auto 0',
            fontSize: '1.02rem',
            lineHeight: '1.6',
          }}
        >
          Both public open-source repositories and private hardware firmware prototypes. For private robotics codebases, you can request access directly below.
        </p>
      </motion.div>

      {/* Category Filter Pills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '50px',
        }}
      >
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '9px 18px',
                borderRadius: '12px',
                background: isSelected ? 'var(--gradient-flame)' : '#FFFFFF',
                color: isSelected ? '#FFFFFF' : '#334155',
                border: isSelected ? '1px solid transparent' : '1.5px solid var(--border-light)',
                fontSize: '0.9rem',
                fontWeight: isSelected ? 700 : 500,
                cursor: 'pointer',
                boxShadow: isSelected ? 'var(--shadow-flame)' : '0 2px 6px rgba(0,0,0,0.03)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'var(--flame-500)';
                  e.currentTarget.style.background = 'var(--flame-50)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.background = '#FFFFFF';
                }
              }}
            >
              {cat.icon && <PortfolioIcon name={cat.icon} size="0.95em" />}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 310px), 1fr))',
          gap: 'clamp(20px, 3.5vw, 32px)',
        }}
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                overflow: 'hidden',
                border: project.isPrivate
                  ? '1.5px solid rgba(234, 88, 12, 0.25)'
                  : '1.5px solid #F1F5F9',
                boxShadow: '0 8px 24px rgba(255, 107, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px var(--border-glow), 0 4px 12px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = 'var(--flame-500)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02)';
                e.currentTarget.style.borderColor = project.isPrivate
                  ? 'var(--border-light)'
                  : '#F1F5F9';
              }}
            >
              {/* Image Preview Container */}
              <div style={{ position: 'relative', height: '190px', width: '100%', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';
                  }}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.6) 0%, transparent 60%)',
                  }}
                />

                {/* Status Badges on Image */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    right: '14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: 'var(--flame-700)',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    }}
                  >
                    {project.category}
                  </span>

                  {project.isPrivate ? (
                    <span
                      style={{
                        background: 'var(--flame-600)',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        boxShadow: '0 2px 8px rgba(234, 88, 12, 0.4)',
                      }}
                    >
                      <LockIcon /> Private Repo
                    </span>
                  ) : (
                    <span
                      style={{
                        background: 'rgba(22, 163, 74, 0.92)',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <UnlockIcon /> Public Code
                    </span>
                  )}
                </div>

                {project.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '14px',
                      background: 'var(--gradient-flame)',
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      boxShadow: '0 2px 10px var(--border-glow)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <StarIcon size="0.95em" /> Featured
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.28rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      marginBottom: '10px',
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      color: '#475569',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      marginBottom: '18px',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Highlights if any */}
                  {project.highlights && (
                    <div
                      style={{
                        background: 'var(--flame-50)',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        borderLeft: '3px solid var(--flame-600)',
                        marginBottom: '18px',
                        fontSize: '0.82rem',
                        color: 'var(--flame-800)',
                        fontWeight: 600,
                        lineHeight: 1.5,
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                      }}
                    >
                      <LightbulbIcon size="1.15em" style={{ marginTop: '2px', color: 'var(--flame-600)' }} />
                      <span>{project.highlights}</span>
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          background: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          color: '#334155',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '4px 9px',
                          borderRadius: '8px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid #F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                  }}
                >
                  {project.isPrivate ? (
                    <button
                      onClick={() => handleRequestAccess(project)}
                      className="btn-flame"
                      style={{
                        width: '100%',
                        padding: '10px 16px',
                        borderRadius: '12px',
                        fontSize: '0.88rem',
                        justifyContent: 'center',
                      }}
                    >
                      <LockIcon /> Request Access / Discuss
                    </button>
                  ) : (
                    <>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-flame"
                        style={{
                          flex: 1,
                          padding: '10px 16px',
                          borderRadius: '12px',
                          fontSize: '0.88rem',
                          justifyContent: 'center',
                        }}
                      >
                        <GitHubIcon /> View on GitHub
                      </a>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline-flame"
                          style={{
                            padding: '10px 14px',
                            borderRadius: '12px',
                            fontSize: '0.88rem',
                          }}
                        >
                          <ExternalLinkIcon /> Demo
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Access Request Modal */}
      <AnimatePresence>
        {requestModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={() => setRequestModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: 'clamp(20px, 4vw, 32px)',
                maxWidth: 'min(480px, calc(100vw - 32px))',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2)',
                border: '1.5px solid #FED7AA',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'var(--flame-50)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--flame-600)',
                  fontSize: '1.6rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <LockIcon />
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                Request Code Access
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '20px', lineHeight: 1.6 }}>
                You are requesting access to{' '}
                <strong style={{ color: 'var(--flame-600)' }}>{requestModalProject.title}</strong>. This codebase is currently private due to proprietary hardware integration or ongoing research.
              </p>

              {requestSent ? (
                <div
                  style={{
                    padding: '16px',
                    borderRadius: '14px',
                    background: '#F0FDF4',
                    color: '#15803D',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  <CheckIcon /> Email client opened! Toushif will review your request.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <button
                    onClick={() => confirmRequestEmail(requestModalProject)}
                    className="btn-flame"
                    style={{
                      padding: '14px',
                      borderRadius: '14px',
                      fontSize: '1rem',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <MailIcon /> Send Access Request Email
                  </button>

                  <button
                    onClick={() => setRequestModalProject(null)}
                    style={{
                      padding: '12px',
                      borderRadius: '14px',
                      background: '#F1F5F9',
                      border: 'none',
                      color: '#475569',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
