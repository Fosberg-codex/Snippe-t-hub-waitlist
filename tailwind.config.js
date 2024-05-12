/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        lightGreen: '#37FF8B',
        navcolor:'#115D78',
        yellow:'#F2F230' // Adjust the hex code for your desired shade
      },
      fontFamily: { 
        "poppins": ['Poppins', 'sans-serif'] 
    } 
    },
  },
  plugins: [
    daisyui,
    require('daisyui'),
  ],
}

