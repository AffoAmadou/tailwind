const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        one: ['SOne', "sans-serif"],
        oneBold: ['OneBold', "sans-serif"],
        samsung: ['Samsung', "sans-serif"]
      },
      screens: {
        xxl: '1410px',
        'desktop': '900px',
      },
      spacing: {
        'container': '96rem',
        'cHeight': '6.25rem',
        'navRight': '20.938rem',
        'navLeft': '52.5rem',
        'logo': '10rem',
        'pad': '1rem',
        'heroh': '30.813rem',
        'herobg': '54.563rem',
        'herotxt': '34.813rem',
        'herotxth': '16.563rem',
        'ctxh': '42.75rem',
        'ctxw': '28rem',
        'lastmenu': '65.688rem',
        'lastsectionw': '86.063rem',
        'lastsectionh': '42.75rem',
        'lsfirstchildw': '20.625rem',
      }

    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/forms', {
    strategy: 'base', // only generate global styles
    // strategy: 'class', // only generate classes
  })],
};
