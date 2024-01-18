import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  static: {
    // Configura la carpeta 'public' como archivos estáticos
    directory: 'public',
  },
});