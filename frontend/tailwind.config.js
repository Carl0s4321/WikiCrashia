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
                'proxima': ['proxima_reg', 'sans-serif'],
                'proximaBold': ['proxima_bold', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'spin-horizontal': 'spinHorizontal 8s linear infinite',
            },
            keyframes: {
                spinHorizontal: {
                    '0%': { transform: 'rotateY(0deg)' },
                    '100%': { transform: 'rotateY(360deg)' },
                },
            },
            perspective: {
                '1000': '1000px',
            },
        },
    },
    plugins: [],
}

