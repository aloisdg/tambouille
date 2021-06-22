const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './lib/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        print: { raw: 'print' },
      },
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: colors.lightBlue,
        orange: colors.orange,
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
              code: { color: theme('colors.blue.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
            // body: {
            //   backgroundColor: `
            // radial-gradient(circle farthest-side at 0% 50%, white 23.5%, rgba(240, 166, 17, 0) 0)
            //   21px 30px,
            // radial-gradient(circle farthest-side at 0% 50%, rgba(255, 187 , 17, 0.04) 24%, rgba(240, 166, 17, 0) 0) 19px 30px,
            // linear-gradient(white 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, white 0) 0 0,
            // linear-gradient(
            //     150deg,
            //     white 24%,
            //     rgba(255, 187 , 17, 0.04) 0,
            //     rgba(255, 187 , 17, 0.04) 26%,
            //     rgba(240, 166, 17, 0) 0,
            //     rgba(240, 166, 17, 0) 74%,
            //     rgba(255, 187 , 17, 0.04) 0,
            //     rgba(255, 187 , 17, 0.04) 76%,
            //     white 0
            //   )
            //   0 0,
            // linear-gradient(
            //     30deg,
            //     white 24%,
            //     rgba(255, 187 , 17, 0.04) 0,
            //     rgba(255, 187 , 17, 0.04) 26%,
            //     rgba(240, 166, 17, 0) 0,
            //     rgba(240, 166, 17, 0) 74%,
            //     rgba(255, 187 , 17, 0.04) 0,
            //     rgba(255, 187 , 17, 0.04) 76%,
            //     white 0
            //   )
            //   0 0,
            // linear-gradient(90deg, rgba(255, 187 , 17, 0.04) 2%, white 0, white 98%, rgba(255, 187 , 17, 0.04) 0%) 0 0 white`,
            // },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.orange.500'),
              '&:hover': {
                color: theme('colors.orange.400'),
              },
              code: { color: theme('colors.orange.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
            //     body: {
            //       backgroundColor: `
            // radial-gradient(circle farthest-side at 0% 50%, rgba(17, 24, 39, var(--tw-bg-opacity)) 23.5%, rgba(240, 166, 17, 0) 0)
            //   21px 30px,
            // radial-gradient(circle farthest-side at 0% 50%, rgba(187, 119 , 17, 0.08) 24%, rgba(240, 166, 17, 0) 0) 19px 30px,
            // linear-gradient(rgba(17, 24, 39, var(--tw-bg-opacity)) 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, rgba(17, 24, 39, var(--tw-bg-opacity)) 0) 0 0,
            // linear-gradient(
            //     150deg,
            //     rgba(17, 24, 39, var(--tw-bg-opacity)) 24%,
            //     rgba(187, 119 , 17, 0.08) 0,
            //     rgba(187, 119 , 17, 0.08) 26%,
            //     rgba(240, 166, 17, 0) 0,
            //     rgba(240, 166, 17, 0) 74%,
            //     rgba(187, 119 , 17, 0.08) 0,
            //     rgba(187, 119 , 17, 0.08) 76%,
            //     rgba(17, 24, 39, var(--tw-bg-opacity)) 0
            //   )
            //   0 0,
            // linear-gradient(
            //     30deg,
            //     rgba(17, 24, 39, var(--tw-bg-opacity)) 24%,
            //     rgba(187, 119 , 17, 0.08) 0,
            //     rgba(187, 119 , 17, 0.08) 26%,
            //     rgba(240, 166, 17, 0) 0,
            //     rgba(240, 166, 17, 0) 74%,
            //     rgba(187, 119 , 17, 0.08) 0,
            //     rgba(187, 119 , 17, 0.08) 76%,
            //     rgba(17, 24, 39, var(--tw-bg-opacity)) 0
            //   )
            //   0 0,
            // linear-gradient(90deg, rgba(187, 119 , 17, 0.08) 2%, rgba(17, 24, 39, var(--tw-bg-opacity)) 0, rgba(17, 24, 39, var(--tw-bg-opacity)) 98%, rgba(187, 119 , 17, 0.08) 0%) 0 0 rgba(17, 24, 39, var(--tw-bg-opacity))`,
            //     },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
