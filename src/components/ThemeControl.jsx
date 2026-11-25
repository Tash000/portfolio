import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiPlay, FiPause } from 'react-icons/fi';

export default function ThemeControl() {
  const { progress, themePhase, setProgress, isPaused, togglePause } = useTheme();

  const phaseConfig = {
    cool: {
      name: 'Cool Sky',
      icon: '❄️',
      color: '#0284C7',
      bg: 'rgba(240, 249, 255, 0.95)',
      border: '#BAE6FD',
      shape: '★ Floating Stars',
      description: 'Icy cyan & cobalt tones with razor-sharp diamond stars',
    },
    neutral: {
      name: 'Neutral Bloom',
      icon: '⛅',
      color: '#0D9488',
      bg: 'rgba(240, 253, 250, 0.95)',
      border: '#99F6E4',
      shape: '● Water Bubbles',
      description: 'Balanced emerald & teal hues with gentle translucent spheres',
    },
    warm: {
      name: 'Solar Flame',
      icon: '🔥',
      color: '#EA580C',
      bg: 'rgba(255, 247, 237, 0.95)',
      border: '#FED7AA',
      shape: '✦ Fiery Sparkles',
      description: 'Radiant ember & flame palette with high-energy cross flares',
    },
  }[themePhase];

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 clamp(16px, 4vw, 24px)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid var(--border-light)',
          borderRadius: '24px',
          padding: '24px clamp(16px, 3vw, 28px)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04), 0 2px 8px var(--border-glow)',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px',
          }}
        >
          {/* Active Phase Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 'min(100%, 260px)' }}>
            <span
              style={{
                fontSize: '1.5rem',
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'var(--flame-50)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {phaseConfig.icon}
            </span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0F172A' }}>
                  Atmosphere: {phaseConfig.name}
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '999px',
                    background: 'var(--flame-50)',
                    color: 'var(--flame-700)',
                    border: '1px solid var(--border-light)',
                  }}
                >
                  {phaseConfig.shape}
                </span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '2px' }}>
                {phaseConfig.description}
              </div>
            </div>
          </div>

          {/* Theme Quick Selector Buttons & Play/Pause */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                gap: '6px',
                background: '#F8FAFC',
                padding: '4px',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={() => setProgress(0.0)}
                style={{
                  padding: '7px 12px',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: progress < 0.35 ? '1.5px solid #0284C7' : '1px solid transparent',
                  background: progress < 0.35 ? '#F0F9FF' : 'transparent',
                  color: progress < 0.35 ? '#0284C7' : '#64748B',
                  transition: 'all 0.2s ease',
                }}
              >
                ❄️ Cool Sky
              </button>
              <button
                onClick={() => setProgress(0.5)}
                style={{
                  padding: '7px 12px',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: progress >= 0.35 && progress < 0.72 ? '1.5px solid #0D9488' : '1px solid transparent',
                  background: progress >= 0.35 && progress < 0.72 ? '#F0FDFA' : 'transparent',
                  color: progress >= 0.35 && progress < 0.72 ? '#0D9488' : '#64748B',
                  transition: 'all 0.2s ease',
                }}
              >
                ⛅ Neutral
              </button>
              <button
                onClick={() => setProgress(1.0)}
                style={{
                  padding: '7px 12px',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: progress >= 0.72 ? '1.5px solid #EA580C' : '1px solid transparent',
                  background: progress >= 0.72 ? '#FFF7ED' : 'transparent',
                  color: progress >= 0.72 ? '#EA580C' : '#64748B',
                  transition: 'all 0.2s ease',
                }}
              >
                🔥 Solar Flame
              </button>
            </div>

            <button
              onClick={togglePause}
              title={isPaused ? 'Resume ambient evolution' : 'Pause ambient evolution'}
              style={{
                background: 'var(--flame-50)',
                border: '1.5px solid var(--border-light)',
                color: 'var(--flame-600)',
                width: '38px',
                height: '38px',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--flame-500)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {isPaused ? <FiPlay /> : <FiPause />}
            </button>
          </div>
        </div>

        {/* Ambient Gradient Track (Scrubbable, NO numerical countdown) */}
        <div>
          <div
            style={{
              height: '8px',
              background: '#E2E8F0',
              borderRadius: '999px',
              overflow: 'hidden',
              cursor: 'pointer',
              position: 'relative',
            }}
            title="Click anywhere to shift the ambient atmosphere"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              setProgress(Math.max(0, Math.min(1, clickX / rect.width)));
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${Math.round(progress * 100)}%`,
                background: 'var(--gradient-flame)',
                borderRadius: '999px',
                transition: 'width 0.15s ease',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.72rem',
              color: '#94A3B8',
              marginTop: '5px',
              fontWeight: 600,
            }}
          >
            <span>Cool Atmosphere (Stars)</span>
            <span>Neutral (Bubbles)</span>
            <span>Solar Warmth (Embers)</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
