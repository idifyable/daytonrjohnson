export const theme = {
  colors: {
    bg: '#F6F5F2',
    surface: '#FFFFFF',
    surfaceHover: '#F2F1EC',
    border: '#D8D4C8',
    borderHover: '#B9B6A7',
    text: '#24292E',
    textMuted: '#5B6582',
    textSubtle: '#777D92',
    accent: '#1A67B8',
    accentDim: 'rgba(26, 103, 184, 0.12)',
    accentGlow: 'rgba(26, 103, 184, 0.18)',
  },
  fonts: {
    sans: "'Inter', 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    display: "'Spectral', Georgia, 'Times New Roman', serif",
    mono: "'Space Mono', 'JetBrains Mono', monospace",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
  },
  maxWidth: '860px',
  navHeight: '64px',
} as const;

export type Theme = typeof theme;
