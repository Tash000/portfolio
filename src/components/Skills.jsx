import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { disciplineBreakdowns } from '../constants';

/**
 * Reusable Wheel (Donut) Chart Component
 */
const WheelChart = ({ items, size = 130, strokeWidth = 16, hoveredItem, onHover }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let accumulatedPercent = 0;
  const segments = items.map((item) => {
    const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
    const strokeDashoffset = -((accumulatedPercent / 100) * circumference);
    accumulatedPercent += item.percentage;
    return {
      ...item,
      strokeDasharray,
      strokeDashoffset,
    };
  });

  const activeItem = hoveredItem ? items.find((it) => it.name === hoveredItem) : items[0];

  return (
    <div style={{ position: 'relative', width: `${size}px`, height: `${size}px`, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--flame-50)"
          strokeWidth={strokeWidth}
        />
        {/* Slices */}
        {segments.map((seg) => {
          const isHovered = hoveredItem === seg.name;
          return (
            <circle
              key={seg.name}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
              strokeDasharray={seg.strokeDasharray}
              strokeDashoffset={seg.strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: 'stroke-width 0.2s ease, filter 0.2s ease',
                cursor: 'pointer',
                filter: isHovered ? `drop-shadow(0 0 6px ${seg.color})` : 'none',
              }}
              onMouseEnter={() => onHover(seg.name)}
              onMouseLeave={() => onHover(null)}
            />
          );
        })}
      </svg>

      {/* Center Readout */}
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
          padding: '6px',
        }}
      >
        <span style={{ fontSize: '1rem', fontWeight: 800, color: activeItem?.color || '#0F172A', lineHeight: 1.1 }}>
          {activeItem?.percentage}%
        </span>
        <span style={{ fontSize: '0.62rem', color: '#64748B', fontWeight: 600, marginTop: '2px', maxWidth: '65px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {activeItem?.name}
        </span>
      </div>
    </div>
  );
};

const Skills = () => {
  // Track hovered item per discipline card
  const [hoveredMap, setHoveredMap] = useState({});

  const setHovered = (disciplineId, itemName) => {
    setHoveredMap((prev) => ({ ...prev, [disciplineId]: itemName }));
  };

  return (
    <section id="skills" style={{ padding: 'clamp(60px, 10vh, 100px) clamp(16px, 4vw, 24px)', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Section Header */}
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
          Repository Telemetry
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
              background: 'var(--gradient-flame)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Discipline Distribution
          </span>
        </h2>
        <p style={{ color: '#475569', maxWidth: '680px', margin: '14px auto 0', fontSize: '1.02rem', lineHeight: 1.6 }}>
          How my repositories and robotics systems are built—measured by actual codebase volume, hardware deployments, and architecture distribution.
        </p>
      </motion.div>

      {/* 4 Discipline Bento Cards with Wheel Charts */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))',
          gap: 'clamp(18px, 3vw, 28px)',
        }}
      >
        {disciplineBreakdowns.map((discipline, index) => {
          const hoveredItem = hoveredMap[discipline.id];
          return (
            <motion.div
              key={discipline.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '28px clamp(16px, 3.5vw, 24px)',
                border: '1.5px solid var(--border-light)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--flame-500)';
                e.currentTarget.style.boxShadow = '0 16px 36px var(--border-glow), 0 4px 12px rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)';
              }}
            >
              <div>
                {/* Card Title & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'var(--flame-50)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                    }}
                  >
                    {discipline.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: 0, lineHeight: 1.2 }}>
                      {discipline.title}
                    </h3>
                    <div style={{ fontSize: '0.78rem', color: 'var(--flame-600)', fontWeight: 600, marginTop: '2px' }}>
                      {discipline.subtitle}
                    </div>
                  </div>
                </div>

                <p style={{ color: '#64748B', fontSize: '0.86rem', lineHeight: 1.5, marginBottom: '20px' }}>
                  {discipline.description}
                </p>

                {/* Main Visual: Wheel Chart + Info */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 'clamp(14px, 3vw, 24px)',
                    padding: '16px',
                    borderRadius: '18px',
                    background: 'var(--flame-50)',
                    border: '1px solid var(--border-light)',
                    marginBottom: '20px',
                    boxShadow: '0 2px 8px var(--border-glow)',
                  }}
                >
                  <WheelChart
                    items={discipline.items}
                    size={120}
                    strokeWidth={15}
                    hoveredItem={hoveredItem}
                    onHover={(item) => setHovered(discipline.id, item)}
                  />

                  {/* Highlights Summary */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.5px' }}>
                      Leading Focus
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>
                      {discipline.items[0].name}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--flame-600)', fontWeight: 700 }}>
                      {discipline.items[0].percentage}% of stack
                    </div>
                  </div>
                </div>

                {/* GitHub-Style Segmented Bar */}
                <div
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                    display: 'flex',
                    gap: '2px',
                    backgroundColor: '#E2E8F0',
                    marginBottom: '18px',
                  }}
                >
                  {discipline.items.map((item) => (
                    <div
                      key={item.name}
                      style={{
                        width: `${item.percentage}%`,
                        height: '100%',
                        backgroundColor: item.color,
                        borderRadius: '2px',
                        opacity: hoveredItem ? (hoveredItem === item.name ? 1 : 0.35) : 1,
                        transition: 'opacity 0.2s ease, transform 0.2s ease',
                      }}
                      title={`${item.name}: ${item.percentage}%`}
                    />
                  ))}
                </div>

                {/* GitHub-Style Bullet Legend */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    columnGap: '18px',
                    rowGap: '8px',
                  }}
                >
                  {discipline.items.map((item) => {
                    const isHovered = hoveredItem === item.name;
                    return (
                      <div
                        key={item.name}
                        onMouseEnter={() => setHovered(discipline.id, item.name)}
                        onMouseLeave={() => setHovered(discipline.id, null)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          cursor: 'pointer',
                          opacity: hoveredItem ? (isHovered ? 1 : 0.45) : 1,
                          transition: 'opacity 0.2s ease',
                        }}
                      >
                        <span
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: item.color,
                            display: 'inline-block',
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#0F172A' }}>
                          {item.name}
                        </span>
                        <span style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 400 }}>
                          {item.percentage}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
