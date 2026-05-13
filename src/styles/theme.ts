export const theme = {
  colors: {
    bg: '#080806',
    surface: '#0F0F0C',
    surfaceHover: '#141410',
    panel: '#161613',
    border: '#252520',
    borderHover: '#353530',
    text: '#E2DDD0',
    textMuted: '#7A7560',
    textSubtle: '#4A4840',
    phosphor: '#9FBF40',
    phosphorDim: 'rgba(159, 191, 64, 0.08)',
    phosphorGlow: 'rgba(159, 191, 64, 0.18)',
    amber: '#D4882A',
    amberDim: 'rgba(212, 136, 42, 0.12)',
  },
  fonts: {
    display: "'Big Shoulders Display', sans-serif",
    sans: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },
  maxWidth: '900px',
  navHeight: '60px',
} as const;

export type Theme = typeof theme;
