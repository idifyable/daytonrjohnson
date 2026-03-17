export const theme = {
  colors: {
    bg: '#080808',
    surface: '#111111',
    surfaceHover: '#161616',
    border: '#1e1e1e',
    borderHover: '#2e2e2e',
    text: '#e2e2e2',
    textMuted: '#666666',
    textSubtle: '#444444',
    accent: '#00D4FF',
    accentDim: 'rgba(0, 212, 255, 0.08)',
    accentGlow: 'rgba(0, 212, 255, 0.15)',
  },
  fonts: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
  },
  maxWidth: '860px',
  navHeight: '64px',
} as const

export type Theme = typeof theme
