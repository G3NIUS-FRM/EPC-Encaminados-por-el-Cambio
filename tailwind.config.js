/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF2FF",
          100: "#DDE6FF",
          200: "#B8CAFF",
          300: "#8AA8FF",
          400: "#5780E8",
          500: "#2D5BC9",
          600: "#1E3A8A",
          700: "#152A66",
          800: "#0F204D",
          900: "#0A1A3D",
          950: "#050E26",
        },
        gold: {
          50: "#FFFBEB",
          100: "#FFF4C7",
          200: "#FFE889",
          300: "#FFD94D",
          400: "#FFC72C",
          500: "#F5B700",
          600: "#D49500",
          700: "#A06B00",
          800: "#6B4700",
          900: "#3D2800",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Montserrat", "Inter", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(245, 183, 0, 0.35)",
        "navy-glow": "0 0 30px rgba(30, 58, 138, 0.4)",
        card: "0 10px 40px -10px rgba(0,0,0,0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-shine":
          "linear-gradient(135deg, #F5B700 0%, #FFD94D 50%, #F5B700 100%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "slide-in": "slideIn 0.6s ease-out forwards",
        shine: "shine 3s linear infinite",
      },
    },
  },
  plugins: [],
};