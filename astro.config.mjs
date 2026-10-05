import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://rchrdkvcs.dev",
  integrations: [icon(), sitemap()],
  vite: { plugins: [tailwindcss()] },
  markdown: {
    shikiConfig: { theme: "material-theme" },
  },
});
