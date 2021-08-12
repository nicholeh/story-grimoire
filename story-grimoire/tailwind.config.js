module.exports = {
    purge: ['./src/**/*.{js,jsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'work-sans': ['Work Sans', 'sans-serif'],
                bitter: ['Bitter', 'serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
