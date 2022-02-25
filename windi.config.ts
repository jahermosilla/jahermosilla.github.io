import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  darkMode: 'class',

  plugins: [
    typography(),
    require('@windicss/plugin-scrollbar'),
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
        },
        // secondary: {
        //   DEFAULT: '#8e24aa',
        //   light: '#c158dc',
        //   dark: '#c158dc',
        //   darker: '#171417'
        // },

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