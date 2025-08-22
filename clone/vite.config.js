import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  content:["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",],
  plugins: [tailwindcss(), react()],
  css: {
    postcss: './postcss.config.js', // make sure you have tailwind configured
  },
});
