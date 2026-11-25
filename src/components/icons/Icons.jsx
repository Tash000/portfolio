import React from 'react';

/**
 * IconBase
 * Shared SVG wrapper providing consistent geometry, accessibility, and color inheritance.
 */
export function IconBase({
  children,
  size = '1em',
  color,
  stroke = 'currentColor',
  fill = 'none',
  strokeWidth = 2,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  viewBox = '0 0 24 24',
  style,
  ...props
}) {
  const isLabeled = Boolean(props['aria-label'] || props['aria-labelledby'] || props.title);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      aria-hidden={isLabeled ? undefined : true}
      focusable="false"
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...(color ? { color } : {}),
        ...style,
      }}
      {...props}
    >
      {children}
    </svg>
  );
}

// ============================================================
// BRANDS (Solid fill="currentColor", stroke="none")
// ============================================================

export function GitHubIcon(props) {
  return (
    <IconBase fill="currentColor" stroke="none" {...props}>
      <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 4.64 3.01 8.58 7.18 9.97.52.1.71-.23.71-.5 0-.25-.01-1.08-.01-1.96-2.92.63-3.54-1.24-3.54-1.24-.48-1.21-1.17-1.53-1.17-1.53-.95-.65.07-.64.07-.64 1.06.07 1.61 1.08 1.61 1.08.94 1.61 2.46 1.14 3.06.87.09-.68.37-1.14.67-1.4-2.33-.26-4.78-1.16-4.78-5.18 0-1.14.41-2.08 1.08-2.81-.11-.27-.47-1.33.1-2.77 0 0 .88-.28 2.89 1.07a10.04 10.04 0 0 1 5.26 0c2.01-1.35 2.89-1.07 2.89-1.07.57 1.44.21 2.5.1 2.77.67.73 1.08 1.67 1.08 2.81 0 4.03-2.46 4.91-4.8 5.17.38.33.72.97.72 1.96 0 1.41-.01 2.55-.01 2.9 0 .28.19.61.72.5A10.5 10.5 0 0 0 22.5 12C22.5 6.2 17.8 1.5 12 1.5Z" />
    </IconBase>
  );
}

export function LinkedInIcon(props) {
  return (
    <IconBase fill="currentColor" stroke="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3ZM7.05 8.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5.75 18.5h2.6V10h-2.6v8.5Zm12.75 0h-2.6v-4.4c0-1.05-.02-2.4-1.46-2.4-1.47 0-1.69 1.15-1.69 2.32V18.5h-2.6V10h2.5v1.16h.04c.36-.68 1.24-1.4 2.55-1.4 2.73 0 3.26 1.8 3.26 4.14v4.6Z"
      />
    </IconBase>
  );
}

// ============================================================
// NAVIGATION & UI
// ============================================================

export function MenuIcon(props) {
  return (
    <IconBase {...props}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </IconBase>
  );
}

export function CloseIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconBase>
  );
}

export function MailIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </IconBase>
  );
}

export function ArrowDownIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </IconBase>
  );
}

export function ArrowUpIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </IconBase>
  );
}

export function ArrowRightIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </IconBase>
  );
}

export function ExternalLinkIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </IconBase>
  );
}

export function LockIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </IconBase>
  );
}

export function UnlockIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </IconBase>
  );
}

export function CheckIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M20 6 9 17l-5-5" />
    </IconBase>
  );
}

export function CheckCircleIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </IconBase>
  );
}

export function UserIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </IconBase>
  );
}

export function MessageSquareIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </IconBase>
  );
}

export function SendIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4Z" />
    </IconBase>
  );
}

export function PlayIcon(props) {
  return (
    <IconBase {...props}>
      <polygon points="6 4 20 12 6 20 6 4" />
    </IconBase>
  );
}

export function PauseIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </IconBase>
  );
}

// ============================================================
// ENGINEERING & DOMAIN
// ============================================================

export function FlameIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
    </IconBase>
  );
}

export function BotIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 8V4H8" />
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M9 13v2" />
      <path d="M15 13v2" />
    </IconBase>
  );
}

export function BoltIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </IconBase>
  );
}

export function RocketIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      <circle cx="15.5" cy="8.5" r="1" />
    </IconBase>
  );
}

export function LaptopCodeIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="16" height="12" rx="2" />
      <path d="M2 20h20" />
      <path d="m9 8-2 2 2 2" />
      <path d="m15 8 2 2-2 2" />
      <path d="m13 7-2 6" />
    </IconBase>
  );
}

export function PlugIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M6 8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </IconBase>
  );
}

export function GearIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
      <circle cx="12" cy="12" r="3" />
    </IconBase>
  );
}

export function EyeIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </IconBase>
  );
}

export function WrenchIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
    </IconBase>
  );
}

export function StarIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </IconBase>
  );
}

export function LightbulbIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </IconBase>
  );
}

export function HourglassIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M5 2h14" />
      <path d="M5 22h14" />
      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </IconBase>
  );
}

export function TimerIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M10 2h4" />
      <path d="M12 2v4" />
      <path d="M18.5 7.5 20 6" />
      <circle cx="12" cy="14" r="8" />
      <path d="m12 14 3-3" />
    </IconBase>
  );
}

export function SnowflakeIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M2 12h20" />
      <path d="M12 2v20" />
      <path d="m20 16-4-4 4-4" />
      <path d="m4 8 4 4-4 4" />
      <path d="m16 4-4 4-4-4" />
      <path d="m8 20 4-4 4 4" />
    </IconBase>
  );
}

