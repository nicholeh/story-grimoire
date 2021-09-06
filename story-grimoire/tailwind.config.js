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
        screens: {
            xxs: '20em', // 320px
            xs: '23.4375em', // 375px
            sm: '40em', // 640px
            md: '48em', // 768px
            lg: '64em', // 1024px
            xl: '80em', // 1280px
            xxl: '90em', // 1440px
            xxxl: '101.25em', // 1620px
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
