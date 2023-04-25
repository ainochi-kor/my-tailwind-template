/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      inset: {
        '10px': "10px"
      },
      colors: {

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
