/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./node_modules/flowbite/**/*.js",
        "./resources/**/*.blade.php",
        "./resources/js/**/*.{vue,js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {},
  },
  plugins: [
      require('flowbite/plugin')
  ],
}

