import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The mockup is served from a GitHub Pages project path.
// The production build on MilesWeb will use site: 'https://newbuild.co.in',
// base: '/', and no noindex meta.
export default defineConfig({
  site: 'https://karthikeyapodicheti.github.io',
  base: '/new-cobuild-upgraded-website',
  integrations: [sitemap()],
});
