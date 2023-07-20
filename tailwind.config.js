/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         backgroundImage: {
            'soccer-field': 'url(../../public/Soccer_Field_Transparant.svg)',
         },
      },
   },
   plugins: [],
};
