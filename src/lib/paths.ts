const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Prefix an internal path with the configured Astro `base`.
 * GitHub Pages serves the mockup from /newbuild-mockup/, so every internal
 * link and asset path has to go through this helper.
 */
export function url(path = '/'): string {
  if (path === '/') return base ? `${base}/` : '/';
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
