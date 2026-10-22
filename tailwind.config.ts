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
        graphite: {
          DEFAULT: palette.graphite,
          // Footer surface.
          deep: palette.graphiteDeep,
          // Panels that sit on graphite, such as key takeaways in a hero.
          raised: palette.graphiteRaised,
        },
        steel: palette.steel,
        ember: {
          // Brand flame. Decorative shapes, rules, and large numerals only.
          DEFAULT: palette.ember,
          // Primary button fill and full ember sections. Graphite text on it.
          fill: palette.emberFill,
          // Button hover, and ember text on graphite.
          hover: palette.emberHover,
          // Small ember text on white and stone.
          text: palette.emberText,
        },
        ash: palette.ash,
        stone: palette.stone,
        line: palette.line,
        mist: palette.mist,
        fog: palette.fog,
        // Accent text that adapts to its surface: ember text on light
        // surfaces, ember hover on graphite. See --accent in globals.css.
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1360px',
        reading: '720px',
      },
    },
  },
  plugins: [],
}
export default config
