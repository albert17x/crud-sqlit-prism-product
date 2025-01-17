/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: "#9ca3af",
        fondo1: "#6b7280",
        fondo2: "#030712",
        inputx: "#eff6ff",
        primario: "##10b981",
        secundario: "#f59e0b",
        terciario: "#7c3aed",
        cuarto: "#a3e635",
        no: "#b91c1c",
        si: "#2563eb"

      },
    },
  },
  plugins: [],
};
