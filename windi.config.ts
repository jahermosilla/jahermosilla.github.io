import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';
import typography from 'windicss/plugin/typography'

const primary = colors.blue;
const secondary = colors.purple;

export default defineConfig({
  darkMode: 'class',

  // attributify: {
  //   prefix: 'w:'
  // },

  plugins: [
    typography()
  ],

  shortcuts: {
    'page-padding': 'px-8 md:px-16 lg:px-24 xl:px-48 2xl:px-60'
  },

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: primary['500'],
          dark: primary['400']
        },
        secondary: {
          DEFAULT: secondary['500'],
          dark: secondary['400']
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