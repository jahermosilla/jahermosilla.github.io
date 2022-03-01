import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';

const heroPatterns = require('@windicss/plugin-heropatterns')({
  // the list of patterns you want to generate a class for
  // the names must be in kebab-case
  // an empty array will generate all 87 patterns
  patterns: ['circuit-board'],

  // The foreground colors of the pattern
  colors: {
    normal: '#3949ab',
    'dark': '#8e99f3', // also works with rgb(0,0,205)
  },

  // The foreground opacity
  opacity: {
    default: '0.6'
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
    'app-background': 'bg-light-100 dark:bg-primary-darker',
    'app-header-background': 'bg-light-100/80 dark:bg-primary-darker/80'
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
          DEFAULT: '#3949ab',
          light: '#8e99f3',
          dark: '#5e92f3',
          darker: '#171417'
        }
      }
    }
  },
})