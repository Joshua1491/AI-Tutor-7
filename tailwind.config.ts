import type { Config } from "tailwindcss";
import { createPreset } from "tailwindcss-shadcn-ui";
import tailwindAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

// https://tailwindcss.com/docs/configuration

export default {
  presets: [createPreset()],
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography, tailwindAnimate],
} satisfies Config;
