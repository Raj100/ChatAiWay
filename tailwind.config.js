/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgdark: "#1a1b1e",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        rotate: "rotate 10s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        rotate: {
          from: {
            transform: "translate(-50%, -50%) rotate(0deg) translate(200px) rotate(0deg)",
          },
          to: {
            transform: "translate(-50%, -50%) rotate(360deg) translate(200px) rotate(-360deg)",
          }
        },
      },
    },
  },
  plugins: [],
};
