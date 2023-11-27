/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'purple' : "#7f19b4",
      },
      backgroundColor: {
        'dark': '#1e1e1e',
        'light': '#f3f3f3',
      },
      screens: {
        tablet: {'max': '768px'},
        phone: {'max': '479px'},
      },
      height: {
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-85': '85vh',
        'screen-90': '90vh',
        'screen-95': '95vh',
      },
    },
  },
  plugins: [],
}
