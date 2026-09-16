import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#642d90",
          "purple-dark": "#512478",
          "purple-deep": "#59318d",
          green: "#62be4b",
          "green-dark": "#4ea33b",
          muted: "#6b6b6b",
          footer: "#5e5e5e",
        },
      },
      fontFamily: {
        vazir: ["var(--font-vazirmatn)", "Tahoma", "sans-serif"],
      },
      boxShadow: {
        header: "0 1px 3px rgba(0,0,0,0.16)",
        card: "0 4px 18px rgba(100, 45, 144, 0.08)",
        "card-hover": "0 10px 28px rgba(100, 45, 144, 0.16)",
      },
      borderRadius: {
        header: "0 0 40px 40px",
        footer: "40px 40px 0 0",
        card: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
