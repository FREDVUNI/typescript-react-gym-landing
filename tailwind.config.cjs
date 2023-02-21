/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "gray-20":"#f8f4e8",
        "gray-50":"#f8f4e8",
        "gray-100":"#dfcccc",
        "gray-500":"#5e0000",
        "primary-100":"#ffe1e0",
        "primary-300":"#ffa6a3",
        "primary-500":"#ff6b66",
        "secondary-400":"#ffcd58",
        "secondary-500":"#ffc132",
      },
      backgroundImage:(theme) =>({
        "gradient-yellowred":"linear-gradient(90deg, #ff616a 0%, #ffc837 100%)",
        "mobile-home":"url('./assets/HomePageGraphic.png)"
      }),
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
        // montserrat: ['Montserrat','sans-serif'],
      },
      content:{
        evolvetext:"url('./assets/EvolveText.png')",
        abstractwaves:"url('./assets/AbstractWaves.png')",
        sparkles:"url('./assets/Sparkles.png')",
        circles:"url('./assets/Circles.png')",
      }
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px"
    }
  },
  plugins: [],
}