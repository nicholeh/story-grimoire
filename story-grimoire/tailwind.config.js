module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                display: ['Forum', 'serif'],
                body: ['Work Sans', 'sans-serif'],
            },
            spacing: {
                18: '4.5rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
