/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        lime_green: "#e2f163",
        purple: "#896cffe",
        light_purple:"#b3a0ff",
        white: "#ffffff",
        black: "#232323" 
      },
      fontFamily: {
        poppins_Bold: ['Poppins-Bold', 'sans-serif'],
        poppins_SemiBold: ['Poppins-SemiBold', 'sans-serif'],
        poppins_Medium: ['Poppins-Medium', 'sans-serif'],
        poppins_Regular: ['Poppins-Regular', 'sans-serif'],
        poppins_Light: ['Poppins-Light', 'sans-serif'],
        poppins_Thin: ['Poppins-Thin', 'sans-serif'],

        ls_Bold: ['LeagueSpartan-Bold', 'sans-serif'],
        ls_SemiBold: ['LeagueSpartan-SemiBold', 'sans-serif'],
        ls_Medium: ['LeagueSpartan-Medium', 'sans-serif'],
        ls_Regular: ['LeagueSpartan-Regular', 'sans-serif'],
        ls_Light: ['LeagueSpartan-Light', 'sans-serif'],
        ls_Thin: ['LeagueSpartan-Thin', 'sans-serif'],

      },
      fontSize: {
        heading: ['56px', { lineHeight: '120%' }],
        h1: ['48px', { lineHeight: '120%'}],
        h2: ['40px', { lineHeight: '120%' }],
        h3: ['32px', { lineHeight: '120%' }],
        h4: ['24px', { lineHeight: '120%' }],
        h5: ['20px', { lineHeight: '140%' }],
        p: ['16px', { lineHeight: '140%' }],
        label: ['14px', { lineHeight: '140%' }],
        small: ['12px', { lineHeight: 'auto' }],
        tiny: ['10px', { lineHeight: 'auto'}],
      },
    },
  },
  plugins: [],
}