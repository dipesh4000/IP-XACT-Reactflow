import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        shell: {
          950: "#0a0a0a",
          900: "#141414",
          850: "#1a1a1a",
          800: "#222222",
          700: "#333333",
          50:  "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
        }
      },
      boxShadow: {
        node: "0 18px 45px rgba(0, 0, 0, 0.35)",
        "node-light": "0 18px 45px rgba(0, 0, 0, 0.1)",
        glow: "0 0 30px var(--node-glow)"
      }
    }
  },
  plugins: []
} satisfies Config;
