// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     darkMode: 'class', // Enables class-based dark mode
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         spin: {
//           '0%': { transform: 'rotate(0deg)' },
//           '100%': { transform: 'rotate(360deg)' },
//         },
//         fadeInUp: {
//           '0%': { opacity: '0', transform: 'translateY(20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//       },
//       animation: {
//         spin: 'spin 2s linear infinite',
//         'fade-in-up': 'fadeInUp 1s ease-out',
//         'fade-in-up-delay': 'fadeInUp 1s ease-out 0.3s',
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        spin: 'spin 2s linear infinite',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-up-delay': 'fadeInUp 1s ease-out 0.3s',
      },
    },
  },
  plugins: [],
}
