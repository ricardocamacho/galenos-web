import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://ricardocamacho.github.io',
  base: '/galenos-web',
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()],
});
