const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{ts,tsx,jsx,js}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['GTWalsheimPro', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                lg: ['19px', '30px'],
            },
        },
    },
    plugins: [],
};
