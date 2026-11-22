import React from 'react';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FiBriefcase, FiCpu, FiCode, FiAward } from 'react-icons/fi';
import { experiences } from '../constants';

const icons = [<FiCpu />, <FiBriefcase />, <FiAward />];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '100px 24px', maxWidth: '1280px', margin: '0 auto' }}>
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
          Journey & Milestones
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
          Engineering{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #FF4500, #FF8A00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Experience
          </span>
        </h2>
        <p style={{ color: '#475569', maxWidth: '600px', margin: '14px auto 0', fontSize: '1.02rem' }}>
          Key highlights from hardware prototypes to intelligent systems.
        </p>
      </motion.div>

      <VerticalTimeline lineColor="linear-gradient(180deg, #FF6B00 0%, #F59E0B 100%)">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            dateClassName="timeline-date-custom"
            contentStyle={{
              background: '#FFFFFF',
              color: '#0F172A',
              border: '1.5px solid #FED7AA',
              borderRadius: '20px',
              boxShadow: '0 8px 24px rgba(255, 107, 0, 0.08), 0 2px 6px rgba(0,0,0,0.03)',
              padding: '28px',
            }}
            contentArrowStyle={{ borderRight: '10px solid #FED7AA' }}
            iconStyle={{
              background: 'linear-gradient(135deg, #FF4500, #FF8A00)',
              color: '#FFFFFF',
              boxShadow: '0 4px 14px rgba(255, 107, 0, 0.4)',
            }}
            icon={icons[index % icons.length]}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                {exp.title}
              </h3>
              <span
                style={{
                  background: '#FFF7ED',
                  color: '#C2410C',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '8px',
                  border: '1px solid #FDBA74',
                }}
              >
                {exp.type || 'Robotics'}
              </span>
            </div>

            <h4 style={{ fontSize: '0.96rem', fontWeight: 600, color: '#EA580C', marginBottom: '16px' }}>
              {exp.subtitle}
            </h4>

            <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {exp.points.map((point, pIdx) => (
                <li key={pIdx} style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.6' }}>
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
      `}</style>
    </section>
  );
};

export default Experience;
