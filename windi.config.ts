import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';
import typography from 'windicss/plugin/typography'

const primary = colors.blue;

export default defineConfig({
  darkMode: 'class',

  // attributify: {
  //   prefix: 'w:'
  // },

  plugins: [
    typography()
  ],

  shortcuts: {
    'page-padding': 'px-10 lg:px-30 xl:px-60'
  },

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: primary['500'],
          dark: primary['400']
        }
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