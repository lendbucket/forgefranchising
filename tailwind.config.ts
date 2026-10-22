import type { Config } from 'tailwindcss'
import palette from './src/lib/palette.json'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        graphite: palette.graphite,
        steel: palette.steel,
        ember: {
          DEFAULT: palette.ember,
          // Fill for buttons that carry graphite text. Lifted slightly from
          // the brand ember so graphite text clears 4.5:1.
          button: palette.emberButton,
          hover: palette.emberHover,
          // Ember for text on light surfaces. Passes 4.5:1 on white and ash tint.
          dark: palette.emberDark,
          // Ember for text on graphite. Passes 4.5:1 on graphite.
          light: palette.emberHover,
        },
        ash: {
          DEFAULT: palette.ash,
          tint: palette.ashTint,
        },
        // Accent text that adapts to its surface: dark ember on light
        // surfaces, light ember on graphite. See --accent in globals.css.
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
export default config
