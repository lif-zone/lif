module.exports = {
    purge: ['./pkg/www/pages/**/*.{js,ts,jsx,tsx}',
        './pkg/www/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'lif-gray': '#f3f3f3',
          'lif-main': '#1f2348',
          'lif-blue': '#0582ca',
          'lif-blue-darkened': '#0071c3',
          'lif-gray-bg': '#e4e4e7',
          'lif-gray-bg-darkened': '#d9d9de',
        },
      },
      fontFamily: {
        body: ['Muli', 'sans-serif'],
      },
    },
    variants: {
      extend: {
        translate: ['responsive', 'group-hover'],
      },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('tailwindcss-rtl'),
    ],
};
