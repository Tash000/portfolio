import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { repoSkillStats, skills } from '../constants';

const categories = ['All', 'Languages', 'Hardware', 'AI & Vision', 'Frontend', 'Backend', 'Tools'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  // Donut chart math
  const size = 260;
  const strokeWidth = 26;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate segment offsets
  let accumulatedShare = 0;
  const segments = repoSkillStats.map((item) => {
    const strokeDasharray = `${(item.share / 100) * circumference} ${circumference}`;
    const strokeDashoffset = -((accumulatedShare / 100) * circumference);
    accumulatedShare += item.share;
    return {
      ...item,
      strokeDasharray,
      strokeDashoffset,
    };
  });

  const activeStat = hoveredSkill
    ? repoSkillStats.find((s) => s.name === hoveredSkill)
    : null;

  return (
    <section id="skills" style={{ padding: '100px 24px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '45px' }}
      >
        <span
          style={{
            color: '#EA580C',
            fontSize: '0.92rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Repo Telemetry & Stack
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
          Skills &{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #FF4500, #FF8A00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Repository Usage
          </span>
        </h2>
        <p style={{ color: '#475569', maxWidth: '650px', margin: '14px auto 0', fontSize: '1.02rem', lineHeight: 1.6 }}>
          A concrete, data-backed breakdown of how many repositories and robotics systems actively implement each technology.
        </p>
      </motion.div>

      {/* Interactive Repository Wheel Chart Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        style={{
          background: '#FFFFFF',
          borderRadius: '28px',
          padding: '40px 32px',
          border: '1.5px solid #FED7AA',
          boxShadow: '0 12px 36px rgba(255, 107, 0, 0.08), 0 2px 10px rgba(0,0,0,0.03)',
          marginBottom: '50px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Left: The Wheel (Donut) Chart */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <div style={{ position: 'relative', width: `${size}px`, height: `${size}px` }}>
              <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
                {/* Background Ring */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke="#FFF7ED"
                  strokeWidth={strokeWidth}
                />

                {/* Slices */}
                {segments.map((seg) => {
                  const isHovered = hoveredSkill === seg.name;
                  return (
                    <circle
                      key={seg.name}
                      cx={size / 2}
                      cy={size / 2}
                      r={radius}
                      fill="none"
                      stroke={seg.color}
                      strokeWidth={isHovered ? strokeWidth + 6 : strokeWidth}
                      strokeDasharray={seg.strokeDasharray}
                      strokeDashoffset={seg.strokeDashoffset}
                      strokeLinecap="round"
                      style={{
                        transition: 'stroke-width 0.25s ease, filter 0.25s ease',
                        cursor: 'pointer',
                        filter: isHovered ? `drop-shadow(0 0 10px ${seg.color})` : 'none',
                      }}
                      onMouseEnter={() => setHoveredSkill(seg.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    />
                  );
                })}
              </svg>

              {/* Center Wheel Content */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  pointerEvents: 'none',
                  padding: '16px',
                }}
              >
                {activeStat ? (
                  <motion.div
                    key={activeStat.name}
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: activeStat.color, lineHeight: 1 }}>
                      {activeStat.repoCount}
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0F172A', marginTop: '2px' }}>
                      Repositories
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 600 }}>
                      {activeStat.share}% Codebase Share
                    </div>
                  </motion.div>
                ) : (
                  <div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#EA580C', lineHeight: 1 }}>
                      9+
                    </div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0F172A', marginTop: '2px' }}>
                      Active Projects
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 500 }}>
                      Hover for Breakdown
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div style={{ marginTop: '16px', fontSize: '0.85rem', color: '#EA580C', fontWeight: 600 }}>
              💡 Hover on any slice or skill to view repo density
            </div>
          </div>

          {/* Right: Telemetry Breakdown List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {repoSkillStats.map((item) => {
              const isHovered = hoveredSkill === item.name;
              return (
                <div
                  key={item.name}
                  onMouseEnter={() => setHoveredSkill(item.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{
                    padding: '12px 18px',
                    borderRadius: '16px',
                    background: isHovered ? '#FFF7ED' : '#F8FAFC',
                    border: isHovered ? `1.5px solid ${item.color}` : '1.5px solid #E2E8F0',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    boxShadow: isHovered ? '0 4px 14px rgba(255, 107, 0, 0.12)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: item.color,
                          display: 'inline-block',
                          flexShrink: 0,
                          boxShadow: `0 0 8px ${item.color}`,
                        }}
                      />
                      <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.96rem' }}>
                        {item.name}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          background: '#FFFFFF',
                          border: `1.5px solid ${item.color}`,
                          color: item.color,
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          padding: '3px 10px',
                          borderRadius: '8px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.repoCount} {item.repoCount === 1 ? 'Repo' : 'Repos'}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>
                        {item.share}%
                      </span>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '4px', paddingLeft: '22px' }}>
                    {item.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Category Pills Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
          Explore Full Stack by Category
        </h3>
        <p style={{ color: '#64748B', fontSize: '0.92rem' }}>
          Filter all tools and libraries across your engineering toolkit.
        </p>
      </div>

      {/* Category Pills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '36px',
        }}
      >
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '12px',
                background: isSelected ? 'linear-gradient(135deg, #FF4500, #FF8A00)' : '#FFFFFF',
                color: isSelected ? '#FFFFFF' : '#334155',
                border: isSelected ? '1px solid transparent' : '1.5px solid #FED7AA',
                fontSize: '0.9rem',
                fontWeight: isSelected ? 700 : 500,
                cursor: 'pointer',
                boxShadow: isSelected ? '0 4px 14px rgba(255, 107, 0, 0.3)' : '0 2px 6px rgba(0,0,0,0.03)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = '#FF8A00';
                  e.currentTarget.style.background = '#FFF7ED';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = '#FED7AA';
                  e.currentTarget.style.background = '#FFFFFF';
                }
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Skills Grid (Clean Cards Without Progress Bars) */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
        }}
      >
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: index * 0.02 }}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '16px 20px',
                border: '1.5px solid #FED7AA',
                boxShadow: '0 4px 14px rgba(255, 107, 0, 0.04)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF6B00';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 107, 0, 0.12)';
                e.currentTarget.style.background = '#FFFDF9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#FED7AA';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 107, 0, 0.04)';
                e.currentTarget.style.background = '#FFFFFF';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.98rem' }}>
                  {skill.name}
                </span>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#C2410C',
                    background: '#FFF7ED',
                    padding: '3px 9px',
                    borderRadius: '8px',
                    border: '1px solid #FDBA74',
                  }}
                >
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
