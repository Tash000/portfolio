import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import { PortfolioIcon, HourglassIcon, TimerIcon, ArrowRightIcon } from './icons/Icons';

const styles = {
  section: {
    padding: 'clamp(28px, 3.5vh, 42px) clamp(16px, 4vw, 24px) clamp(16px, 2.5vh, 28px)',
    maxWidth: '1240px',
    margin: '0 auto',
    position: 'relative',
  },
  titleWrapper: {
    textAlign: 'center',
    marginBottom: '24px',
  },
  eyebrow: {
    color: 'var(--flame-600)',
    fontSize: '0.9rem',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    display: 'inline-block',
    marginBottom: '8px',
  },
  title: {
    fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
    fontWeight: 800,
    color: '#0F172A',
    marginBottom: '14px',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    color: '#475569',
    maxWidth: '680px',
    margin: '0 auto',
    fontSize: '1.02rem',
    lineHeight: 1.6,
  },
  underline: {
    width: '80px',
    height: '4px',
    background: 'var(--gradient-flame)',
    margin: '18px auto 0',
    borderRadius: '2px',
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    marginTop: '28px',
    flexWrap: 'wrap',
  },
  toggleBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 18px',
    borderRadius: '999px',
    fontSize: '0.85rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    border: '1.5px solid transparent',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    marginBottom: '10px',
    flexWrap: 'wrap',
  },
  stageBadge: {
    background: 'var(--flame-50)',
    color: 'var(--flame-700)',
    fontSize: '0.75rem',
    fontWeight: 800,
    padding: '4px 12px',
    borderRadius: '999px',
    border: '1px solid var(--border-light)',
    letterSpacing: '0.5px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  },
  typeBadge: {
    background: 'var(--flame-50)',
    color: 'var(--flame-800)',
    fontSize: '0.72rem',
    fontWeight: 700,
    padding: '3px 10px',
    borderRadius: '6px',
    border: '1px solid var(--border-light)',
  },
  entryTitle: {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#0F172A',
    marginBottom: '6px',
    lineHeight: 1.35,
  },
  entrySubtitle: {
    fontSize: '0.94rem',
    fontWeight: 600,
    color: 'var(--flame-600)',
    marginBottom: '16px',
  },
  pointsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  point: {
    position: 'relative',
    paddingLeft: '22px',
    fontSize: '0.92rem',
    color: '#334155',
    lineHeight: 1.6,
  },
  pointBullet: {
    position: 'absolute',
    left: 0,
    top: '9px',
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    background: 'var(--gradient-flame)',
    boxShadow: '0 0 8px var(--border-glow)',
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const underlineVariants = {
  hidden: { width: 0 },
  visible: { width: 80, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
};

const iconStyle = {
  background: 'var(--gradient-flame)',
  boxShadow: 'var(--shadow-flame)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff',
  fontSize: '1.35rem',
};

const contentStyle = {
  background: '#FFFFFF',
  border: '1.5px solid var(--border-light)',
  borderRadius: '20px',
  boxShadow: '0 10px 28px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)',
  padding: '28px',
};

const contentArrowStyle = {
  borderRight: '10px solid var(--border-light)',
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [order, setOrder] = useState('chronological'); // 'chronological' (Past -> Present) or 'reverse' (Present -> Past)

  const displayedExperiences = order === 'chronological' ? experiences : [...experiences].reverse();

  return (
    <section id="experience" style={{ position: 'relative', zIndex: 10 }}>
      <div ref={ref} style={styles.section}>
        <motion.div
          style={styles.titleWrapper}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 style={styles.title} variants={titleVariants}>
            Engineering{' '}
            <span
              style={{
                background: 'var(--gradient-flame)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Timeline
            </span>
          </motion.h2>
          <motion.p style={styles.subtitle} variants={titleVariants}>
            A chronological progression: from early learning, CAD prototyping & machine vision, stepping up to industrial autonomous AGVs, to currently engineering intelligent AI agents and edge benchmarking.
          </motion.p>
          <motion.div
            style={{ ...styles.underline, width: 0 }}
            variants={underlineVariants}
            animate={isInView ? 'visible' : 'hidden'}
          />

          {/* Chronology Order Toggle */}
          <div style={styles.toggleContainer}>
            <button
              onClick={() => setOrder('chronological')}
              style={{
                ...styles.toggleBtn,
                background: order === 'chronological' ? 'var(--gradient-flame)' : '#FFFFFF',
                color: order === 'chronological' ? '#FFFFFF' : '#475569',
                borderColor: order === 'chronological' ? 'var(--flame-600)' : '#E2E8F0',
                boxShadow: order === 'chronological' ? 'var(--shadow-flame)' : 'none',
              }}
            >
              <HourglassIcon size="1em" />
              <span>Chronological: Past</span>
              <ArrowRightIcon size="0.95em" />
              <span>Present</span>
            </button>
            <button
              onClick={() => setOrder('reverse')}
              style={{
                ...styles.toggleBtn,
                background: order === 'reverse' ? 'var(--gradient-flame)' : '#FFFFFF',
                color: order === 'reverse' ? '#FFFFFF' : '#475569',
                borderColor: order === 'reverse' ? 'var(--flame-600)' : '#E2E8F0',
                boxShadow: order === 'reverse' ? 'var(--shadow-flame)' : 'none',
              }}
            >
              <TimerIcon size="1em" />
              <span>Latest First: Present</span>
              <ArrowRightIcon size="0.95em" />
              <span>Past</span>
            </button>
          </div>
        </motion.div>

        <VerticalTimeline
          lineColor="var(--gradient-flame)"
          animate={true}
        >
          {displayedExperiences.map((exp, index) => (
            <VerticalTimelineElement
              key={`${exp.stage}-${order}`}
              date={exp.date}
              dateClassName="timeline-date-custom"
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
              iconStyle={iconStyle}
              icon={
                <PortfolioIcon
                  name={exp.icon || '🛠️'}
                  size="1.35rem"
                  aria-label={exp.title}
                />
              }
              visible={isInView}
            >
              <div style={styles.cardHeader}>
                <span style={styles.stageBadge}>
                  <strong>{exp.stage}</strong> • {exp.stageLabel}
                </span>
                <span style={styles.typeBadge}>
                  {exp.type}
                </span>
              </div>

              <h3 style={styles.entryTitle}>{exp.title}</h3>
              <p style={styles.entrySubtitle}>{exp.subtitle}</p>

              <ul style={styles.pointsList}>
                {exp.points.map((point, i) => (
                  <li key={i} style={styles.point}>
                    <span style={styles.pointBullet} />
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <style>{`
          .timeline-date-custom {
            color: var(--flame-800) !important;
            font-weight: 800 !important;
            font-size: 0.95rem !important;
          }
          .vertical-timeline::before {
            background: var(--gradient-flame) !important;
            width: 3px !important;
          }
          .vertical-timeline {
            padding-bottom: 0 !important;
            margin-bottom: 0 !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Experience;
