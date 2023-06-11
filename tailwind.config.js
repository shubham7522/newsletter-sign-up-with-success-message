/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        RobotoBold:['Roboto-Bold','sans-serif'],
        Roboto:['Roboto','sans-serif'],
      },
      backgroundImage:{
        'icon':"url('assets/images/icon-list.svg')",
        'hero-pattern':"url('assets/images/illustration-sign-up-mobile.svg')",
        'hero-pattern-desktop':"url('assets/images/illustration-sign-up-desktop.svg')",
      },
      colors:{
        'Tomato':['hsl(4, 100%, 67%)'],
        'DarkSlateGrey': ['hsl(234, 29%, 20%)'],
        'CharcoalGrey':['hsl(235, 18%, 26%)'],
        'Grey':['hsl(231, 7%, 60%)'],
      },
    },
  },
  plugins: [],
}

