import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, THEME_TRANSITION_DURATION } from '../context/ThemeContext';
import { FiPlay, FiPause, FiChevronUp, FiChevronDown, FiClock } from 'react-icons/fi';

export default function ThemeControl() {
  const { progress, themePhase, setProgress, isPaused, togglePause } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const elapsedSecs = Math.round(progress * THEME_TRANSITION_DURATION);
  const minutes = Math.floor(elapsedSecs / 60);
  const seconds = elapsedSecs % 60;
  const timeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  const phaseConfig = {
    cool: {
      name: 'Cool Sky',
      icon: '❄️',
      color: '#0284C7',
      bg: 'rgba(240, 249, 255, 0.95)',
      border: '#BAE6FD',
      shape: '★ Floating Stars',
    },
    neutral: {
      name: 'Neutral Bloom',
      icon: '⛅',
      color: '#0D9488',
      bg: 'rgba(240, 253, 250, 0.95)',
      border: '#99F6E4',
      shape: '● Water Bubbles',
    },
    warm: {
      name: 'Solar Flame',
      icon: '🔥',
      color: '#EA580C',
      bg: 'rgba(255, 247, 237, 0.95)',
      border: '#FED7AA',
      shape: '✦ Fiery Sparkles',
    },
  }[themePhase];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 50,
        fontFamily: 'var(--font-main)',
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              background: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--border-light)',
              borderRadius: '18px',
              padding: '16px 20px',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)',
              width: '290px',
              marginBottom: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.2rem' }}>{phaseConfig.icon}</span>
                <div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0F172A' }}>
                    {phaseConfig.name}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 500 }}>
                    {phaseConfig.shape}
                  </div>
                </div>
              </div>

              <button
                onClick={togglePause}
                title={isPaused ? 'Resume Theme Shift' : 'Pause Theme Shift'}
                style={{
                  background: 'var(--flame-50)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--flame-600)',
                  padding: '6px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                }}
              >
                {isPaused ? <FiPlay /> : <FiPause />}
              </button>
            </div>

            {/* Progress Bar & Timestamp */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B', marginBottom: '4px', fontWeight: 600 }}>
                <span>Evolution ({timeFormatted} / 1:45)</span>
                <span>{Math.round(progress * 100)}%</span>
              </div>
              <div
                style={{
                  height: '6px',
                  background: '#E2E8F0',
                  borderRadius: '999px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  setProgress(clickX / rect.width);
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
            </div>

            {/* Quick Phase Jump Pills */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
              <button
                onClick={() => setProgress(0.0)}
                style={{
                  padding: '6px 4px',
                  borderRadius: '10px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: progress < 0.35 ? '1.5px solid #0284C7' : '1px solid #E2E8F0',
                  background: progress < 0.35 ? '#F0F9FF' : '#FFFFFF',
                  color: progress < 0.35 ? '#0284C7' : '#64748B',
                }}
              >
                ❄️ Cool
              </button>
              <button
                onClick={() => setProgress(0.5)}
                style={{
                  padding: '6px 4px',
                  borderRadius: '10px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: progress >= 0.35 && progress < 0.72 ? '1.5px solid #0D9488' : '1px solid #E2E8F0',
                  background: progress >= 0.35 && progress < 0.72 ? '#F0FDFA' : '#FFFFFF',
                  color: progress >= 0.35 && progress < 0.72 ? '#0D9488' : '#64748B',
                }}
              >
                ⛅ Neutral
              </button>
              <button
                onClick={() => setProgress(1.0)}
                style={{
                  padding: '6px 4px',
                  borderRadius: '10px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: progress >= 0.72 ? '1.5px solid #EA580C' : '1px solid #E2E8F0',
                  background: progress >= 0.72 ? '#FFF7ED' : '#FFFFFF',
                  color: progress >= 0.72 ? '#EA580C' : '#64748B',
                }}
              >
                🔥 Warm
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          borderRadius: '9999px',
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          border: '1.5px solid var(--border-light)',
          color: 'var(--flame-700)',
          fontSize: '0.82rem',
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.25s ease',
        }}
      >
        <span style={{ fontSize: '1rem' }}>{phaseConfig.icon}</span>
        <span>Theme: {phaseConfig.name}</span>
        <span
          style={{
            fontSize: '0.72rem',
            background: 'var(--flame-50)',
            padding: '2px 6px',
            borderRadius: '6px',
            color: 'var(--flame-600)',
          }}
        >
          {timeFormatted}
        </span>
        {isOpen ? <FiChevronDown /> : <FiChevronUp />}
      </button>
    </div>
  );
}