export function CloudSunIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M13 2v2" />
      <path d="m7.34 4.34 1.42 1.42" />
      <path d="m18.66 4.34-1.42 1.42" />
      <path d="M19 10h2" />
      <path d="M16.46 12A4 4 0 1 0 9.54 12" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </IconBase>
  );
}

// ============================================================
// ATMOSPHERE GLYPHS
// ============================================================

export function StarFourPointIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2Z" />
    </IconBase>
  );
}

export function BubbleIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 10a4 4 0 0 1 3.5-2.5" />
      <path d="M15.5 15.5h.01" />
    </IconBase>
  );
}

export function SparkleIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M10 6l1.7 5.3L17 13l-5.3 1.7L10 20l-1.7-5.3L3 13l5.3-1.7Z" />
      <path d="M18.5 2.5l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7Z" />
    </IconBase>
  );
}

// ============================================================
// PORTFOLIO ICON DISPATCHER
// ============================================================

const SEMANTIC_ICON_MAP = {
  // Brands
  github: GitHubIcon,
  linkedin: LinkedInIcon,

  // Navigation & UI
  menu: MenuIcon,
  close: CloseIcon,
  x: CloseIcon,
  mail: MailIcon,
  email: MailIcon,
  arrowdown: ArrowDownIcon,
  arrowup: ArrowUpIcon,
  arrowright: ArrowRightIcon,
  externallink: ExternalLinkIcon,
  lock: LockIcon,
  unlock: UnlockIcon,
  check: CheckIcon,
  checkcircle: CheckCircleIcon,
  user: UserIcon,
  messagesquare: MessageSquareIcon,
  send: SendIcon,
  play: PlayIcon,
  pause: PauseIcon,

  // Engineering & Domain
  flame: FlameIcon,
  fire: FlameIcon,
  bot: BotIcon,
  robot: BotIcon,
  bolt: BoltIcon,
  zap: BoltIcon,
  rocket: RocketIcon,
  laptopcode: LaptopCodeIcon,
  laptop: LaptopCodeIcon,
  code: LaptopCodeIcon,
  plug: PlugIcon,
  gear: GearIcon,
  settings: GearIcon,
  eye: EyeIcon,
  wrench: WrenchIcon,
  tools: WrenchIcon,
  star: StarIcon,
  lightbulb: LightbulbIcon,
  bulb: LightbulbIcon,
  hourglass: HourglassIcon,
  timer: TimerIcon,
  snowflake: SnowflakeIcon,
  snow: SnowflakeIcon,
  cloudsun: CloudSunIcon,

  // Atmosphere Glyphs
  starfourpoint: StarFourPointIcon,
  bubble: BubbleIcon,
  sparkle: SparkleIcon,
  sparkles: SparkleIcon,
};

const EMOJI_ICON_MAP = {
  '🤖': BotIcon,
  '⚡': BoltIcon,
  '🔥': FlameIcon,
  '🚀': RocketIcon,
  '💻': LaptopCodeIcon,
  '🔌': PlugIcon,
  '⚙️': GearIcon,
  '⚙': GearIcon,
  '👁️': EyeIcon,
  '👁': EyeIcon,
  '🛠️': WrenchIcon,
  '🛠': WrenchIcon,
  '🔧': WrenchIcon,
  '⭐': StarIcon,
  '★': StarFourPointIcon,
  '●': BubbleIcon,
  '✦': SparkleIcon,
  '✨': SparkleIcon,
  '💡': LightbulbIcon,
  '⏳': HourglassIcon,
  '⌛': HourglassIcon,
  '⏱️': TimerIcon,
  '⏱': TimerIcon,
  '❄️': SnowflakeIcon,
  '❄': SnowflakeIcon,
  '⛅': CloudSunIcon,
  '🔒': LockIcon,
  '🔓': UnlockIcon,
  '✉️': MailIcon,
  '✉': MailIcon,
  '📧': MailIcon,
  '👤': UserIcon,
  '💬': MessageSquareIcon,
  '✓': CheckIcon,
  '✔': CheckIcon,
  '✔️': CheckIcon,
  '✅': CheckCircleIcon,
};

function resolveIconComponent(name) {
  if (!name || typeof name !== 'string') return null;

  const trimmed = name.trim();
  if (EMOJI_ICON_MAP[trimmed]) {
    return EMOJI_ICON_MAP[trimmed];
  }

  // Also check emoji with variation selector stripped
  const strippedEmoji = trimmed.replace(/\uFE0F/g, '');
  if (EMOJI_ICON_MAP[strippedEmoji]) {
    return EMOJI_ICON_MAP[strippedEmoji];
  }

  const normalized = trimmed
    .toLowerCase()
    .replace(/[\s_-]+/g, '')
    .replace(/icon$/, '');

  return SEMANTIC_ICON_MAP[normalized] || null;
}

/**
 * PortfolioIcon
 * Resolves either a semantic icon name (e.g. "bot", "laptopCode", "cloud-sun")
 * or a legacy emoji glyph (e.g. "🤖", "⚡", "⚙️", "❄️") to its SVG icon component.
 */
export function PortfolioIcon({ name, size = '1em', color, fallback = null, ...props }) {
  const IconComponent = resolveIconComponent(name);
  if (!IconComponent) return fallback;

  return React.createElement(IconComponent, { size, color, ...props });
}

export default PortfolioIcon;
