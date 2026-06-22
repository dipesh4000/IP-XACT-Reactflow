import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        shell: {
          950: "#06080d",
          900: "#0b1018",
          850: "#101721",
          800: "#151d29",
          700: "#223044",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
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
