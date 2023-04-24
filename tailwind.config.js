/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      inset: {
        'm-1': "-10px"
      },
      colors: {
        'primary': '#5537f7',
        'primary-light': '#775ff8',
        'primary-dark': '#3b26ac',
        'Systemred': '#eb2140',
        'Systemred-light': '#ef4d66',
        'Systemred-dark': '#a4172c',
        'Systempink': '#e82596',
        'Systempink-light': '#ec50ab',
        'Systempink-dark': '#3b26ac',
        'SystemlightBlue': '#2953de',
        'SystemlightBlue-light': '#5375e4',
        'SystemlightBlue-dark': '#1c3a9b',
        'blue-50': '#F3F1FF',
        'blue-100': '#E3DEFD',
        'blue-200': '#A494FA',
        'blue-300': '#856FFA',
        'blue-400': '#755CF9',
        'blue-500': '#5537F7',
        'blue-600': '#1832F7',
        'blue-700': '#0820DA',
        'blue-800': '#190874',
        'blue-900': '#120367',
        'grey-50': '#F3F3F3',
        'grey-100': '#E4E4E4',
        'grey-200': '#D1D1D1',
        'grey-300': '#CECECE',
        'grey-400': '#AAAAAA',
        'grey-500': '#969696',
        'grey-600': '#808080',
        'grey-700': '#6B6B6B',
        'grey-800': '#4B4B4B',
        'grey-900': '#303030',
      },
      fontSize: {
        'micro': "12px",
        'small': "14px",
        "base": "16px",
        "medium": "18px",
        "large": "24px",
        "xlarge": "32px"
      },
      fontFamily: {
        "medium": 500,
        "bold": 700,
        "black": 900
      }
    },
  },
  plugins: [],
}
