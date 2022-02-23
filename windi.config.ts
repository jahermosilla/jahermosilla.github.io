import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';
import typography from 'windicss/plugin/typography';

const primary = colors.blue;
const secondary = colors.purple;

export default defineConfig({
  darkMode: 'class',

  plugins: [
    typography(),
    require('@windicss/plugin-scrollbar'),
  ],

  shortcuts: {
    'page-padding': 'px-8 md:px-16 lg:px-24 xl:px-48 2xl:px-60'
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
          dark: '#6ec6ff',
          darker: '#00227b'
        },
        secondary: {
          DEFAULT: '#8e24aa',
          light: '#c158dc',
          dark: '#c158dc',
          darker: '#5c007a'
        },

      }
    }
  },

  // theme: {
  //   extend: {
  //     typography: {
  //       DEFAULT: {
  //         css: {
  //           maxWidth: '65ch',
  //           color: 'inherit',
  //           a: {
  //             'color': 'inherit',
  //             'opacity': 0.75,
  //             'fontWeight': '500',
  //             'textDecoration': 'underline',
  //             '&:hover': {
  //               opacity: 1,
  //               color: colors.teal[600],
  //             },
  //           },
  //           b: { color: 'inherit' },
  //           strong: { color: 'inherit' },
  //           em: { color: 'inherit' },
  //           h1: { color: 'inherit' },
  //           h2: { color: 'inherit' },
  //           h3: { color: 'inherit' },
  //           h4: { color: 'inherit' },
  //           code: { color: 'inherit' },
  //         },
  //       },
  //     },
  //   },
  // },
})