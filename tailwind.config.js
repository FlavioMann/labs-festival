/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        bebas: ["var(--font-bebas)", "cursive"],
        mulish: ["var(--font-mulish)", "sans-serif"],
      },
      fontSize: {
        header: [
          "1rem",
          {
            fontWeight: "500",
            lineHeight: "1.5",
            letterSpacing: "-0.02em",
          },
        ],
        h3: [
          "2rem",
          { fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        h6: [
          "1rem",
          { fontWeight: "700", lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        p2: [
          "1rem",
          { fontWeight: "400", lineHeight: "1", letterSpacing: "-0.02em" },
        ],
      },
      colors: {
        dark: "#1E1E22",
        white: "#FFFFFF",
        orange: "#E96744",
        red: "#FF2828",
        green: "#008630",
        crimson: "#BE1E22",
        header: "#2B2B2E",
      },
      backgroundImage: {
        "header-gradient":
          "linear-gradient(to bottom, #2B2B2E 0%, rgba(43, 43, 46, 0.6) 60%, rgba(43, 43, 46, 0) 100%)",
      },
    },
  },
  plugins: [],
};
