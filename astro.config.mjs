import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import path from 'path';

import icon from 'astro-icon';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), mdx(), svelte()],
  site: 'https://autumnssuns.github.io',
  vite: {
    resolve: {
      alias: {
        '@layouts': path.resolve(path.dirname(''), 'src/layouts'),
        '@blogs': path.resolve(path.dirname(''), 'src/pages/blogs'),
      },
    },
  },
});
