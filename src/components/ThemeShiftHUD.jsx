import React from 'react';
import { useTheme, THEME_TRANSITION_DURATION } from '../context/ThemeContext';

const PHASE_LABELS = {
  cool:    { emoji: '❄️',  label: 'Cool',    color: '#0284C7', track: '#E0F2FE' },
  neutral: { emoji: '🌊',  label: 'Shifting', color: '#0D9488', track: '#CCFBF1' },
  warm:    { emoji: '🔥',  label: 'Warm',    color: '#EA580C', track: '#FED7AA' },
};

export default function ThemeShiftHUD() {
  const { progress, themePhase, isPaused, togglePause } = useTheme();
  const phase = PHASE_LABELS[themePhase];

  const pct = Math.round(progress * 100);
  const remaining = Math.round((1 - progress) * THEME_TRANSITION_DURATION);
  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const timeLabel = mins > 0
    ? `${mins}m ${secs}s`
    : `${secs}s`;

  return (
    <div
      style={{
        position: 'fixed',
        top: '72px',
        right: '16px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '6px',
        userSelect: 'none',
      }}
    >
      {/* Phase badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          background: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(12px)',
          border: `1.5px solid ${phase.color}30`,
          borderRadius: '999px',
          padding: '5px 12px 5px 10px',
          boxShadow: `0 4px 14px ${phase.color}22`,
          transition: 'all 0.6s ease',
          fontSize: '0.78rem',
          fontWeight: 700,
          color: phase.color,
          cursor: 'pointer',
        }}
        onClick={togglePause}
        title={isPaused ? 'Resume theme shift' : 'Pause theme shift'}
      >
        <span style={{ fontSize: '1rem' }}>{phase.emoji}</span>
        <span>{phase.label}</span>
        <span style={{ opacity: 0.7, fontWeight: 500, marginLeft: '2px' }}>
          {isPaused ? '⏸ paused' : `~${timeLabel}`}
        </span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: '140px',
          height: '5px',
          background: phase.track,
          borderRadius: '999px',
          overflow: 'hidden',
          boxShadow: `0 2px 8px ${phase.color}18`,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${pct}%`,
            background: `linear-gradient(90deg, #0284C7, ${phase.color})`,
            borderRadius: '999px',
            transition: 'width 0.5s linear, background 1s ease',
          }}
        />
      </div>
    </div>
  );
}
