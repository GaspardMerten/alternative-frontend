/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                black: '#222',
                primary: {
                    DEFAULT: '#59BEAD',
                    light: '#eafaf4'
                },
                secondary: {
                    DEFAULT: '#68A9DB',
                    light: '#d7ebfa'
                },
                light_gray: '#f5f5f5',
            },
        },
    },
    plugins: [],
};
