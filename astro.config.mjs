import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://openconveyor.ai",
  integrations: [sitemap(), icon()],
  output: "static",
  compressHTML: true,
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});
