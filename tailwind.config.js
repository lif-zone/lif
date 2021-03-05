module.exports = {
    purge: ['./pkg/www/pages/**/*.{js,ts,jsx,tsx}',
        './pkg/www/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      backgroundColor: theme => ({
       ...theme('colors'),
       'lif-gray': '#f3f3f3',
      })
    },
    variants: {
      extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
