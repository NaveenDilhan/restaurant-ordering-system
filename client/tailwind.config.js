module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        osaka: ['"osaka-re"', 'sans-serif'],
      },

      colors: {
        nikuman: {
          red: "#D64545",     // Japanese food red
          cream: "#FFF6E5",   // Soft bun color
          charcoal: "#2E2E2E"
        }
      },

      backgroundImage: {
        "japanese-pattern":
          "linear-gradient(135deg, rgba(214,69,69,0.08) 25%, transparent 25%), linear-gradient(225deg, rgba(214,69,69,0.08) 25%, transparent 25%), linear-gradient(45deg, rgba(214,69,69,0.08) 25%, transparent 25%), linear-gradient(315deg, rgba(214,69,69,0.08) 25%, transparent 25%)",
      },
    },
  },
  plugins: [],
};
