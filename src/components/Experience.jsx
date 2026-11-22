import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';

const styles = {
  section: {
    padding: '100px 24px',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
  },
  titleWrapper: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
    fontWeight: 800,
    color: '#0F172A',
    marginBottom: '12px',
    letterSpacing: '-0.02em',
  },
  underline: {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #FF4500, #FF8A00, #FBBF24)',
    margin: '0 auto',
    borderRadius: '2px',
  },
  entryTitle: {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#0F172A',
    marginBottom: '4px',
  },
  entrySubtitle: {
    fontSize: '0.96rem',
    fontWeight: 600,
    color: '#EA580C',
    marginBottom: '16px',
  },
  pointsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  point: {
    position: 'relative',
    paddingLeft: '20px',
    marginBottom: '10px',
    fontSize: '0.92rem',
    color: '#475569',
    lineHeight: 1.6,
  },
  pointBullet: {
    position: 'absolute',
    left: 0,
    top: '8px',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #FF4500, #FF8A00)',
    boxShadow: '0 0 6px rgba(255, 107, 0, 0.4)',
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
  background: 'linear-gradient(135deg, #FF4500, #FF8A00)',
  boxShadow: '0 4px 16px rgba(255, 107, 0, 0.35)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff',
  fontSize: '1.25rem',
};

const contentStyle = {
  background: '#FFFFFF',
  border: '1.5px solid #FED7AA',
  borderRadius: '20px',
  boxShadow: '0 8px 24px rgba(255, 107, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)',
  padding: '28px',
};

const contentArrowStyle = {
  borderRight: '10px solid #FED7AA',
};

const experienceIcons = ['🚀', '🤖', '📚'];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" style={{ position: 'relative', zIndex: 10 }}>
      <div ref={ref} style={styles.section}>
        <motion.div
          style={styles.titleWrapper}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 style={styles.title} variants={titleVariants}>
            Experience
          </motion.h2>
          <motion.div
            style={{ ...styles.underline, width: 0 }}
            variants={underlineVariants}
            animate={isInView ? 'visible' : 'hidden'}
          />
        </motion.div>

        <VerticalTimeline
          lineColor="linear-gradient(180deg, #FF6B00 0%, #F59E0B 100%)"
          animate={true}
        >
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.date}
              dateClassName="timeline-date-custom"
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
              iconStyle={iconStyle}
              icon={
                <span style={{ fontSize: '1.25rem' }}>
                  {experienceIcons[index % experienceIcons.length] || '💼'}
                </span>
              }
              visible={isInView}
            >
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
            color: #7C2D12 !important;
            font-weight: 700 !important;
            font-size: 0.95rem !important;
          }
          .vertical-timeline::before {
            background: linear-gradient(180deg, #FF6B00 0%, #F59E0B 100%) !important;
            width: 3px !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Experience;
