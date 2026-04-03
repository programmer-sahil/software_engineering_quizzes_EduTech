/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      colors: {
        ink: '#020617',
        accent: '#22d3ee',
        neon: '#38bdf8',
        coral: '#fb7185',
      },
      boxShadow: {
        glow: '0 0 50px rgba(34, 211, 238, 0.22)',
        card: '0 20px 80px rgba(2, 6, 23, 0.5)',
      },
      backgroundImage: {
        'mesh-dark':
          'radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.18), transparent 35%), radial-gradient(circle at 80% 10%, rgba(251, 113, 133, 0.16), transparent 30%), radial-gradient(circle at 50% 80%, rgba(56, 189, 248, 0.18), transparent 42%)',
      },
    },
  },
  plugins: [],
};
