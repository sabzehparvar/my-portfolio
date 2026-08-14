import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: { wrap: "1080px" },
    },
  },
  plugins: [],
};
export default config;
