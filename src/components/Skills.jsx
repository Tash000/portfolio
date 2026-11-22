import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants';

const categories = ['All', 'Languages', 'Hardware', 'AI & Vision', 'Frontend', 'Backend', 'Tools'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="skills" style={{ padding: '100px 24px', maxWidth: '1280px', margin: '0 auto' }}>
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
          Technical Arsenal
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
            Technologies
          </span>
        </h2>
        <p style={{ color: '#475569', maxWidth: '600px', margin: '14px auto 0', fontSize: '1.02rem' }}>
          From microcontrollers and biomechanical kinematics to neural models and web applications.
        </p>
      </motion.div>

      {/* Category Pills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '45px',
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
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            style={{
              background: '#FFFFFF',
              borderRadius: '18px',
              padding: '16px 20px',
              border: '1.5px solid #FED7AA',
              boxShadow: '0 4px 16px rgba(255, 107, 0, 0.05)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#FF6B00';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 107, 0, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#FED7AA';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 107, 0, 0.05)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '1rem' }}>
                {skill.name}
              </span>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#C2410C',
                  background: '#FFF7ED',
                  padding: '4px 10px',
                  borderRadius: '8px',
                  border: '1px solid #FDBA74',
                }}
              >
                {skill.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
