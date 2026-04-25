/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#33C7C6",
          pink: "#FF7FB5",
          cream: "#FFFDF8",
          yellow: "#FFE58F",
          sky: "#B8F0FF",
          mint: "#D9FFF6",
          navy: "#184B63",
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', "cursive"],
        body: ['"Nunito"', "sans-serif"],
      },
      boxShadow: {
        playful: "0 18px 40px rgba(24, 75, 99, 0.12)",
      },
      backgroundImage: {
        confetti:
          "radial-gradient(circle at 20% 20%, rgba(255, 127, 181, 0.22), transparent 30%), radial-gradient(circle at 80% 0%, rgba(51, 199, 198, 0.22), transparent 28%), radial-gradient(circle at 50% 80%, rgba(255, 229, 143, 0.3), transparent 26%)",
      },
      animation: {
        float: "float 3.8s ease-in-out infinite",
        wiggleSoft: "wiggleSoft 2.2s ease-in-out infinite",
        popIn: "popIn 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        wiggleSoft: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-4deg)" },
          "75%": { transform: "rotate(4deg)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
