/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            'proxima': ['proxima-reg', 'sans-serif'],
            'proximaBold': ['proxima-bold', 'sans-serif'],
        }
    },
  },
  plugins: [],
}

