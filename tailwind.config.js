/**
 * Tailwind CSS configuration for Hope's modeling portfolio.
 *
 * This file extends the default Tailwind theme to include custom
 * fonts and colours inspired by the reference slides provided by the client.
 */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        fashionRed: '#a32117', // deep muted red used for headings and accents
        creamBg: '#efefef',    // soft cream background from the slides
        textBlack: '#0a0a0a',  // rich black for text
        borderBlack: '#0a0a0a',// border colour for frames
      },
      fontFamily: {
        fashion: ['"Bodoni Moda"', 'serif'],
        signature: ['"Great Vibes"', 'cursive'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
