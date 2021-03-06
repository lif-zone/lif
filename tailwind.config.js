module.exports = {
    purge: ['./pkg/www/pages/**/*.{js,ts,jsx,tsx}',
        './pkg/www/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
         'lif-gray': '#f3f3f3',
         'lif-blue': '#1f2348'
        },
      },
      fontFamily: {
        body: ['Muli', 'sans-serif'],
      },
      /* backgroundColor: theme => ({
       ...theme('colors'),
      }) */
    },
    variants: {
      extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
