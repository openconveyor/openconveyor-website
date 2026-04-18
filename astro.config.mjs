import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://openconveyor.ai",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap(), icon()],
  output: "static",
  adapter: vercel(),
});
