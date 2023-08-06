/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        custom: {
          paid: "var(--text-paid)",
          pending: "var(--text-pending)",
          draft: "var(--text-draft)",
          access1: "var(--text-access)",
        },
      },
      backgroundColor: {
        custom: {
          base: "var(--main-bg)",
          btn: "var(--btn-bg)",
          card: "var(--card-bg)",
          nav: "var(--nav-bg)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
