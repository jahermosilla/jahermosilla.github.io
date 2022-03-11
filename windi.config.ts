import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';

const heroPatterns = require('@windicss/plugin-heropatterns')({
  // the list of patterns you want to generate a class for
  // the names must be in kebab-case
  // an empty array will generate all 87 patterns
  patterns: ['circuit-board'],

  // The foreground colors of the pattern
  colors: {
    normal: '#0023b6',
    'dark': '#6bdcd9', // also works with rgb(0,0,205)
  },

  // The foreground opacity
  opacity: {
    default: '0.8'
  },
});

export default defineConfig({
  darkMode: 'class',

  plugins: [
    typography(),
    require('@windicss/plugin-scrollbar'),
    heroPatterns
  ],

  shortcuts: {
    'page-padding': 'px-8 md:px-16 lg:px-24 xl:px-48 2xl:px-60',
    'app-background': 'bg-app-background dark:bg-app-background-dark',
    'app-header-background': 'bg-app-background/80 dark:bg-app-background-dark/80'
  },

  variants: {
    scrollbar: [
      'rounded'
    ]
  },

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0023b6',
          dark: '#6bdcd9',
        },

        'app-background': {
          DEFAULT: '#f1eff1',
          dark: '#2c214f',
        }
      }
    }
  },
})