module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#ffffff',
      light: '#F8fbf8',
      black: '#000000',
      wwGreenF: '#77E5CD',
      wwGreenS: '#7CEFBA',
      wwLightGreen: '#C4F4EA',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      red: '	#DA2C43',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      onyx: '#353839',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      pacifico: ['Pacifico', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '48px',
      },
      keyframes: {
        slide: {
          '0%, 100%': { left: '100%' },
          '50%': { left: 0 },
        },
      },
    },
  },
  plugins: [],
};
